import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let timeoutId;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Clear existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Debounce scroll events
      timeoutId = setTimeout(() => {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - hide header
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show header
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Subscribe", path: "/subscribe" },
    { name: "About", path: "/about" },
    { name: "Lab Reports", path: "/labs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: isVisible ? "20px" : "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
        background: "rgba(7, 20, 38, 0.72)",
        backdropFilter: "blur(24px)",
        borderRadius: "999px",
        padding: "0.875rem 2.5rem",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.15)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        maxWidth: "85vw",
        display: "flex",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      {/* Centered Navigation */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: "none",
                color: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.64)",
                fontSize: "0.8125rem",
                fontWeight: isActive ? "600" : "500",
                padding: "0.625rem 1.125rem",
                borderRadius: "999px",
                background: isActive 
                  ? "linear-gradient(135deg, rgba(212, 175, 55, 0.24), rgba(212, 175, 55, 0.08))"
                  : "transparent",
                transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",
                border: isActive ? "1px solid rgba(212, 175, 55, 0.32)" : "1px solid transparent",
                letterSpacing: "0.025em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.color = "#FFFFFF";
                  e.target.style.background = "rgba(212, 175, 55, 0.08)";
                  e.target.style.border = "1px solid rgba(212, 175, 55, 0.16)";
                  e.target.style.transform = "translateY(-1px)";
                  e.target.style.boxShadow = "0 4px 16px rgba(212, 175, 55, 0.12)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.color = "rgba(255, 255, 255, 0.64)";
                  e.target.style.background = "transparent";
                  e.target.style.border = "1px solid transparent";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }
              }}
            >
              {item.name}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    width: "3px",
                    height: "3px",
                    borderRadius: "50%",
                    background: "#F5D76E",
                    boxShadow: "0 0 12px rgba(245, 215, 110, 0.8)",
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sign In Button */}
      <Link
        to="/signin"
        style={{
          display: "inline-block",
          padding: "0.6875rem 1.75rem",
          background: "linear-gradient(135deg, #F5D76E, #C9A227, #8C6A15)",
          color: "#071426",
          textDecoration: "none",
          fontSize: "0.8125rem",
          fontWeight: "600",
          borderRadius: "999px",
          transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: "0 6px 20px rgba(212, 175, 55, 0.32)",
          border: "1px solid rgba(245, 215, 110, 0.24)",
          transform: "translateY(0)",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.48)";
          e.currentTarget.style.background = "linear-gradient(135deg, #F5D76E, #F5D76E, #C9A227)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.32)";
          e.currentTarget.style.background = "linear-gradient(135deg, #F5D76E, #C9A227, #8C6A15)";
          e.currentTarget.style.border = "1px solid rgba(245, 215, 110, 0.24)";
        }}
      >
        Sign In
      </Link>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "white",
          fontSize: "1.25rem",
          cursor: "pointer",
          padding: "0.5rem",
          borderRadius: "999px",
          transition: "all 0.2s ease",
          "@media (max-width: 768px)": {
            display: "block",
            position: "absolute",
            top: "50%",
            right: "1rem",
            transform: "translateY(-50%)",
          },
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "none";
        }}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}