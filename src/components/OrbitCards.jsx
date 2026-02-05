import { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import './OrbitCards.css';

export default function OrbitCards() {
  const [isPaused, setIsPaused] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!isPaused && !isDragging) {
      const animate = () => {
        setRotation(prev => prev + 0.2);
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, rotation });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      setRotation(dragStart.rotation + deltaX * 0.5);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.touches[0].clientX, rotation });
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const deltaX = e.touches[0].clientX - dragStart.x;
      setRotation(dragStart.rotation + deltaX * 0.5);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Get first 12 products for the orbit
  const orbitProducts = products.slice(0, 12);

  return (
    <div className="orbit-cards-container">
      <div 
        ref={containerRef}
        className="orbit-system"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ '--rotation': `${rotation}deg` }}
      >
        <div className="orbit-ring">
          {orbitProducts.map((product, index) => {
            const angle = (index * 360) / orbitProducts.length;
            return (
              <div
                key={product.id}
                className="orbit-card-wrapper"
                style={{ '--angle': `${angle}deg` }}
              >
                <div className="orbit-card">
                  {/* Front Face */}
                  <div className="card-face card-front">
                    <div className="card-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{product.name}</h3>
                      <div className="card-price">${product.price}</div>
                    </div>
                  </div>
                  
                  {/* Back Face - Mirrored */}
                  <div className="card-face card-back">
                    <div className="card-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="card-content">
                      <h3 className="card-title">{product.name}</h3>
                      <div className="card-price">${product.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
