import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to cart:", product.id);
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Quick add:", product.id);
  };

  const formatReviews = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const calculateDiscount = () => {
    if (!product.originalPrice) return 0;
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return (
      <span className="stars">
        {Array(fullStars).fill('★').map((star, i) => (
          <span key={`full-${i}`} className="star full">{star}</span>
        ))}
        {hasHalfStar && <span className="star half">★</span>}
        {Array(emptyStars).fill('☆').map((star, i) => (
          <span key={`empty-${i}`} className="star empty">{star}</span>
        ))}
      </span>
    );
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--card-index': index
      }}
    >
      {/* Product Image Container */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="product-badge">
            {product.badge}
          </div>
        )}
        
        {/* Quick Actions Overlay */}
        <div className={`quick-actions ${isHovered ? 'visible' : ''}`}>
          <button 
            className="quick-add-btn"
            onClick={handleQuickAdd}
          >
            <span className="quick-add-icon">+</span>
            <span>Quick Add</span>
          </button>
        </div>
      </div>
      
      {/* Product Content - Amazon Style */}
      <div className="product-content">
        {/* 1. PRODUCT TITLE */}
        <h3 className="product-title">{product.name}</h3>
        
        {/* 2. RATING ROW */}
        {product.rating && product.reviews && (
          <div className="rating-row">
            {renderStars(product.rating)}
            <span className="rating-number">{product.rating}</span>
            <span className="reviews-count">({formatReviews(product.reviews)} reviews)</span>
          </div>
        )}
        
        {/* 3. SOCIAL PROOF */}
        {product.socialProof && (
          <div className="social-proof">
            {product.socialProof}
          </div>
        )}
        
        {/* 4. BADGE (already shown in image corner) */}
        
        {/* 5. PRICE BLOCK */}
        <div className="price-block">
          <div className="current-price">${product.price.toFixed(2)}</div>
          {product.originalPrice && (
            <div className="original-price-row">
              <span className="original-price">M.R.P: ${product.originalPrice.toFixed(2)}</span>
              <span className="discount">({calculateDiscount()}% off)</span>
            </div>
          )}
        </div>
        
        {/* 6. DELIVERY / BENEFIT TEXT */}
        {product.delivery && (
          <div className="delivery-text">
            {product.delivery}
          </div>
        )}
        
        {/* Add to Cart Button */}
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
