import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
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
        background: "rgba(11,15,26,0.55)",
        backdropFilter: "blur(12px)",
        borderRadius: "999px",
        padding: "0.875rem 2.5rem",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255,255,255,0.18)",
        border: "1px solid rgba(255,255,255,0.18)",
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
          const isProducts = item.name === "Products";
          
          if (isProducts) {
            return (
              <div
                key={item.path}
                style={{
                  position: "relative",
                }}
              >
                <div
                  style={{
                    textDecoration: "none",
                    color: isActive ? "#FFFFFF" : "#E5E7EB",
                    fontSize: "0.8125rem",
                    fontWeight: isActive ? "600" : "500",
                    padding: "0.625rem 1.125rem",
                    borderRadius: "999px",
                    background: isActive 
                      ? "rgba(0, 255, 255, 0.08)"
                      : "transparent",
                    transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                    position: "relative",
                    border: isActive ? "2px solid #00FFFF" : "1px solid transparent",
                    letterSpacing: "0.025em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                >
                  {item.name}
                  <span style={{ fontSize: "0.75rem" }}>▼</span>
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
                        background: "#00FFFF",
                        boxShadow: "0 0 8px rgba(0, 255, 255, 0.6)",
                      }}
                    />
                  )}
                </div>

                {/* Dropdown Menu */}
                {isProductsDropdownOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      marginTop: "0.5rem",
                      background: "rgba(11,15,26,0.95)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.18)",
                      borderRadius: "12px",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                      minWidth: "200px",
                      padding: "1rem 0",
                      zIndex: 1001,
                    }}
                  >
                    {/* Categories */}
                    <div style={{ padding: "0.5rem 1rem", fontSize: "0.75rem", fontWeight: "600", color: "#00FFFF", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Categories
                    </div>
                    <Link
                      to="/products/energy-shots"
                      style={{
                        display: "block",
                        padding: "0.75rem 1.5rem",
                        color: "#E5E7EB",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#00FFFF";
                        e.target.style.background = "rgba(0, 255, 255, 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#E5E7EB";
                        e.target.style.background = "transparent";
                      }}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Energy Shots
                    </Link>
                    <Link
                      to="/products/pills"
                      style={{
                        display: "block",
                        padding: "0.75rem 1.5rem",
                        color: "#E5E7EB",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#00FFFF";
                        e.target.style.background = "rgba(0, 255, 255, 0.08)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#E5E7EB";
                        e.target.style.background = "transparent";
                      }}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Pills
                    </Link>
                    <Link
                      to="/products"
                      style={{
                        display: "block",
                        padding: "0.75rem 1.5rem",
                        color: "#FFFFFF",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        marginTop: "0.5rem"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "transparent";
                      }}
                      onClick={() => setIsProductsDropdownOpen(false)}
                    >
                      Shop More
                    </Link>
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: "none",
                color: isActive ? "#FFFFFF" : "#E5E7EB",
                fontSize: "0.8125rem",
                fontWeight: isActive ? "600" : "500",
                padding: "0.625rem 1.125rem",
                borderRadius: "999px",
                background: isActive 
                  ? "rgba(0, 255, 255, 0.08)"
                  : "transparent",
                transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                position: "relative",
                border: isActive ? "2px solid #00FFFF" : "1px solid transparent",
                letterSpacing: "0.025em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.color = "#FFFFFF";
                  e.target.style.background = "rgba(0, 255, 255, 0.04)";
                  e.target.style.border = "1px solid rgba(0, 255, 255, 0.3)";
                  e.target.style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.color = "#E5E7EB";
                  e.target.style.background = "transparent";
                  e.target.style.border = "1px solid transparent";
                  e.target.style.transform = "translateY(0)";
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
                    background: "#00FFFF",
                    boxShadow: "0 0 8px rgba(0, 255, 255, 0.6)",
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
          background: "transparent",
          color: "#FFFFFF",
          border: "2px solid #00FFFF",
          textDecoration: "none",
          fontSize: "0.8125rem",
          fontWeight: "600",
          borderRadius: "999px",
          transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
          transform: "translateY(0)",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 255, 255, 0.2)";
          e.currentTarget.style.background = "rgba(0, 255, 255, 0.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.border = "2px solid #00FFFF";
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