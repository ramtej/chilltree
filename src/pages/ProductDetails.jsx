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
          </div>
          <div className="product-details-info">
            <h1 className="product-details-title">{product.name}</h1>
            <div className="product-details-price-wrap">
              <span className="product-details-price">${displayPrice}</span>
              {purchaseType === "subscribe" && (
                <>
                  <span className="product-details-price-struck">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="product-details-save">Save 20%</span>
                </>
              )}
            </div>
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
