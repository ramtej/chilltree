import { Link } from "react-router-dom";
import { products } from "../data/products";
import Marquee from "../components/Marquee";

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
      {/* Hero Section - Luxury Minimal Experience */}
      <section className="image-section" style={{ minHeight: '100vh', position: 'relative' }}>
        {/* Hero Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
          poster="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1920&h=1080&fit=crop&auto=format"
        >
          <source src="/kling_20260203_Image_to_Video___PREMIUM_3940_0 (1).mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Blue Overlay - Corrected */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(36,41,101,0.55), rgba(36,41,101,0.35), rgba(36,41,101,0.75))',
          zIndex: 1,
        }} />
        
        {/* Light Silver Mist - Luxury Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at top, rgba(232,236,243,0.18), transparent 70%)',
          zIndex: 2,
        }} />
        
        {/* Premium Grain Overlay */}
        <div className="grain-overlay" style={{ zIndex: 3 }} />
        
        <div className="image-section-content" style={{ zIndex: 4 }}>
          <div className="premium-container">
            {/* Professional Trust Badges */}
            <div className="fade-in-up" style={{ 
              display: 'flex', 
              gap: '2rem', 
              justifyContent: 'center',
              marginBottom: '4rem',
              flexWrap: 'wrap'
            }}>
              <div className="premium-badge">
                <span>✓</span>
                <span>Lab Verified</span>
              </div>
              <div className="premium-badge">
                <span>⭐</span>
                <span>Premium Quality</span>
              </div>
            </div>
            
            {/* Professional Headline */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 style={{
                fontSize: 'clamp(4rem, 8vw, 8rem)',
                fontWeight: 900,
                margin: '0 0 2.5rem 0',
                lineHeight: 1.1,
                letterSpacing: '-0.05em',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232,236,243,0.2)',
              }}>
                <span style={{
                  color: 'var(--gold-primary)',
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.4)',
                }}>Powerful</span> Energy
                <br />
                <span style={{
                  fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                  display: 'block',
                  marginTop: '1rem',
                  color: '#FFFFFF',
                  textShadow: '0 3px 6px rgba(0, 0, 0, 0.3), 0 0 15px rgba(232,236,243,0.15)',
                }}>
                  Absolute Focus.
                </span>
              </h1>
              
              {/* Professional Divider */}
              <div className="premium-divider" style={{
                width: '200px',
                height: '3px',
                margin: '3rem auto',
                background: 'var(--silver-primary)',
              }} />
            </div>
            
            {/* Professional Description */}
            <div className="fade-in-up" style={{ 
              animationDelay: '0.4s',
              maxWidth: '800px',
              margin: '0 auto 4rem auto',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '3rem',
              borderRadius: 'var(--radius-3xl)',
            }}>
              <p style={{
                fontSize: 'var(--scale-2xl)',
                color: '#FFFFFF',
                lineHeight: 1.8,
                margin: 0,
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
              }}>
                Lab-tested botanicals that deliver calm, focus, and clarity in minutes. Experience the future of professional wellness without synthetic stimulants.
              </p>
            </div>
            
            {/* Professional Dual CTA */}
            <div className="fade-in-up" style={{ 
              animationDelay: '0.6s',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
            }}>
              <button className="premium-btn" style={{
                fontSize: 'var(--scale-xl)',
                padding: '1.75rem 5rem',
                minWidth: '350px',
                background: 'var(--gradient-gold)',
                color: 'var(--blue-deep)',
              }}>
                Start My Subscription
              </button>
              <button className="premium-btn premium-btn-secondary" style={{
                fontSize: 'var(--scale-lg)',
                padding: '1.5rem 4rem',
                minWidth: '300px',
                color: '#FFFFFF',
                borderColor: 'var(--silver-primary)',
              }}>
                One-time Purchase
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Marquee */}
      <Marquee />

      {/* Premium Collection - Hero Section Format */}
      <section className="premium-section" style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
      }}>
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format" 
          alt="Professional collection background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.3,
          }}
        />
        
        {/* Cinematic Blue Overlay - Same as Hero */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(36,41,101,0.55), rgba(36,41,101,0.35), rgba(36,41,101,0.75))',
          zIndex: 1,
        }} />
        
        {/* Light Silver Mist - Luxury Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at top, rgba(232,236,243,0.18), transparent 70%)',
          zIndex: 2,
        }} />
        <div className="premium-container" style={{ position: 'relative', zIndex: 4 }}>
          {/* Section Header */}
          <div className="fade-in-up" style={{ 
            textAlign: 'center',
            marginBottom: '6rem',
            animationDelay: '0.2s',
          }}>
            <h2 style={{
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
              fontWeight: 800,
              margin: '0 0 2.5rem 0',
              fontFamily: 'var(--font-display)',
              textTransform: 'uppercase',
              letterSpacing: '-0.04em',
              color: '#F8FAFC',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232,236,243,0.2)',
            }}>
              <span style={{
                  color: 'var(--gold-primary)',
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.4)',
                }}>Professional</span> Collection
            </h2>
            
            <div className="premium-divider" style={{
              width: '150px',
              height: '3px',
              margin: '2.5rem auto',
              background: 'var(--gold-primary)',
            }} />
            
            <div className="fade-in-up glass-panel" style={{ 
              animationDelay: '0.4s',
              maxWidth: '800px',
              margin: '0 auto 4rem auto',
            }}>
              <p style={{
                fontSize: 'var(--scale-2xl)',
                color: '#FFFFFF',
                lineHeight: 1.8,
                margin: 0,
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}>
                Discover our carefully curated selection of professional wellness products crafted for extraordinary results
              </p>
            </div>
          </div>

          {/* Professional Product Grid */}
          <div className="premium-grid" style={{ marginBottom: '5rem' }}>
            {/* Product 1 - Extra Strength */}
            <div
              className="premium-card fade-in-up"
              style={{
                animationDelay: '0.6s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Product Image Container */}
              <div style={{
                position: 'relative',
                height: '320px',
                overflow: 'hidden',
                borderRadius: 'var(--radius-3xl) var(--radius-3xl) 0 0',
                background: 'url(/chill-tree-green.png) center/contain no-repeat',
                backgroundColor: '#0a192f',
                backgroundSize: '80%',
                backgroundPosition: 'center',
              }}>
                {/* Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(10, 25, 47, 0.8) 100%)',
                  zIndex: 1,
                }} />
                
                {/* Professional Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--gradient-green)',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--scale-sm)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  zIndex: 2,
                }}>
                  Save 25%
                </div>
              </div>
              
              {/* Product Content */}
              <div style={{ padding: '2.5rem' }}>
                {/* Product Name */}
                <h3 style={{
                  fontSize: 'var(--scale-3xl)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: '0 0 1.5rem 0',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.03em',
                }}>
                  Extra Strength • 2 OZ | 59 ML
                </h3>
                
                {/* Price */}
                <div style={{
                  marginBottom: '2.5rem',
                  padding: '1.5rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: 'var(--radius-xl)',
                }}>
                  <div style={{
                    fontSize: 'var(--scale-2xl)',
                    color: 'var(--gold-primary)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}>
                    $3.99
                  </div>
                  <div style={{
                    fontSize: 'var(--scale-base)',
                    color: 'var(--text-muted)',
                    textDecoration: 'line-through',
                    marginTop: '0.75rem',
                  }}>
                    Regular $5
                  </div>
                </div>
                
                {/* Professional CTA */}
                <button 
                  className="premium-btn"
                  style={{
                    width: '100%',
                    fontSize: 'var(--scale-lg)',
                    padding: '1.25rem 2.5rem',
                  }}
                  onClick={() => handleAddToCart(1)}
                >
                  Add to Collection
                </button>
              </div>
            </div>

            {/* Product 2 - Kanna & Kava */}
            <div
              className="premium-card fade-in-up"
              style={{
                animationDelay: '0.8s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Product Image Container */}
              <div style={{
                position: 'relative',
                height: '320px',
                overflow: 'hidden',
                borderRadius: 'var(--radius-3xl) var(--radius-3xl) 0 0',
                background: 'url(/chill-tree-red.png) center/contain no-repeat',
                backgroundColor: '#0a192f',
                backgroundSize: '80%',
                backgroundPosition: 'center',
              }}>
                {/* Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(10, 25, 47, 0.8) 100%)',
                  zIndex: 1,
                }} />
                
                {/* Professional Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--gradient-green)',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--scale-sm)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  zIndex: 2,
                }}>
                  Save 25%
                </div>
              </div>
              
              {/* Product Content */}
              <div style={{ padding: '2.5rem' }}>
                {/* Product Name */}
                <h3 style={{
                  fontSize: 'var(--scale-3xl)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: '0 0 1.5rem 0',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.03em',
                }}>
                  Kanna & Kava • 2 OZ | 59 ML
                </h3>
                
                <p style={{
                  fontSize: 'var(--scale-lg)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.7,
                  margin: '0 0 2rem 0',
                  fontFamily: 'var(--font-body)',
                }}>
                  Kanna & Kava • 2 OZ | 59 ML
                </p>
                
                {/* Professional Price Section */}
                <div style={{
                  marginBottom: '2.5rem',
                  padding: '1.5rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: 'var(--radius-xl)',
                }}>
                  <div style={{
                    fontSize: 'var(--scale-2xl)',
                    color: 'var(--gold-primary)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}>
                    $4.49
                  </div>
                  <div style={{
                    fontSize: 'var(--scale-base)',
                    color: 'var(--text-muted)',
                    textDecoration: 'line-through',
                    marginTop: '0.75rem',
                  }}>
                    Regular $6
                  </div>
                </div>
                
                {/* Professional CTA */}
                <button 
                  className="premium-btn"
                  style={{
                    width: '100%',
                    fontSize: 'var(--scale-lg)',
                    padding: '1.25rem 2.5rem',
                  }}
                  onClick={() => handleAddToCart(2)}
                >
                  Add to Collection
                </button>
              </div>
            </div>

            {/* Product 3 - Focus */}
            <div
              className="premium-card fade-in-up"
              style={{
                animationDelay: '1.0s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Product Image Container */}
              <div style={{
                position: 'relative',
                height: '320px',
                overflow: 'hidden',
                borderRadius: 'var(--radius-3xl) var(--radius-3xl) 0 0',
                background: 'url(/chill-tree-gold.png) center/contain no-repeat',
                backgroundColor: '#0a192f',
                backgroundSize: '80%',
                backgroundPosition: 'center',
              }}>
                {/* Overlay Gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(10, 25, 47, 0.8) 100%)',
                  zIndex: 1,
                }} />
                
                {/* Professional Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'var(--gradient-green)',
                  color: '#FFFFFF',
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--scale-sm)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  zIndex: 2,
                }}>
                  Save 25%
                </div>
              </div>
              
              {/* Product Content */}
              <div style={{ padding: '2.5rem' }}>
                {/* Product Name */}
                <h3 style={{
                  fontSize: 'var(--scale-3xl)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: '0 0 1.5rem 0',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.03em',
                }}>
                  Focus 1.76 OZ | 50 ML
                </h3>
                
                <p style={{
                  fontSize: 'var(--scale-lg)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: 1.7,
                  margin: '0 0 2rem 0',
                  fontFamily: 'var(--font-body)',
                }}>
                  1.76 OZ | 50 ML
                </p>
                
                {/* Professional Price Section */}
                <div style={{
                  marginBottom: '2.5rem',
                  padding: '1.5rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  borderRadius: 'var(--radius-xl)',
                }}>
                  <div style={{
                    fontSize: 'var(--scale-2xl)',
                    color: 'var(--gold-primary)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}>
                    $12
                  </div>
                  <div style={{
                    fontSize: 'var(--scale-base)',
                    color: 'var(--text-muted)',
                    textDecoration: 'line-through',
                    marginTop: '0.75rem',
                  }}>
                    Regular $16
                  </div>
                </div>
                
                {/* Professional CTA */}
                <button 
                  className="premium-btn"
                  style={{
                    width: '100%',
                    fontSize: 'var(--scale-lg)',
                    padding: '1.25rem 2.5rem',
                  }}
                  onClick={() => handleAddToCart(3)}
                >
                  Add to Collection
                </button>
              </div>
            </div>
          </div>
          
          {/* View Full Collection Button */}
          <div className="fade-in-up" style={{ 
            textAlign: 'center',
            animationDelay: '1.2s',
          }}>
            <button className="premium-btn premium-btn-secondary" style={{
              fontSize: 'var(--scale-xl)',
              padding: '1.75rem 5rem',
              minWidth: '350px',
              color: '#FFFFFF',
            }}>
              View Full Collection
            </button>
          </div>
        </div>
      </section>
      
      {/* Subscribe & Save - Hero Section Format */}
      <section className="image-section premium-section" style={{ minHeight: '80vh' }}>
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
          onError={(e) => {
            // Fallback to image if video fails
            const img = document.createElement('img');
            img.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&auto=format";
            img.alt = "Blue subscription experience";
            img.className = "image-section-bg";
            img.style.opacity = "0.3";
            img.style.position = "absolute";
            img.style.top = "0";
            img.style.left = "0";
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            img.style.zIndex = "0";
            e.target.parentNode.replaceChild(img, e.target);
          }}
        >
          <source src="/kling_20260203_Image_to_Video___PREMIUM_4871_0.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Blue Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(36,41,101,0.6), rgba(36,41,101,0.8))',
          zIndex: 1,
        }} />
        
        {/* Subtle Silver Light from Top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at top, rgba(232,236,243,0.12), transparent 70%)',
          zIndex: 2,
        }} />
        
        {/* Premium Grain Overlay */}
        <div className="grain-overlay" style={{ zIndex: 3 }} />
        
        <div className="image-section-content" style={{ zIndex: 4 }}>
          <div className="premium-container">
            {/* Section Header */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 800,
                margin: '0 0 2.5rem 0',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                color: '#FFFFFF',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232,236,243,0.2)',
              }}>
                <span style={{
                  color: 'var(--green-primary)',
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.4)',
                }}>Subscribe</span> & Save 25%
              </h2>
              
              <div className="premium-divider" style={{
                width: '120px',
                height: '3px',
                margin: '2.5rem auto',
                background: 'var(--green-primary)',
              }} />
              
              <p style={{
                fontSize: 'var(--scale-2xl)',
                color: '#FFFFFF',
                maxWidth: '800px',
                margin: '0 auto 2.5rem auto',
                fontFamily: 'var(--font-body)',
                lineHeight: 1.8,
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.3)',
              }}>
                Join our professional subscription program and enjoy premium savings, exclusive benefits, and never run out of your favorite wellness products.
              </p>
            </div>
            
            {/* Benefits Grid - Transparent Cards */}
            <div className="fade-in-up" style={{ 
              animationDelay: '1s',
              marginBottom: '4rem',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              maxWidth: '1400px',
              margin: '0 auto 4rem auto',
            }}>
              <div className="premium-card" style={{
                textAlign: 'center',
                flex: '1',
                maxWidth: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}>
                <div style={{
                  fontSize: 'var(--scale-4xl)',
                  marginBottom: '1.5rem',
                }}>
                  💰
                </div>
                <div style={{
                  fontSize: 'var(--scale-xl)',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                }}>
                  Save 25%
                </div>
                <div style={{
                  fontSize: 'var(--scale-base)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'var(--font-body)',
                }}>
                  Every order, every time
                </div>
              </div>
              
              <div className="premium-card" style={{
                textAlign: 'center',
                flex: '1',
                maxWidth: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}>
                <div style={{
                  fontSize: 'var(--scale-4xl)',
                  marginBottom: '1.5rem',
                }}>
                  🚚
                </div>
                <div style={{
                  fontSize: 'var(--scale-xl)',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                }}>
                  Free Shipping
                </div>
                <div style={{
                  fontSize: 'var(--scale-base)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'var(--font-body)',
                }}>
                  On all subscription orders
                </div>
              </div>
              
              <div className="premium-card" style={{
                textAlign: 'center',
                flex: '1',
                maxWidth: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}>
                <div style={{
                  fontSize: 'var(--scale-4xl)',
                  marginBottom: '1.5rem',
                }}>
                  ⏰
                </div>
                <div style={{
                  fontSize: 'var(--scale-xl)',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                }}>
                  Flexible Timing
                </div>
                <div style={{
                  fontSize: 'var(--scale-base)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'var(--font-body)',
                }}>
                  Skip or cancel anytime
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="fade-in-up" style={{ 
              animationDelay: '1.2s',
            }}>
              <button className="premium-btn" style={{
                fontSize: 'var(--scale-xl)',
                padding: '1.75rem 5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontWeight: 700,
                minWidth: '350px',
              }}>
                Start Professional Savings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Hero Section Format */}
      <section className="image-section premium-section" style={{ minHeight: '80vh' }}>
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&auto=format" 
          alt="Blue lab testing experience"
          className="image-section-bg"
          style={{ opacity: 0.25 }}
        />
        
        {/* Cinematic Blue Overlay - Same as Hero */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(36,41,101,0.55), rgba(36,41,101,0.35), rgba(36,41,101,0.75))',
          zIndex: 1,
        }} />
        
        {/* Light Silver Mist - Luxury Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at top, rgba(232,236,243,0.18), transparent 70%)',
          zIndex: 2,
        }} />
        
        {/* Premium Grain Overlay */}
        <div className="grain-overlay" style={{ zIndex: 3 }} />
        
        <div className="image-section-content" style={{ zIndex: 4 }}>
          <div className="premium-container">
            {/* Section Header */}
            <div className="fade-in-up glass-panel" style={{ 
              animationDelay: '0.2s',
              maxWidth: '900px',
              margin: '0 auto 5rem auto',
            }}>
              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.2,
                fontFamily: 'var(--font-display)',
                color: '#FFFFFF',
                margin: '0 0 2.5rem 0',
                textTransform: 'uppercase',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232,236,243,0.2)',
              }}>
                <span style={{
                  color: 'var(--gold-primary)',
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.4)',
                }}>Lab Tested.</span> Professional.
              </h2>
              
              <div className="premium-divider" style={{
                width: '100px',
                height: '3px',
                margin: '2.5rem auto',
                background: 'var(--gold-primary)',
              }} />
              
              <p style={{
                fontSize: 'var(--scale-2xl)',
                color: '#FFFFFF',
                lineHeight: 1.8,
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                margin: 0,
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              }}>
                Every Chilltree product undergoes rigorous third-party lab testing to ensure purity, potency, and safety. We believe in complete professional transparency.
              </p>
            </div>

            {/* Professional Trust Cards - Side by Side */}
            <div className="fade-in-up" style={{ 
              animationDelay: '0.4s',
              marginBottom: '5rem',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              maxWidth: '1400px',
              margin: '0 auto 5rem auto',
            }}>
              {/* Trust Card 1 */}
              <div className="premium-card" style={{
                padding: '3rem',
                textAlign: 'center',
                flex: '1',
                maxWidth: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--gradient-green)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--scale-3xl)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontFamily: 'var(--font-body)',
                  margin: '0 auto 2.5rem auto',
                }}>
                  ✓
                </div>
                <div style={{
                  fontSize: 'var(--scale-xl)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.03em',
                }}>
                  Third-Party Tested
                </div>
                <p style={{
                  fontSize: 'var(--scale-lg)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.7,
                  margin: '0 0 2rem 0',
                }}>
                  Independent lab verification ensures every batch meets our professional standards
                </p>
                
                {/* Lab Report Button */}
                <button className="premium-btn" style={{
                  width: '100%',
                  fontSize: 'var(--scale-base)',
                  padding: '1rem 2rem',
                  background: 'var(--gradient-green)',
                  color: '#FFFFFF',
                  fontWeight: 600,
                }}>
                  View Lab Report (PDF)
                </button>
              </div>

              {/* Trust Card 2 */}
              <div className="premium-card" style={{
                padding: '3rem',
                textAlign: 'center',
                flex: '1',
                maxWidth: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--gradient-silver)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--scale-3xl)',
                  color: 'var(--blue-deep)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-body)',
                  margin: '0 auto 2.5rem auto',
                }}>
                  📋
                </div>
                <div style={{
                  fontSize: 'var(--scale-xl)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.03em',
                }}>
                  Full Transparency
                </div>
                <p style={{
                  fontSize: 'var(--scale-lg)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  Complete professional transparency with detailed lab reports available for every product
                </p>
              </div>

              {/* Trust Card 3 */}
              <div className="premium-card" style={{
                padding: '3rem',
                textAlign: 'center',
                flex: '1',
                maxWidth: '400px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'var(--gradient-blue)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--scale-3xl)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontFamily: 'var(--font-body)',
                  margin: '0 auto 2.5rem auto',
                }}>
                  🔬
                </div>
                <div style={{
                  fontSize: 'var(--scale-xl)',
                  fontWeight: 600,
                  fontFamily: 'var(--font-display)',
                  color: '#FFFFFF',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.03em',
                }}>
                  Certified Labs
                </div>
                <p style={{
                  fontSize: 'var(--scale-lg)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.7,
                  margin: 0,
                }}>
                  Partnered with internationally accredited professional laboratories for testing excellence
                </p>
              </div>
            </div>

            {/* Professional CTA Section */}
            <div className="fade-in-up" style={{ 
              animationDelay: '0.8s',
            }}>
              <div className="glass-panel" style={{
                background: 'var(--glass-dark)',
                backdropFilter: 'var(--glass-blur)',
                border: '1px solid var(--glass-border)',
                padding: '4rem',
                borderRadius: 'var(--radius-3xl)',
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: 'var(--scale-2xl)',
                  color: '#FFFFFF',
                  margin: '0 0 2.5rem 0',
                  fontFamily: 'var(--font-body)',
                  lineHeight: 1.8,
                  fontWeight: 500,
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}>
                  Review our comprehensive professional lab reports and see the quality difference for yourself
                </p>
                <button className="premium-btn" style={{ 
                  fontSize: 'var(--scale-xl)',
                  padding: '1.75rem 5rem',
                  background: 'var(--gradient-green)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  minWidth: '350px',
                }}>
                  View Professional Lab Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
