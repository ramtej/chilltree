import { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';

const OrbitCarousel = () => {
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-rotation
  useEffect(() => {
    if (!isPaused && !isDragging && !hoveredCard) {
      const animate = () => {
        setRotation(prev => prev + 0.2); // Slower speed
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging, hoveredCard]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX - rotation);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setRotation(e.clientX - dragStart);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX - rotation);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      setRotation(e.touches[0].clientX - dragStart);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Calculate card positions
  const radius = 280; // Increased from 220 for more space
  const cardCount = products.length;
  const angleStep = (2 * Math.PI) / products.length;

  return (
    <div 
      ref={containerRef}
      className="orbit-carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        height: '600px', // Increased height for larger orbit
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredCard(null);
      }}
    >
      {/* Center glow effect */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 1,
      }} />

      {/* Product cards */}
      {products.map((product, index) => {
        const angle = rotation * 0.01 + (index * angleStep);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius * 0.6; // Elliptical path
        const scale = 0.7 + (Math.cos(angle) + 1) * 0.15; // Scale based on position
        const opacity = 0.4 + (Math.cos(angle) + 1) * 0.3; // Opacity based on position
        const zIndex = Math.floor((Math.cos(angle) + 1) * 10);
        const isHovered = hoveredCard === product.id;

        return (
          <div
            key={product.id}
            className="orbit-card"
            style={{
              position: 'absolute',
              transform: `translate(${x}px, ${y}px) scale(${isHovered ? scale * 1.15 : scale})`,
              opacity: isHovered ? 1 : opacity,
              zIndex: isHovered ? 100 : zIndex,
              transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              width: isHovered ? '360px' : '280px', // Increased from 320px/240px
              height: isHovered ? '460px' : '340px', // Increased from 400px/300px
              borderRadius: '24px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: `
                0 20px 40px rgba(0, 0, 0, 0.15),
                0 0 0 1px rgba(255, 255, 255, 0.05),
                inset 0 0 0 1px rgba(255, 255, 255, 0.1)
              `,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!isDragging) {
                setHoveredCard(product.id);
                e.stopPropagation();
              }
            }}
            onMouseLeave={(e) => {
              if (!isDragging) {
                setHoveredCard(null);
                e.stopPropagation();
              }
            }}
            onClick={(e) => {
              if (!isDragging) {
                // Handle product click - navigate to product details
                window.location.href = `/products/${product.id}`;
              }
              e.stopPropagation();
            }}
          >
            {/* Product image container */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: isHovered ? '55%' : '65%',
              overflow: 'hidden',
              borderRadius: '24px 24px 0 0',
            }}>
              {/* Subtle glass reflection */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                borderRadius: '24px 24px 0 0',
                pointerEvents: 'none',
              }} />

              {/* Product image */}
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />

              {/* Center card glow - more subtle */}
              {zIndex >= 15 && !isHovered && (
                <div style={{
                  position: 'absolute',
                  inset: -1,
                  borderRadius: '25px',
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(0, 255, 255, 0.1))',
                  filter: 'blur(12px)',
                  zIndex: -1,
                }} />
              )}
            </div>

            {/* Product content area */}
            <div style={{
              flex: 1,
              padding: isHovered ? '1.5rem' : '1.2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%)',
            }}>
              {/* Product name */}
              <div>
                <h3 style={{
                  color: '#FFFFFF',
                  fontSize: isHovered ? '1.2rem' : '1rem',
                  fontWeight: 600,
                  margin: '0 0 0.5rem 0',
                  lineHeight: 1.2,
                  fontFamily: 'var(--font-body)',
                  letterSpacing: '-0.01em',
                }}>
                  {product.name}
                </h3>
                
                {/* Description on hover */}
                {isHovered && (
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.85rem',
                    margin: '0 0 1rem 0',
                    lineHeight: 1.4,
                    fontFamily: 'var(--font-body)',
                  }}>
                    {product.description}
                  </p>
                )}
              </div>

              {/* Price and action */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div>
                  <p style={{
                    color: '#FFD700',
                    fontSize: isHovered ? '1.4rem' : '1.2rem',
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1,
                    fontFamily: 'var(--font-display)',
                  }}>
                    ${product.price}
                  </p>
                  {!isHovered && (
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.75rem',
                      margin: '0.25rem 0 0 0',
                      fontFamily: 'var(--font-body)',
                    }}>
                      {product.category}
                    </p>
                  )}
                </div>
                
                {isHovered && (
                  <button
                    style={{
                      background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                      color: '#0A0A0F',
                      border: 'none',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.05em',
                      whiteSpace: 'nowrap',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/products/${product.id}`;
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 215, 0, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    View Details
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
      
      {/* Add keyframes for slide up animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitCarousel;
