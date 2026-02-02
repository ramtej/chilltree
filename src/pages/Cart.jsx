import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Mit + Kava Shot", price: 12.0, image: "/product-1.png", quantity: 2 },
    { id: 2, name: "Chilltree Original", price: 3.99, image: "/product-2.png", quantity: 1 },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [showCoupons, setShowCoupons] = useState(false);

  const availableCoupons = [
    { code: "CHILL20", discount: 20, description: "20% off your order", minOrder: 50 },
    { code: "ENERGY15", discount: 15, description: "15% off energy products", minOrder: 30 },
    { code: "WELCOME10", discount: 10, description: "10% off first order", minOrder: 25 },
    { code: "SAVE25", discount: 25, description: "25% off orders over $100", minOrder: 100 },
  ];

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const applyCoupon = () => {
    const coupon = availableCoupons.find(
      (c) => c.code === couponCode.toUpperCase() && subtotal >= c.minOrder
    );
    
    if (coupon) {
      setAppliedCoupon(coupon);
      setCouponCode("");
    } else {
      alert("Invalid coupon code or minimum order not met");
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    return (subtotal * appliedCoupon.discount) / 100;
  };

  const total = subtotal - calculateDiscount();

  return (
    <div className="cart-page">
      <div className="cart-inner">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={item.id} className="cart-item" style={{'--item-index': index}}>
              <div className="cart-item-image-wrap">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                ) : (
                  <div className="cart-item-placeholder">Image</div>
                )}
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
                <div className="cart-item-qty-wrap">
                  <span className="cart-item-qty-label">Quantity:</span>
                  <div className="cart-item-qty-controls">
                    <button
                      type="button"
                      className="cart-item-qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span className="cart-item-qty-value">{item.quantity}</span>
                    <button
                      type="button"
                      className="cart-item-qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart-item-right">
                <span className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  type="button"
                  className="cart-item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-summary-row">
            <span className="cart-summary-label">Subtotal</span>
            <span className="cart-summary-value">${subtotal.toFixed(2)}</span>
          </div>
          
          {/* Coupon Section */}
          <div className="cart-coupon-section">
            <div className="cart-coupon-header">
              <h3 className="cart-coupon-title">Have a coupon?</h3>
              <button
                type="button"
                className="cart-view-coupons-btn"
                onClick={() => setShowCoupons(!showCoupons)}
              >
                {showCoupons ? "Hide" : "View"} Coupons
              </button>
            </div>
            
            {!appliedCoupon ? (
              <div className="cart-coupon-input-wrap">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="cart-coupon-input"
                />
                <button
                  type="button"
                  onClick={applyCoupon}
                  className="cart-coupon-apply-btn"
                >
                  Apply
                </button>
              </div>
            ) : (
              <div className="cart-applied-coupon">
                <div className="cart-applied-coupon-info">
                  <span className="cart-applied-coupon-code">{appliedCoupon.code}</span>
                  <span className="cart-applied-coupon-desc">{appliedCoupon.description}</span>
                </div>
                <button
                  type="button"
                  onClick={removeCoupon}
                  className="cart-coupon-remove-btn"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          {/* Available Coupons Modal/List */}
          {showCoupons && (
            <div className="cart-available-coupons">
              <h4 className="cart-available-coupons-title">Available Coupons</h4>
              <div className="cart-coupons-list">
                {availableCoupons.map((coupon, index) => (
                  <div key={index} className="cart-coupon-item" style={{'--coupon-index': index}}>
                    <div className="cart-coupon-item-info">
                      <div className="cart-coupon-item-code">{coupon.code}</div>
                      <div className="cart-coupon-item-desc">{coupon.description}</div>
                      <div className="cart-coupon-item-min">Min. order: ${coupon.minOrder}</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCouponCode(coupon.code);
                        setShowCoupons(false);
                      }}
                      className="cart-coupon-item-use-btn"
                      disabled={subtotal < coupon.minOrder}
                    >
                      {subtotal < coupon.minOrder ? "Unavailable" : "Use Coupon"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {appliedCoupon && (
            <div className="cart-summary-row cart-discount-row">
              <span className="cart-summary-label">Discount ({appliedCoupon.discount}%)</span>
              <span className="cart-summary-value cart-discount-value">-${calculateDiscount().toFixed(2)}</span>
            </div>
          )}
          
          <div className="cart-summary-row cart-total-row">
            <span className="cart-summary-label">Total</span>
            <span className="cart-summary-value">${total.toFixed(2)}</span>
          </div>
          
          <Link to="/checkout" className="cart-checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
