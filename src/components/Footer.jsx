import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(11,15,26,0.65)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(0, 255, 255, 0.3)",
        marginTop: "auto",
        color: "#E5E7EB",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Top Row: Main Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "2rem 2rem 1.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Column 1: Logo and Description */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <img
              src="/chill tree white.png"
              alt="Chill Free"
              style={{
                height: "100px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#E5E7EB",
              lineHeight: "1.6",
              margin: 0,
              maxWidth: "280px",
            }}
          >
            Premium quality, naturally sourced energy products designed for modern wellness rituals.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              color: "#E5E7EB",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin: "0 0 1rem 0",
            }}
          >
            Quick Links
          </h3>
          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              Home
            </Link>
            <Link
              to="/products"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              Products
            </Link>
            <Link
              to="/subscribe"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              Subscribe
            </Link>
          </nav>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              color: "#E5E7EB",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin: "0 0 1rem 0",
            }}
          >
            Company
          </h3>
          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              About
            </Link>
            <Link
              to="/faq"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Column 3: Trust & Safety */}
        <div>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              color: "#E5E7EB",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin: "0 0 1rem 0",
            }}
          >
            Trust & Safety
          </h3>
          <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Link
              to="/labs"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              Lab Reports
            </Link>
            <Link
              to="/labs"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              Download Reports
            </Link>
            <Link
              to="/stores"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              Store Locator
            </Link>
            <Link
              to="/disclaimer"
              style={{
                textDecoration: "none",
                color: "#E5E7EB",
                fontSize: "0.875rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
              onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
            >
              21+ Disclaimer
            </Link>
          </nav>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              color: "#E5E7EB",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin: "0 0 1rem 0",
            }}
          >
            Contact
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#8FA0B5",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </div>
              <a
                href="mailto:info@chilltree.com"
                style={{
                  color: "#00FFFF",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--silver-primary)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--gold-primary)")}
              >
                info@chilltree.com
              </a>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#8FA0B5",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                }}
              >
                Phone
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <a
                  href="tel:+1234567890"
                  style={{
                    color: "#00FFFF",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.target.style.color = "#00FFFF")}
                >
                  +1 (234) 567-8900
                </a>
                <a
                  href="tel:+1234567891"
                  style={{
                    color: "#00FFFF",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.target.style.color = "#00FFFF")}
                >
                  +1 (234) 567-8901
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Column 5: Social Links */}
        <div>
          <h3
            style={{
              fontSize: "0.75rem",
              fontWeight: "700",
              color: "#E5E7EB",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              margin: "0 0 1rem 0",
            }}
          >
            Social Links
          </h3>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { name: "LinkedIn", image: "/linkedin.png" },
              { name: "Instagram", image: "/instagram.png" },
              { name: "YouTube", image: "/youtube.png" },
              { name: "Facebook", image: "/facebook.png" },
              { name: "X", image: "/twitter.png" },
              { name: "TikTok", image: "/tiktok.png" },
            ].map((social) => (
              <button
                key={social.name}
                type="button"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  backgroundColor: "rgba(0, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#00FFFF";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0, 255, 255, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label={social.name}
              >
                <img
                  src={social.image}
                  alt={social.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div
        style={{
          borderTop: "1px solid rgba(0, 255, 255, 0.2)",
          padding: "1rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          position: "relative",
        }}
      >
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Link
            to="/terms"
            style={{
              textDecoration: "none",
              color: "#E5E7EB",
              fontSize: "0.875rem",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
            onMouseLeave={(e) => (e.target.style.color = "#E5E7EB")}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            style={{
              textDecoration: "none",
              color: "#8FA0B5",
              fontSize: "0.875rem",
              transition: "color 0.2s ease",
              marginLeft: "0.5rem",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#00FFFF")}
            onMouseLeave={(e) => (e.target.style.color = "#8FA0B5")}
          >
            Terms of Service
          </Link>
        </div>
        <div style={{ fontSize: "0.875rem", color: "#8FA0B5", textAlign: "center", position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
          © 2026 Chilltree. All rights reserved.
        </div>
        <div style={{ fontSize: "0.875rem", color: "#8FA0B5", flex: 1, textAlign: "right" }}>
          Built for wellness enthusiasts and premium energy seekers.
        </div>
      </div>
    </footer>
  );
}
