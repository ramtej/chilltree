import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Start image carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
    }, 1500);
    
    const card = document.getElementById(`product-card-${product.id}`);
    if (card) {
      card.imageInterval = interval;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
    // Clear image carousel interval
    const card = document.getElementById(`product-card-${product.id}`);
    if (card && card.imageInterval) {
      clearInterval(card.imageInterval);
    }
  };

  const productImages = [
    product.image,
    product.image.replace('.png', '-alt.png'),
    product.image.replace('.png', '-detail.png')
  ].filter((img, i, arr) => arr.indexOf(img) === i); // Remove duplicates

  const regularPrice = product.price;
  const subscribePrice = (product.price * 0.75).toFixed(2);
  const savings = ((1 - 0.75) * 100).toFixed(0);

  const getSubcategory = (product) => {
    return product.subcategory || "All";
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="product-card"
      id={`product-card-${product.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--card-index': index
      }}
    >
      {/* Product Image Container */}
      <div className="product-image-container">
        <div className="product-image-wrapper">
          <img
            src={productImages[currentImageIndex] || product.image}
            alt={product.name}
            className="product-image"
            loading="lazy"
          />
          
          {/* Image Carousel Indicators */}
          {productImages.length > 1 && (
            <div className="image-indicators">
              {productImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`indicator ${idx === currentImageIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Subscribe & Save Badge */}
        <div className="subscribe-badge">
          <span className="badge-text">Save {savings}%</span>
          <span className="badge-subtitle">Subscribe</span>
        </div>
        
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
      
      {/* Product Content */}
      <div className="product-content">
        <div className="product-header">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        
        {/* Subcategories */}
        <div className="product-subcategories">
          {getSubcategory(product) !== "All" && (
            <div className="subcategory-list">
              <span className="subcategory-label">Subcategories:</span>
              <div className="subcategory-items">
                <span className="subcategory-item">{getSubcategory(product)}</span>
              </div>
            </div>
          )}
        </div>

        {/* Product Pricing */}
        <div className="product-pricing">
          <div className="price-row">
            <span className="current-price">${regularPrice.toFixed(2)}</span>
            <span className="subscribe-price">${subscribePrice}</span>
            <span className="savings-badge">Save {savings}%</span>
          </div>
        </div>

        {/* Product Actions */}
        <div className="product-actions">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
