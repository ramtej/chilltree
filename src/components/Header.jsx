import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/subscribe", label: "Subscribe" },
    { path: "/labs", label: "Labs" },
    { path: "/stores", label: "Stores" },
    { path: "/cart", label: "Cart" },
  ];

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1.75rem",
        backgroundColor: "#FFFFFF",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 1000,
        borderBottom: "2px solid rgba(11,44,93,0.08)",
        boxShadow: "0 2px 10px rgba(11, 44, 93, 0.08)",
        minHeight: "90px",
      }}
    >
      {/* Left: Chill Tree Logo */}
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <img
          src="/chilltree-logo.png"
          alt="Chill Tree"
          style={{
            height: "100px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      </Link>

      {/* Center: Navigation Links in Rounded Container */}
      <nav
        style={{
          display: "flex",
          gap: "0.25rem",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(11,44,93,0.05)",
          borderRadius: "999px",
          padding: "0.5rem 1rem",
          boxShadow: "0 4px 20px rgba(11, 44, 93, 0.12)",
        }}
      >
        {navLinks.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                textDecoration: "none",
                color: isActive ? "#FFFFFF" : "#0B2C5D",
                fontSize: "0.9rem",
                fontWeight: isActive ? "600" : "400",
                padding: "0.55rem 1.1rem",
                borderRadius: "999px",
                background: isActive ? "linear-gradient(135deg, #06182A 0%, #0B2C5D 50%, #1E4A7C 100%)" : "transparent",
                transition: "all 0.2s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.color = "#0B2C5D";
                  e.target.style.backgroundColor = "rgba(245, 215, 110, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.color = "#0B2C5D";
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              {link.label}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right: Sign In Button */}
      <Link
        to="/signin"
        style={{
          textDecoration: "none",
          background: "linear-gradient(135deg, var(--gold-light) 0%, var(--gold-main) 50%, var(--gold-light) 100%)",
          color: "#0B2C5D",
          fontSize: "0.9rem",
          fontWeight: "700",
          padding: "0.55rem 1.5rem",
          borderRadius: "8px",
          transition: "all 0.2s ease",
          boxShadow: "0 2px 8px rgba(140, 106, 21, 0.3)",
        }}
        onMouseEnter={(e) => {
          e.target.style.background = "linear-gradient(135deg, var(--gold-light) 0%, var(--gold-light) 50%, var(--gold-light) 100%)";
          e.target.style.transform = "translateY(-1px)";
          e.target.style.boxShadow = "0 4px 12px rgba(140, 106, 21, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "linear-gradient(135deg, var(--gold-light) 0%, var(--gold-main) 50%, var(--gold-light) 100%)";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 2px 8px rgba(140, 106, 21, 0.3)";
        }}
      >
        Sign in
      </Link>
    </header>
  );
}
