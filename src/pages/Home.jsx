import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  
  // Map product IDs to their specific images
  const productImageMap = {
    1: "/featured-1.png", // Mit + Kava Shot - ENHANCED RECOVERY
    2: "/featured-2.png", // Chilltree Original
    3: "/featured-3.png", // Citrus Burst Energy
    4: "/featured-4.png", // Berry Fusion Boost
  };

  const handleAddToCart = (productId) => {
    console.log("Add to cart:", productId);
  };
  return (
    <>
    <section
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
        padding: "6rem 2rem",
        paddingTop: "7rem",
        minHeight: "700px",
        width: "100%",
        background: "linear-gradient(135deg, #081421, #0F2A44, #7c86b7)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "3rem",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Left Column: Heading, Subtext, and Button */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 7vw, 4.75rem)",
              fontWeight: "900",
              margin: 0,
              lineHeight: "1.2",
              letterSpacing: "-0.035em",
              background: "linear-gradient(135deg, #E0E0E0 0%, #FFFFFF 15%, #B0B0B0 40%, #8A9BAA 70%, #607080 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span>Premium</span>
            <span>Energy.</span>
            <span>Naturally.</span>
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#D1D5DB",
              lineHeight: "1.8",
              margin: 0,
              maxWidth: "640px",
            }}
          >
            Chilltree offers premium, naturally sourced energy to elevate focus,
            recovery, and calm. Small-batch crafted, lab tested, and designed for
            modern wellness rituals.
          </p>
          <Link
            to="/products"
            style={{
              display: "inline-block",
              padding: "1.2rem 3.4rem",
              backgroundColor: "#7c86b7",
              color: "#FFFFFF",
              textDecoration: "none",
              borderRadius: "999px",
              fontSize: "1.125rem",
              fontWeight: "700",
              width: "fit-content",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#9FA8DA";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#7c86b7";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Shop Now
          </Link>
        </div>

        {/* Right Column: Product Image */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/hero-product.png"
            alt="Chilltree Premium Energy Products"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "12px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>

    {/* Featured Products Section */}
    <section
      style={{
        padding: "6rem 2rem",
        maxWidth: "1400px",
        margin: "0 auto",
        backgroundColor: "#F8FAFC",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "700",
          color: "#0B1C2D",
          textAlign: "center",
          marginBottom: "3rem",
          letterSpacing: "-0.02em",
        }}
      >
        Featured Products
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
        }}
      >
        {featuredProducts.map((product, idx) => (
          <div
            key={product.id}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(15, 42, 68, 0.08)",
              transition: "all 0.3s ease",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(15, 42, 68, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(15, 42, 68, 0.08)";
            }}
          >
            {/* Image Container with Sale Badge */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
                backgroundColor: "#e5e7eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {productImageMap[product.id] ? (
                <img
                  src={productImageMap[product.id]}
                  alt={product.name}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : null}
              {/* Sale Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  backgroundColor: "#D4AF37",
                  color: "#0B1C2D",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  zIndex: 1,
                }}
              >
                Sale
              </div>
            </div>

            {/* Product Info */}
            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                flex: 1,
              }}
            >
              {/* Product Name */}
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#0B1C2D",
                }}
              >
                {product.name}
              </h3>

              {/* Price */}
              <div
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#475569",
                }}
              >
                From ${product.price.toFixed(2)}
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product.id)}
                style={{
                  padding: "0.875rem 1.5rem",
                  backgroundColor: "#0F2A44",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  marginTop: "auto",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0B1C2D";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#0F2A44";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Subscription Banner */}
    <section
      style={{
        width: "100%",
        backgroundColor: "#0F2A44",
        color: "#FFFFFF",
        padding: "7rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "2.5rem",
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: "800",
          color: "#FFFFFF",
          letterSpacing: "-0.02em",
          lineHeight: "1.2",
        }}
      >
        Subscribe & Save 20%
      </h2>
      <p
        style={{
          margin: 0,
          fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
          color: "#D1D5DB",
          maxWidth: "650px",
          lineHeight: "1.7",
        }}
      >
        Get your energy delivered every month at a discounted price.
      </p>
      <Link
        to="/subscribe"
        style={{
          display: "inline-block",
          padding: "1.375rem 3.5rem",
          backgroundColor: "#D4AF37",
          color: "#0F2A44",
          textDecoration: "none",
          borderRadius: "8px",
          fontSize: "1.25rem",
          fontWeight: "700",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(212, 175, 55, 0.2)",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#e6c04a";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#D4AF37";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 4px 15px rgba(212, 175, 55, 0.2)";
        }}
      >
        Subscribe Now
      </Link>
    </section>

    {/* Trust Section - Premium Style */}
    <section
      style={{
        padding: "8rem 2rem",
        width: "100%",
        background: "linear-gradient(180deg, #F8FAFC, #EEF2F7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            maxWidth: "800px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "700",
              color: "#0B1C2D",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
            }}
          >
            Lab Tested. Transparent.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "1.125rem",
              color: "#475569",
              lineHeight: "1.75",
              maxWidth: "700px",
              fontWeight: "400",
            }}
          >
            Every Chilltree product undergoes rigorous third-party lab testing to
            ensure purity, potency, and safety. We believe in complete transparency
            and make all lab reports available to our customers.
          </p>
        </div>

        {/* Trust Icons/Boxes - Premium Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "stretch",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
              padding: "2.5rem 2rem",
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              minWidth: "180px",
              flex: "1 1 200px",
              maxWidth: "240px",
              boxShadow: "0 10px 30px rgba(15, 42, 68, 0.08)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(15, 42, 68, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(15, 42, 68, 0.08)";
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #E6C15A, #D4AF37)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                color: "#ffffff",
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(230, 193, 90, 0.3)",
              }}
            >
              ✓
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#0B1C2D",
                letterSpacing: "-0.01em",
              }}
            >
              Third-Party Tested
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
              padding: "2.5rem 2rem",
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              minWidth: "180px",
              flex: "1 1 200px",
              maxWidth: "240px",
              boxShadow: "0 10px 30px rgba(15, 42, 68, 0.08)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(15, 42, 68, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(15, 42, 68, 0.08)";
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #E6C15A, #D4AF37)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                color: "#ffffff",
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(230, 193, 90, 0.3)",
              }}
            >
              📋
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#0B1C2D",
                letterSpacing: "-0.01em",
              }}
            >
              Full Reports
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
              padding: "2.5rem 2rem",
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              minWidth: "180px",
              flex: "1 1 200px",
              maxWidth: "240px",
              boxShadow: "0 10px 30px rgba(15, 42, 68, 0.08)",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(15, 42, 68, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(15, 42, 68, 0.08)";
            }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #E6C15A, #D4AF37)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
                color: "#ffffff",
                fontWeight: "bold",
                boxShadow: "0 4px 12px rgba(230, 193, 90, 0.3)",
              }}
            >
              🔬
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "#0B1C2D",
                letterSpacing: "-0.01em",
              }}
            >
              Certified Labs
            </div>
          </div>
        </div>

        <Link
          to="/labs"
          style={{
            display: "inline-block",
            padding: "1.25rem 3rem",
            backgroundColor: "#0F2A44",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "12px",
            fontSize: "1.0625rem",
            fontWeight: "600",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            marginTop: "0.5rem",
            boxShadow: "0 4px 15px rgba(15, 42, 68, 0.15)",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0B1C2D";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 24px rgba(15, 42, 68, 0.25)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#0F2A44";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 15px rgba(15, 42, 68, 0.15)";
          }}
        >
          View Lab Reports
        </Link>
      </div>
    </section>
    </>
  );
}
