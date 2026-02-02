import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "3rem 2rem",
        backgroundColor: "#000000",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        marginTop: "auto",
        gap: "1.5rem",
        flexWrap: "wrap",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left: Brand and Tagline */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #FFFFFF 0%, #E8EAF6 30%, #7c86b7 70%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "0.5rem",
          }}
        >
          Chilltree
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: "#D1D5DB",
            fontWeight: "400",
          }}
        >
          Premium quality, naturally sourced
        </div>
      </div>

      {/* Middle: Navigation Links */}
      <nav
        style={{
          display: "flex",
          gap: "1.5rem",
          flexWrap: "wrap",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Link
          to="/shipping"
          style={{
            textDecoration: "none",
            color: "#E5E7EB",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FFFFFF";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#E5E7EB";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Shipping
        </Link>
        <Link
          to="/returns"
          style={{
            textDecoration: "none",
            color: "#E5E7EB",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FFFFFF";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#E5E7EB";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Return Policy
        </Link>
        <Link
          to="/ordering-payment"
          style={{
            textDecoration: "none",
            color: "#E5E7EB",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FFFFFF";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#E5E7EB";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Ordering &amp; Payment
        </Link>
        <Link
          to="/terms"
          style={{
            textDecoration: "none",
            color: "#E5E7EB",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FFFFFF";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#E5E7EB";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Terms &amp; Conditions
        </Link>
        <Link
          to="/wholesale"
          style={{
            textDecoration: "none",
            color: "#E5E7EB",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FFFFFF";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#E5E7EB";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Wholesale
        </Link>
        <Link
          to="/signup"
          style={{
            textDecoration: "none",
            color: "#E5E7EB",
            fontSize: "0.875rem",
            fontWeight: "500",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#FFFFFF";
            e.target.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#E5E7EB";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Sign Up!
        </Link>
      </nav>

      {/* Right: Payments + Copyright */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
          {["VISA", "MASTERCARD", "AMEX", "DISCOVER"].map((brand) => (
            <div
              key={brand}
              style={{
                padding: "0.4rem 0.65rem",
                borderRadius: "999px",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                fontSize: "0.72rem",
                fontWeight: "800",
                letterSpacing: "0.08em",
                lineHeight: 1,
              }}
              aria-label={brand}
              title={brand}
            >
              <span
                style={{
                  background: "linear-gradient(135deg, #0B1C2D 0%, #0F2A44 50%, #7c86b7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {brand}
              </span>
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: "#D1D5DB",
            fontWeight: "400",
          }}
        >
          © 2026 Chilltree USA
        </div>
      </div>
    </footer>
  );
}
