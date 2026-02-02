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
      {/* Hero Section - Premium Energy. Naturally. */}
      <section
        className="hero-section"
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "var(--gradient-hero)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Premium Grain Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "var(--grain-overlay)",
            pointerEvents: "none",
            opacity: 0.8,
          }}
        />
        
        {/* Floating Premium Orbs */}
        <div
          className="float"
          style={{
            position: "absolute",
            top: "15%",
            left: "8%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            filter: "blur(1px)",
          }}
        />
        <div
          className="float"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "8%",
            width: "250px",
            height: "250px",
            background: "radial-gradient(circle, rgba(15, 107, 79, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            animationDelay: "2s",
            filter: "blur(1px)",
          }}
        />
        <div
          className="float"
          style={{
            position: "absolute",
            top: "60%",
            left: "20%",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, rgba(11, 44, 93, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            animationDelay: "1s",
          }}
        />
        
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "5rem",
            maxWidth: "1400px",
            width: "100%",
            padding: "3rem 2rem",
            zIndex: 2,
          }}
        >
          {/* Left Content - Premium */}
          <div
            className="fade-in-up"
            style={{
              flex: "1",
              minWidth: "400px",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem",
            }}
          >
            {/* Premium Trust Badges */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div className="trust-badge">
                <span>✓</span>
                <span>Lab Verified</span>
              </div>
              <div className="trust-badge">
                <span>⭐</span>
                <span>Premium Quality</span>
              </div>
              <div className="trust-badge">
                <span>🏆</span>
                <span>Award Winning</span>
              </div>
            </div>
            
            {/* Premium Headline */}
            <div>
              <h1
                style={{
                  fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
                  fontWeight: 700,
                  margin: 0,
                  lineHeight: 1.2,
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-heading)",
                  textShadow: "0 8px 32px rgba(11, 44, 93, 0.4), 0 4px 16px rgba(11, 44, 93, 0.3)",
                  filter: "drop-shadow(0 8px 24px rgba(245, 215, 110, 0.3))",
                  display: "block",
                  width: "100%",
                  overflow: "visible",
                  paddingBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    background: "linear-gradient(135deg, #F5D76E 0%, #C9A227 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 40px rgba(245, 215, 110, 0.2)",
                  }}
                >
                  Clean Energy
                </span>{" "}
                <span
                  style={{
                    color: "#FFFFFF",
                    textShadow: "0 8px 32px rgba(11, 44, 93, 0.6), 0 0 60px rgba(245, 215, 110, 0.1)",
                  }}
                >
                  Without the
                </span>{" "}
                <span
                  style={{
                    color: "#E6E6E6",
                    textShadow: "0 8px 32px rgba(11, 44, 93, 0.4), 0 0 40px rgba(245, 215, 110, 0.1)",
                  }}
                >
                  Crash.
                </span>
              </h1>
              <div
                style={{
                  width: "120px",
                  height: "4px",
                  background: "linear-gradient(135deg, #F5D76E 0%, #C9A227 100%)",
                  marginTop: "1.5rem",
                  borderRadius: "2px",
                  boxShadow: "0 0 20px rgba(245, 215, 110, 0.4), 0 0 40px rgba(245, 215, 110, 0.2)",
                }}
              />
            </div>
            
            {/* Premium Description */}
            <div
              className="glass-card"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(201, 162, 39, 0.2)",
                padding: "2rem",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <p
                style={{
                  fontSize: "1.375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  margin: 0,
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  textShadow: '0 4px 16px rgba(11, 44, 93, 0.3)'
                }}
              >
                Lab-tested botanics that deliver calm, focus, and clarity in minutes.
              </p>
              
              {/* Micro-proof line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '1rem',
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                <span>10,000+ bottles shipped</span>
                <span>•</span>
                <span>Batch #0423 tested</span>
                <span>•</span>
                <span>No synthetic stimulants</span>
              </div>
            </div>
            
            {/* Dual CTA Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <button
                className="premium-btn"
                style={{
                  fontSize: "1.25rem",
                  padding: "1.5rem 3rem",
                  background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--gold-light) 100%)",
                  color: "var(--primary-blue)",
                  fontWeight: 700,
                  boxShadow: "0 8px 32px rgba(201, 162, 39, 0.4), 0 4px 16px rgba(201, 162, 39, 0.3)"
                }}
              >
                Start My Subscription
              </button>
              <button
                className="premium-btn"
                style={{
                  fontSize: "1.125rem",
                  padding: "1.25rem 3rem",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "2px solid rgba(255,255,255,0.3)",
                  fontWeight: 600
                }}
              >
                One-time Purchase
              </button>
            </div>
          </div>

          {/* Right - Premium Floating Product */}
          <div
            className="fade-in-up"
            style={{
              flex: "1",
              minWidth: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              animationDelay: "0.4s",
            }}
          >
            {/* Premium Product Glow */}
            <div
              className="gold-glow"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "150%",
                height: "150%",
                background: "radial-gradient(circle, rgba(201, 162, 39, 0.2) 0%, transparent 60%)",
                borderRadius: "50%",
                pointerEvents: "none",
                filter: "blur(2px)",
              }}
            />
            
            {/* Premium Product Container */}
            <div
              className="glass-card"
              style={{
                padding: "2rem",
                background: "rgba(248, 250, 252, 0.8)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201, 162, 39, 0.3)",
                borderRadius: "var(--radius-xl)",
                position: "relative",
                zIndex: 2,
              }}
            >
              <img
                src="/result_0.png"
                alt="Chilltree Premium Energy"
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "auto",
                  filter: "drop-shadow(0 50px 100px rgba(0, 0, 0, 0.25))",
                  transition: "transform var(--transition-smooth)",
                  borderRadius: "var(--radius-lg)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.08) translateY(-15px) rotate(2deg)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1) translateY(0) rotate(0)";
                }}
              />
              
              {/* Premium Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "-1rem",
                  right: "-1rem",
                  background: "var(--gradient-gold)",
                  color: "var(--text-primary)",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "999px",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  boxShadow: "var(--shadow-gold-glow)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transform: "rotate(12deg)",
                }}
              >
                Premium
              </div>
            </div>
          </div>
        </div>
        
        <style>{`
          @keyframes titleShimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      </section>

      {/* Trust Strip - Directly Under Hero */}
      <section
        className="trust-strip"
        style={{
          width: "100%",
          background: "var(--surface)",
          padding: "2rem",
          borderBottom: "1px solid var(--neutral-silver)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-secondary)"
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>✓</span>
            <span>Lab Tested</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-secondary)"
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🏆</span>
            <span>Award Winning</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-secondary)"
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>🌿</span>
            <span>Premium Botanics</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-secondary)"
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>📦</span>
            <span>10,000+ Orders</span>
          </div>
        </div>
      </section>

      {/* Premium Collection */}
      <section
        className="premium-collection-section"
        style={{
          position: 'relative',
        }}
      >
        {/* Floating Premium Orbs */}
        <div 
          className="premium-orb premium-orb-gold" 
          style={{
            top: '20%',
            left: '10%',
            animationDelay: '0s'
          }} 
        />
        <div 
          className="premium-orb premium-orb-green" 
          style={{
            bottom: '20%',
            right: '15%',
            animationDelay: '3s'
          }} 
        />
        <div 
          className="premium-orb premium-orb-gold" 
          style={{
            top: '50%',
            left: '60%',
            animationDelay: '6s'
          }} 
        />
        
        <div
          className="premium-fade-in-up"
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            position: 'relative',
            zIndex: 2,
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem'
          }}
        >
          <h2 className="premium-collection-title title-shimmer">
            <span className="premium">Premium</span>{' '}
            <span className="collection">Collection</span>
          </h2>
          <div
            style={{
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #F5D76E, #C9A227)',
              margin: '2rem auto',
              borderRadius: '2px',
              boxShadow: '0 0 20px rgba(245, 215, 110, 0.4), 0 0 40px rgba(245, 215, 110, 0.2)',
            }}
          />
          <p
            style={{
              fontSize: '1.25rem',
              color: '#FFFFFF',
              maxWidth: '600px',
              margin: '0 auto',
              fontFamily: 'var(--font-body)',
              lineHeight: 1.7,
              fontWeight: 500,
              textShadow: '0 4px 16px rgba(11, 44, 93, 0.3)'
            }}
          >
            Discover our carefully curated selection of premium wellness products crafted for extraordinary results
          </p>
        </div>

        {/* Most Popular Choices Label */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto 2rem auto",
            padding: "0 2rem"
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--gold-light) 100%)",
              color: "var(--primary-blue)",
              padding: "0.5rem 1.5rem",
              borderRadius: "999px",
              fontSize: "0.875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 16px rgba(201, 162, 39, 0.3)"
            }}
          >
            Most Popular Choices
          </div>
        </div>

        {/* Product Grid - 3 Products Only */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "3rem",
            marginBottom: "4rem",
            position: "relative",
            zIndex: 2,
            maxWidth: "1200px",
            margin: "0 auto 4rem auto",
            padding: "0 2rem"
          }}
        >
          {featuredProducts.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className="premium-card premium-fade-in-up"
              style={{
                padding: "2.5rem",
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Product Image */}
              <div
                style={{
                  position: "relative",
                  marginBottom: "2rem",
                  overflow: "hidden",
                  borderRadius: "12px",
                }}
              >
                <img
                  src={productImageMap[product.id]}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    border: "2px solid #000000",
                    borderRadius: "12px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "linear-gradient(90deg, #F5D76E, #C9A227)",
                    color: "#0B2C5D",
                    padding: "0.5rem 1rem",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    boxShadow: "0 0 20px rgba(245, 215, 110, 0.4)",
                  }}
                >
                  Save 20%
                </div>
              </div>
              
              {/* Product Name */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  margin: "0 0 1rem 0",
                  fontFamily: "var(--font-heading)",
                  letterSpacing: "-0.02em",
                }}
              >
                {product.name}
              </h3>
              
              {/* Premium Badge */}
              <div
                className="trust-badge"
                style={{
                  background: "linear-gradient(90deg, #F5D76E, #C9A227)",
                  color: "#0B2C5D",
                  border: "none",
                  padding: "0.5rem 1rem",
                  fontSize: "0.75rem",
                  marginLeft: "1rem",
                  display: "inline-block",
                }}
              >
                <span>⭐</span>
                <span>Premium</span>
              </div>
              
              <p
                style={{
                  fontSize: "1rem",
                  color: "#C8D3E0",
                  lineHeight: 1.6,
                  margin: "0 0 1.5rem 0",
                  fontFamily: "var(--font-body)",
                }}
              >
                {product.description}
              </p>
              
              {/* Premium Price Section */}
              <div
                style={{
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    fontSize: "1.25rem",
                    background: "linear-gradient(90deg, #F5D76E, #C9A227)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  ${product.price}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "#8FA0B5",
                    textDecoration: "line-through",
                    marginTop: "0.5rem",
                  }}
                >
                  Regular ${Math.round(product.price * 1.25)}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--support-green)",
                    fontWeight: 600,
                    marginTop: "0.5rem",
                    fontFamily: "var(--font-body)"
                  }}
                >
                  Save 20% with subscription
                </div>
              </div>
              
              {/* CTA */}
              <button
                className="premium-btn premium-pulse"
                style={{
                  width: "100%",
                  fontSize: "1rem",
                  padding: "1rem 2rem",
                }}
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Collection
              </button>
            </div>
          ))}
        </div>
        
        {/* Section CTA */}
        <div
          className="premium-fade-in-up"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 2rem 4rem",
          }}
        >
          <button
            className="premium-btn"
            style={{
              fontSize: "1.25rem",
              padding: "1.5rem 3rem",
            }}
          >
            View Full Collection
          </button>
        </div>
        
        {/* Premium Section CTA */}
        <div
          className="premium-fade-in-up"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 2rem 4rem",
          }}
        >
          <button
            className="premium-btn"
            style={{
              fontSize: "1.25rem",
              padding: "1.5rem 3rem",
            }}
          >
            View Full Collection
          </button>
        </div>
      </section>
      
      {/* Subscribe & Save Section */}
      <section
        className="fade-in-up"
        style={{
          textAlign: "center",
          animationDelay: "0.8s",
        }}
      >
        <div
          className="glass-card"
          style={{
            background: "rgba(248, 250, 252, 0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(201, 162, 39, 0.2)",
            padding: "2rem",
            borderRadius: "var(--radius-xl)",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                margin: "0 0 1.5rem 0",
                fontFamily: "var(--font-body)",
              }}
            >
              Ready to experience premium wellness?
            </p>
            <button className="premium-btn" style={{ fontSize: "1.125rem", padding: "1.25rem 3rem" }}>
              View All Products
            </button>
          </div>
      </section>

      {/* Subscribe & Save Section */}
      <section
        className="subscribe-section"
        style={{
          width: "100%",
          background: "var(--gradient-green)",
          color: "white",
          padding: "6rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subscribe Ribbon */}
        <div
          style={{
            position: "absolute",
            top: "2rem",
            right: "-2rem",
            background: "var(--accent-gold)",
            color: "var(--text-primary)",
            padding: "0.5rem 3rem",
            transform: "rotate(45deg)",
            fontSize: "0.875rem",
            fontWeight: 600,
            fontFamily: "var(--font-body)",
            boxShadow: "var(--shadow-gold)",
            zIndex: 3,
          }}
        >
          Subscribe & Save
        </div>
        
        <div
          className="fade-in-up"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
              fontWeight: 700,
              margin: 0,
              marginBottom: "1.5rem",
              fontFamily: "var(--font-heading)",
              color: "white",
            }}
          >
            Subscribe & Save 20%
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "700px",
              margin: "0 auto 1rem auto",
              fontFamily: "var(--font-body)",
            }}
          >
            Join our subscription program and enjoy premium savings, exclusive benefits, and never run out of your favorite wellness products.
          </p>
          
          {/* Savings Highlight */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              padding: "1rem 2rem",
              borderRadius: "12px",
              marginBottom: "2rem",
              display: "inline-block"
            }}
          >
            <p
              style={{
                fontSize: "1.125rem",
                color: "white",
                margin: 0,
                fontFamily: "var(--font-body)",
                fontWeight: 600
              }}
            >
              Subscribers save ₹1,200 per month vs one-time purchase.
            </p>
          </div>
          
          {/* Commitment Note */}
          <p
            style={{
              fontSize: "0.875rem",
              color: "rgba(255, 255, 255, 0.7)",
              margin: "0 0 2rem 0",
              fontFamily: "var(--font-body)",
              fontStyle: "italic"
            }}
          >
            Minimum commitment applies.
          </p>
          
          {/* Benefits */}
          <div
            className="glass-card"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  💰
                </div>
                <div
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Save 20%
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    opacity: 0.9,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Every order, every time
                </div>
              </div>
              
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  🚚
                </div>
                <div
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Free Shipping
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    opacity: 0.9,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  On all subscription orders
                </div>
              </div>
              
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  ⏰
                </div>
                <div
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    marginBottom: "0.5rem",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Flexible Timing
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    opacity: 0.9,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Pause or cancel anytime
                </div>
              </div>
            </div>
          </div>
          
          <button className="premium-btn">
            Start Saving Today
          </button>
        </div>
      </section>

      {/* Trust Section - Lab Tested. Transparent. */}
      <section
        className="trust-section"
        style={{
          padding: "8rem 2rem",
          width: "100%",
          background: "var(--neutral-silver)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Premium Background Elements */}
        <div
          className="float"
          style={{
            position: "absolute",
            top: "15%",
            left: "10%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(201, 162, 39, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          className="float"
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            width: "180px",
            height: "180px",
            background: "radial-gradient(circle, rgba(11, 44, 93, 0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
            animationDelay: "2s",
          }}
        />
        
        <div
          className="fade-in-up"
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Premium Section Header */}
          <div
            className="glass-card"
            style={{
              background: "rgba(248, 250, 252, 0.9)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(201, 162, 39, 0.2)",
              padding: "3rem",
              borderRadius: "var(--radius-xl)",
              maxWidth: "800px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                fontFamily: "var(--font-heading)",
                color: "var(--text-primary)",
                margin: "0 0 1.5rem 0",
              }}
            >
              Lab Tested. Transparent.
            </h2>
            <div
              style={{
                width: "80px",
                height: "3px",
                background: "var(--gradient-gold)",
                margin: "0 auto 2rem auto",
                borderRadius: "2px",
                boxShadow: "var(--shadow-gold)",
              }}
            />
            <p
              style={{
                fontSize: "1.25rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                margin: 0,
              }}
            >
              Every Chilltree product undergoes rigorous third-party lab testing to ensure purity, potency, and safety. We believe in complete transparency.
            </p>
          </div>

          {/* Premium Trust Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
              width: "100%",
              maxWidth: "1000px",
            }}
          >
            {/* Trust Card 1 */}
            <div
              className="glass-card fade-in-up"
              style={{
                padding: "2.5rem",
                animationDelay: "0.2s",
                background: "rgba(248, 250, 252, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(230, 230, 230, 0.5)",
                borderRadius: "var(--radius-xl)",
                transition: "all var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(201, 162, 39, 0.15), 0 8px 24px rgba(11, 44, 93, 0.1)";
                e.currentTarget.style.borderColor = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "rgba(230, 230, 230, 0.5)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--gradient-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  boxShadow: "var(--shadow-gold-glow)",
                  margin: "0 auto 2rem auto",
                  position: "relative",
                }}
              >
                <span style={{ position: "relative", zIndex: 2 }}>✓</span>
                {/* Icon Glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "inherit",
                    filter: "blur(8px)",
                    opacity: 0.6,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Third-Party Tested
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                  margin: "0 0 1rem 0",
                }}
              >
                Independent lab verification ensures every batch meets our premium standards
              </p>
              
              {/* Batch Info */}
              <div
                style={{
                  background: "rgba(201, 162, 39, 0.1)",
                  border: "1px solid rgba(201, 162, 39, 0.2)",
                  padding: "0.75rem",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-body)",
                  marginBottom: "1rem"
                }}
              >
                <div style={{ fontWeight: 600, marginBottom: "0.25rem" }}>Latest Batch:</div>
                <div>Batch #0423 • Tested: Oct 15, 2024</div>
              </div>
              
              {/* Lab Report Button */}
              <button
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  background: "linear-gradient(135deg, var(--accent-gold) 0%, var(--gold-light) 100%)",
                  color: "var(--primary-blue)",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  transition: "all var(--transition-smooth)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 12px rgba(201, 162, 39, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                View Lab Report (PDF)
              </button>
            </div>

            {/* Trust Card 2 */}
            <div
              className="glass-card fade-in-up"
              style={{
                padding: "2.5rem",
                animationDelay: "0.4s",
                background: "rgba(248, 250, 252, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(230, 230, 230, 0.5)",
                borderRadius: "var(--radius-xl)",
                transition: "all var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(201, 162, 39, 0.15), 0 8px 24px rgba(11, 44, 93, 0.1)";
                e.currentTarget.style.borderColor = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "rgba(230, 230, 230, 0.5)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--gradient-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  boxShadow: "var(--shadow-gold-glow)",
                  margin: "0 auto 2rem auto",
                  position: "relative",
                }}
              >
                <span style={{ position: "relative", zIndex: 2 }}>📋</span>
                {/* Icon Glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "inherit",
                    filter: "blur(8px)",
                    opacity: 0.6,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Full Reports
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Complete transparency with detailed lab reports available for every product
              </p>
            </div>

            {/* Trust Card 3 */}
            <div
              className="glass-card fade-in-up"
              style={{
                padding: "2.5rem",
                animationDelay: "0.6s",
                background: "rgba(248, 250, 252, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(230, 230, 230, 0.5)",
                borderRadius: "var(--radius-xl)",
                transition: "all var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(201, 162, 39, 0.15), 0 8px 24px rgba(11, 44, 93, 0.1)";
                e.currentTarget.style.borderColor = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "rgba(230, 230, 230, 0.5)";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--gradient-gold)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  color: "var(--text-primary)",
                  fontWeight: 700,
                  fontFamily: "var(--font-body)",
                  boxShadow: "var(--shadow-gold-glow)",
                  margin: "0 auto 2rem auto",
                  position: "relative",
                }}
              >
                <span style={{ position: "relative", zIndex: 2 }}>🔬</span>
                {/* Icon Glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    background: "inherit",
                    filter: "blur(8px)",
                    opacity: 0.6,
                  }}
                />
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-heading)",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Certified Labs
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Partnered with internationally accredited laboratories for testing excellence
              </p>
            </div>
          </div>

          {/* Premium CTA Section */}
          <div
            className="fade-in-up"
            style={{
              animationDelay: "0.8s",
            }}
          >
            <div
              className="glass-card"
              style={{
                background: "rgba(248, 250, 252, 0.9)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201, 162, 39, 0.2)",
                padding: "2.5rem",
                borderRadius: "var(--radius-xl)",
                maxWidth: "600px",
              }}
            >
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--text-secondary)",
                  margin: "0 0 2rem 0",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                }}
              >
                Review our comprehensive lab reports and see the quality difference for yourself
              </p>
              <button className="premium-btn" style={{ fontSize: "1.125rem", padding: "1.25rem 3rem" }}>
                View Lab Reports
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
