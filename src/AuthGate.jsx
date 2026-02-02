import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import UserApp from "./UserApp";
const AdminApp = lazy(() => import("./AdminApp"));

export default function AuthGate() {
  const [role, setRole] = useState(() => {
    // Initialize state from localStorage
    return localStorage.getItem("role");
  });
  const navigate = useNavigate();
  const location = useLocation();
  const previousRoleRef = useRef(role);

  useEffect(() => {
    // Listen for storage changes (e.g., when login updates role)
    const handleStorageChange = () => {
      const updatedRole = localStorage.getItem("role");
      setRole(updatedRole);
    };

    window.addEventListener("storage", handleStorageChange);
    
    // Also listen for custom event in case localStorage is updated in same window
    const handleRoleUpdated = () => {
      // Immediately read from localStorage and update state
      const updatedRole = localStorage.getItem("role");
      setRole(updatedRole);
    };
    
    window.addEventListener("roleUpdated", handleRoleUpdated);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("roleUpdated", handleRoleUpdated);
    };
  }, []);

  // Handle navigation after role changes (only when role actually changes)
  useEffect(() => {
    // Only navigate if role changed and we're on /signin
    if (role !== previousRoleRef.current && location.pathname === "/signin") {
      if (role === "admin") {
        // Small delay to ensure state update and re-render complete
        const timer = setTimeout(() => {
          console.log("Navigating to admin dashboard");
          navigate("/admin/dashboard", { replace: true });
        }, 100);
        return () => clearTimeout(timer);
      } else if (role === "user") {
        const timer = setTimeout(() => {
          console.log("Navigating to home page");
          navigate("/", { replace: true });
        }, 100);
        return () => clearTimeout(timer);
      } else if (role === "user") {
        const timer = setTimeout(() => {
          console.log("Navigating to home page");
          navigate("/", { replace: true });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
    previousRoleRef.current = role;
  }, [role, location.pathname, navigate]);

  // Protect admin routes: if user is not admin, send them to /signin
  useEffect(() => {
    const isAdminRoute = location.pathname.startsWith("/admin");
    if (isAdminRoute && role !== "admin") {
      // If a non-admin (or logged-out user) hits an admin route,
      // send them back to the main customer experience
      navigate("/", { replace: true });
    }
  }, [location.pathname, role, navigate]);

  // If on /signin route, always render Login page without Header/Footer
  if (location.pathname === "/signin") {
    return <Login />;
  }

  const isAdminRoute = location.pathname.startsWith("/admin");

  // Admin routes: only show when role is admin
  if (isAdminRoute) {
    if (role !== "admin") {
      // While redirecting, render nothing
      return null;
    }
    return (
      <Suspense fallback={<div>Loading admin...</div>}>
        <AdminApp />
      </Suspense>
    );
  }

  // All non-admin routes: always show customer app (UserApp)
  return <UserApp />;
}
