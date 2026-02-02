import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const productImageMap = {
    1: "/featured-1.png",
    2: "/featured-2.png",
    3: "/featured-3.png",
    4: "/featured-4.png",
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
          background: "linear-gradient(135deg, #0a2540 0%, #0d3a5c 50%, #1e4a73 100%)",
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
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              overflow: "visible",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(3.75rem, 9vw, 6rem)",
                fontWeight: "900",
                margin: 0,
                marginBottom: "0.5rem",
                lineHeight: "1.05",
                letterSpacing: "-0.05em",
                background: "linear-gradient(135deg, #FFFFFF 0%, #e1e8ed 20%, #cfd8dc 40%, #b0bec5 60%, #90a4ae 80%, #FFFFFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                overflow: "visible",
                paddingBottom: "0.75rem",
                position: "relative",
                textTransform: "none",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                backgroundSize: "200% 200%",
                animation: "gradientShift 8s ease infinite",
              }}
            >
              Premium Energy. Naturally.
            </h1>
            <style>{`
              @keyframes gradientShift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
              }
            `}</style>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#e1e8ed",
                lineHeight: "1.8",
                margin: 0,
                maxWidth: "640px",
                fontWeight: "400",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
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
                padding: "1.25rem 3.5rem",
                background: "linear-gradient(135deg, #d4af37 0%, #e0c050 50%, #e8ce6a 100%)",
                color: "#0a2540",
                textDecoration: "none",
                borderRadius: "999px",
                fontSize: "1.125rem",
                fontWeight: "700",
                width: "fit-content",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 8px 30px rgba(212, 175, 55, 0.4), 0 0 20px rgba(212, 175, 55, 0.2)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "linear-gradient(135deg, #e0c050 0%, #e8ce6a 50%, #f0dc84 100%)";
                e.target.style.transform = "translateY(-3px) scale(1.02)";
                e.target.style.boxShadow = "0 12px 40px rgba(212, 175, 55, 0.5), 0 0 30px rgba(212, 175, 55, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "linear-gradient(135deg, #d4af37 0%, #e0c050 50%, #e8ce6a 100%)";
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 30px rgba(212, 175, 55, 0.4), 0 0 20px rgba(212, 175, 55, 0.2)";
              }}
            >
              Shop Now
            </Link>
          </div>

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

      {/* Featured Products */}
      <section
        style={{
          padding: "6rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
          background: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "3rem",
            letterSpacing: "-0.02em",
            background: "linear-gradient(135deg, #0a2540 0%, #0d3a5c 40%, #1e4a73 70%, #0a2540 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 2px 8px rgba(10, 37, 64, 0.15))",
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
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(10, 37, 64, 0.08)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #cfd8dc",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 45px rgba(10, 37, 64, 0.2), 0 4px 12px rgba(10, 37, 64, 0.12)";
                e.currentTarget.style.borderColor = "#d4af37";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(10, 37, 64, 0.08)";
                e.currentTarget.style.borderColor = "#cfd8dc";
              }}
            >
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
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "linear-gradient(135deg, #d4af37 0%, #e0c050 100%)",
                    color: "#0a2540",
                    padding: "0.5rem 0.875rem",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                    fontWeight: "800",
                    zIndex: 1,
                    boxShadow: "0 4px 12px rgba(212, 175, 55, 0.4)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Sale
                </div>
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  flex: 1,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #0a2540 0%, #1e4a73 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {product.name}
                </h3>

                <div
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#2e7d32",
                  }}
                >
                  From ${product.price.toFixed(2)}
                </div>

                <button
                  onClick={() => handleAddToCart(product.id)}
                  style={{
                    padding: "0.875rem 1.5rem",
                    background: "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "1rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    marginTop: "auto",
                    boxShadow: "0 4px 15px rgba(10, 37, 64, 0.3)",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #43a047 0%, #4caf50 100%)";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 20px rgba(10, 37, 64, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 15px rgba(10, 37, 64, 0.3)";
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subscribe Banner */}
      <section
        style={{
          width: "100%",
          background: "linear-gradient(135deg, #0a2540 0%, #0d3a5c 40%, #1e4a73 70%, #0d3a5c 100%)",
          color: "#FFFFFF",
          padding: "8rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "2.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(10, 37, 64, 0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "900",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            background: "linear-gradient(135deg, #FFFFFF 0%, #fdf9e6 20%, #faf4cc 50%, #d4af37 80%, #FFFFFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 20px rgba(10, 37, 64, 0.4))",
            position: "relative",
            zIndex: 1,
          }}
        >
          Subscribe & Save 20%
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
            color: "#e1e8ed",
            maxWidth: "650px",
            lineHeight: "1.8",
            fontWeight: "400",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            position: "relative",
            zIndex: 1,
          }}
        >
          Get your energy delivered every month at a discounted price.
        </p>
        <Link
          to="/subscribe"
          style={{
            display: "inline-block",
            padding: "1.5rem 4rem",
            background: "linear-gradient(135deg, #FFFFFF 0%, #fdf9e6 30%, #faf4cc 60%, #d4af37 100%)",
            color: "#0a2540",
            textDecoration: "none",
            borderRadius: "999px",
            fontSize: "1.25rem",
            fontWeight: "800",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 10px 40px rgba(255, 255, 255, 0.3), 0 0 30px rgba(212, 175, 55, 0.4)",
            letterSpacing: "0.02em",
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "linear-gradient(135deg, #FFFFFF 0%, #fdf9e6 25%, #faf4cc 50%, #e8ce6a 75%, #d4af37 100%)";
            e.target.style.transform = "translateY(-4px) scale(1.03)";
            e.target.style.boxShadow = "0 15px 50px rgba(255, 255, 255, 0.4), 0 0 40px rgba(10, 37, 64, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "linear-gradient(135deg, #FFFFFF 0%, #fdf9e6 30%, #faf4cc 60%, #d4af37 100%)";
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "0 10px 40px rgba(255, 255, 255, 0.3), 0 0 30px rgba(212, 175, 55, 0.4)";
          }}
        >
          Subscribe Now
        </Link>
      </section>

      {/* Trust Section */}
      <section
        style={{
          padding: "8rem 2rem",
          width: "100%",
          background: "#ffffff",
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
            position: "absolute",
            top: "10%",
            right: "-10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(10, 37, 64, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(10, 37, 64, 0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
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
                fontWeight: "800",
                letterSpacing: "-0.02em",
                lineHeight: "1.2",
                background: "linear-gradient(135deg, #0a2540 0%, #0d3a5c 30%, #1e4a73 60%, #0a2540 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 2px 10px rgba(10, 37, 64, 0.2))",
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
                boxShadow: "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(11, 28, 45, 0.08)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
                border: "1px solid rgba(10, 37, 64, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 45px rgba(10, 37, 64, 0.2), 0 4px 12px rgba(11, 28, 45, 0.12)";
                e.currentTarget.style.borderColor = "rgba(10, 37, 64, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(11, 28, 45, 0.08)";
                e.currentTarget.style.borderColor = "rgba(10, 37, 64, 0.1)";
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "linear-gradient(135deg, #2e7d32 0%, #43a047 50%, #4caf50 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  color: "#ffffff",
                  fontWeight: "bold",
                  boxShadow: "0 6px 20px rgba(10, 37, 64, 0.4)",
                }}
              >
                ✓
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #0a2540 0%, #1e4a73 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
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
                boxShadow: "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(11, 28, 45, 0.08)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
                border: "1px solid rgba(10, 37, 64, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 45px rgba(10, 37, 64, 0.2), 0 4px 12px rgba(11, 28, 45, 0.12)";
                e.currentTarget.style.borderColor = "rgba(10, 37, 64, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(11, 28, 45, 0.08)";
                e.currentTarget.style.borderColor = "rgba(10, 37, 64, 0.1)";
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "linear-gradient(135deg, #2e7d32 0%, #43a047 50%, #4caf50 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  color: "#ffffff",
                  fontWeight: "bold",
                  boxShadow: "0 6px 20px rgba(10, 37, 64, 0.4)",
                }}
              >
                📋
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #0a2540 0%, #1e4a73 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
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
                boxShadow: "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(11, 28, 45, 0.08)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
                border: "1px solid rgba(10, 37, 64, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 45px rgba(10, 37, 64, 0.2), 0 4px 12px rgba(11, 28, 45, 0.12)";
                e.currentTarget.style.borderColor = "rgba(10, 37, 64, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(10, 37, 64, 0.12), 0 2px 8px rgba(11, 28, 45, 0.08)";
                e.currentTarget.style.borderColor = "rgba(10, 37, 64, 0.1)";
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  background: "linear-gradient(135deg, #2e7d32 0%, #43a047 50%, #4caf50 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  color: "#ffffff",
                  fontWeight: "bold",
                  boxShadow: "0 6px 20px rgba(10, 37, 64, 0.4)",
                }}
              >
                🔬
              </div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #0a2540 0%, #1e4a73 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
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
              padding: "1.3rem 3.5rem",
              background: "linear-gradient(135deg, #0a2540 0%, #0d3a5c 40%, #1e4a73 70%, #0d3a5c 100%)",
              color: "#FFFFFF",
              textDecoration: "none",
              borderRadius: "999px",
              fontSize: "1.0625rem",
              fontWeight: "700",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              marginTop: "0.5rem",
              boxShadow: "0 8px 30px rgba(10, 37, 64, 0.3), 0 4px 15px rgba(10, 37, 64, 0.2)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "linear-gradient(135deg, #0d3a5c 0%, #1e4a73 40%, #2d5a8a 70%, #1e4a73 100%)";
              e.target.style.transform = "translateY(-3px) scale(1.02)";
              e.target.style.boxShadow = "0 12px 40px rgba(10, 37, 64, 0.4), 0 6px 20px rgba(10, 37, 64, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "linear-gradient(135deg, #0a2540 0%, #0d3a5c 40%, #1e4a73 70%, #0d3a5c 100%)";
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 8px 30px rgba(10, 37, 64, 0.3), 0 4px 15px rgba(10, 37, 64, 0.2)";
            }}
          >
            View Lab Reports
          </Link>
        </div>
      </section>
    </>
  );
}
