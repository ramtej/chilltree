import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));
  const [purchaseType, setPurchaseType] = useState("one-time");

  if (!product) {
    return (
      <div className="product-details-not-found">
        <h2>Product not found</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log("Add to cart:", product.id, purchaseType);
  };

  const formatReviews = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
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

  const calculateDiscount = () => {
    if (!product.originalPrice) return 0;
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  };

  const subscribePrice = (product.price * 0.8).toFixed(2);
  const displayPrice = purchaseType === "subscribe" ? subscribePrice : product.price.toFixed(2);

  return (
    <div className="product-details-page">
      <div className="product-details-inner">
        <div className="product-details-grid">
          <div className="product-details-image-wrap">
            <img
              src={product.image}
              alt={product.name}
              className="product-details-image"
            />
            {product.badge && (
              <div className="product-details-badge">
                {product.badge}
              </div>
            )}
          </div>
          <div className="product-details-info">
            {/* 1. PRODUCT TITLE */}
            <h1 className="product-details-title">{product.name}</h1>
            
            {/* 2. RATING ROW */}
            {product.rating && product.reviews && (
              <div className="product-details-rating-row">
                {renderStars(product.rating)}
                <span className="rating-number">{product.rating}</span>
                <span className="reviews-count">({formatReviews(product.reviews)} reviews)</span>
              </div>
            )}
            
            {/* 3. SOCIAL PROOF */}
            {product.socialProof && (
              <div className="product-details-social-proof">
                {product.socialProof}
              </div>
            )}
            
            {/* 5. PRICE BLOCK */}
            <div className="product-details-price-block">
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
              <div className="product-details-delivery-text">
                {product.delivery}
              </div>
            )}
            
            <p className="product-details-desc">
              Premium naturally sourced energy to elevate focus, recovery, and calm.
              Small-batch crafted, lab tested, and designed for modern wellness rituals.
              Experience the perfect balance of energy and tranquility.
            </p>
            
            <div className="product-details-toggle-wrap">
              <button
                type="button"
                onClick={() => setPurchaseType("one-time")}
                className={`product-details-toggle-btn ${purchaseType === "one-time" ? "product-details-toggle-btn--active-one" : "product-details-toggle-btn--inactive"}`}
              >
                One-time purchase
              </button>
              <button
                type="button"
                onClick={() => setPurchaseType("subscribe")}
                className={`product-details-toggle-btn ${purchaseType === "subscribe" ? "product-details-toggle-btn--active-sub" : "product-details-toggle-btn--inactive"}`}
              >
                Subscribe & Save
              </button>
            </div>
            
            <button
              type="button"
              onClick={handleAddToCart}
              className={`product-details-add-btn ${purchaseType === "one-time" ? "product-details-add-btn--one-time" : "product-details-add-btn--subscribe"}`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
