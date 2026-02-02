import { useState } from "react";
import "./Checkout.css";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
  });

  const [purchaseType, setPurchaseType] = useState("one-time"); // "one-time" | "subscription"
  const [selectedPlanId, setSelectedPlanId] = useState("monthly");

  // Dummy order items
  const orderItems = [
    {
      id: 1,
      name: "Mit + Kava Shot",
      price: 12.0,
      quantity: 2,
      image: "/product-1.png",
    },
    {
      id: 2,
      name: "Chilltree Original",
      price: 3.99,
      quantity: 1,
      image: "/product-2.png",
    },
  ];

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const oneTimeTotal = subtotal + shipping;

  const subscriptionPlans = [
    {
      id: "monthly",
      label: "Monthly (1 Month)",
      price: 29.99,
      original: null,
      savingsLabel: null,
      highlight: false,
    },
    {
      id: "3-months",
      label: "3 Months (Most Popular)",
      price: 79.99,
      original: 89.97,
      savingsLabel: "Save 11%",
      highlight: true,
    },
    {
      id: "6-months",
      label: "6 Months",
      price: 143.99,
      original: 179.94,
      savingsLabel: "Save 20%",
      highlight: false,
    },
  ];

  const selectedPlan =
    subscriptionPlans.find((plan) => plan.id === selectedPlanId) ||
    subscriptionPlans[0];

  const displayTotal =
    purchaseType === "one-time"
      ? oneTimeTotal
      : oneTimeTotal + selectedPlan.price;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Placing order with:", formData);
    // Handle order placement logic here
  };

  return (
    <div className="checkout-page">
      <div className="checkout-inner">
        <h1 className="checkout-title">Checkout</h1>

        <div className="checkout-grid">
          <div className="checkout-left">
            <div className="checkout-card">
              <h2 className="checkout-card-title">Shipping Information</h2>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Name */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: "600",
                      color: "#475569",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    style={{
                      padding: "0.875rem 1.25rem",
                      fontSize: "1rem",
                      border: "2px solid rgba(10, 37, 64, 0.2)",
                      borderRadius: "10px",
                      outline: "none",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      backgroundColor: "#FFFFFF",
                      color: "#0a2540",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1e4a73";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(10, 37, 64, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(10, 37, 64, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Email */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: "600",
                      color: "#475569",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    style={{
                      padding: "0.875rem 1.25rem",
                      fontSize: "1rem",
                      border: "2px solid rgba(10, 37, 64, 0.2)",
                      borderRadius: "10px",
                      outline: "none",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      backgroundColor: "#FFFFFF",
                      color: "#0a2540",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1e4a73";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(10, 37, 64, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(10, 37, 64, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Phone */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: "600",
                      color: "#475569",
                    }}
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    required
                    style={{
                      padding: "0.875rem 1.25rem",
                      fontSize: "1rem",
                      border: "2px solid rgba(10, 37, 64, 0.2)",
                      borderRadius: "10px",
                      outline: "none",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      backgroundColor: "#FFFFFF",
                      color: "#0a2540",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1e4a73";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(10, 37, 64, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(10, 37, 64, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* Address */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <label
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: "600",
                      color: "#475569",
                    }}
                  >
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    required
                    style={{
                      padding: "0.875rem 1.25rem",
                      fontSize: "1rem",
                      border: "2px solid rgba(10, 37, 64, 0.2)",
                      borderRadius: "10px",
                      outline: "none",
                      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                      backgroundColor: "#FFFFFF",
                      color: "#0a2540",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#1e4a73";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(10, 37, 64, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(10, 37, 64, 0.2)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                {/* City and Zip */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <label
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: "600",
                        color: "#475569",
                      }}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      required
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontSize: "1rem",
                        border: "2px solid rgba(10, 37, 64, 0.2)",
                        borderRadius: "10px",
                        outline: "none",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        backgroundColor: "#FFFFFF",
                        color: "#0a2540",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1e4a73";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(10, 37, 64, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor =
                          "rgba(10, 37, 64, 0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <label
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: "600",
                        color: "#475569",
                      }}
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      placeholder="10001"
                      required
                      style={{
                        padding: "0.875rem 1.25rem",
                        fontSize: "1rem",
                        border: "2px solid rgba(10, 37, 64, 0.2)",
                        borderRadius: "10px",
                        outline: "none",
                        transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        backgroundColor: "#FFFFFF",
                        color: "#0a2540",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#1e4a73";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(10, 37, 64, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor =
                          "rgba(10, 37, 64, 0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Subscribe & Save and Order Summary side by side - Full Width */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", maxWidth: "1400px", margin: "0 auto" }}>
              {/* Subscribe & Save */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "3rem",
                  boxShadow:
                    "0 20px 60px rgba(10, 37, 64, 0.08), 0 4px 12px rgba(10, 37, 64, 0.05)",
                  border: "1px solid rgba(10, 37, 64, 0.08)",
                  minHeight: "600px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    marginBottom: "2.5rem",
                    fontSize: "2rem",
                    fontWeight: "900",
                    background:
                      "linear-gradient(135deg, #0a2540 0%, #1e4a73 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Subscribe & Save
                </h2>

                {/* Purchase Type Toggle */}
                <div
                  style={{
                    marginBottom: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#64748b",
                      letterSpacing: "0.01em",
                    }}
                  >
                    Choose how you want to purchase
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "0.5rem",
                      borderRadius: "16px",
                      background:
                        "linear-gradient(135deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.08))",
                      border: "1px solid rgba(148, 163, 184, 0.4)",
                      gap: "0.5rem",
                    }}
                  >
                    {[
                      {
                        id: "one-time",
                        label: "One-time purchase",
                        description: "Pay once, no subscription",
                      },
                      {
                        id: "subscription",
                        label: "Subscribe & Save",
                        description: "Best value with ongoing benefits",
                      },
                    ].map((option) => {
                      const isActive = purchaseType === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setPurchaseType(option.id)}
                          style={{
                            flex: 1,
                            padding: "1rem 2rem",
                            borderRadius: "12px",
                            border: "none",
                            cursor: "pointer",
                            background: isActive
                              ? "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)"
                              : "transparent",
                            color: isActive ? "#FFFFFF" : "#0f172a",
                            fontSize: "1rem",
                            fontWeight: isActive ? 700 : 600,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: isActive
                              ? "0 8px 32px rgba(15, 23, 42, 0.25)"
                              : "none",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              fontWeight: 600,
                              lineHeight: 1.3,
                              marginBottom: "0.25rem",
                            }}
                          >
                            {option.label}
                          </span>
                          <span
                            style={{
                              fontSize: "0.8rem",
                              opacity: 0.8,
                              lineHeight: 1.2,
                            }}
                          >
                            {option.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Subscription Plans */}
                {purchaseType === "subscription" && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1.5rem",
                      flex: 1,
                    }}
                  >
                    {subscriptionPlans.map((plan) => {
                      const isSelected = selectedPlan.id === plan.id;
                      return (
                        <button
                          key={plan.id}
                          type="button"
                          onClick={() => setSelectedPlanId(plan.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            padding: "1.5rem",
                            borderRadius: "16px",
                            border: isSelected
                              ? "2px solid #1e4a73"
                              : "1px solid rgba(148, 163, 184, 0.4)",
                            background: isSelected
                              ? "linear-gradient(135deg, rgba(30, 58, 138, 0.03), rgba(30, 58, 138, 0.01))"
                              : "transparent",
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: "relative",
                          }}
                        >
                          {plan.highlight && (
                            <div
                              style={{
                                position: "absolute",
                                top: "-10px",
                                right: "16px",
                                background:
                                  "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)",
                                color: "#FFFFFF",
                                padding: "0.5rem 1rem",
                                borderRadius: "20px",
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                letterSpacing: "0.02em",
                              }}
                            >
                              Most Popular
                            </div>
                          )}
                          <div
                            style={{
                              padding: "0.5rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.75rem",
                              flex: 1,
                            }}
                          >
                            <div
                              style={{
                                fontSize: "1.1rem",
                                fontWeight: 700,
                                color: "#0a2540",
                                lineHeight: 1.4,
                              }}
                            >
                              {plan.label}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "baseline",
                                gap: "0.75rem",
                                flexWrap: "wrap",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "1.75rem",
                                  fontWeight: 800,
                                  color: "#0a2540",
                                }}
                              >
                                ${plan.price.toFixed(2)}
                              </span>
                              {plan.original != null && (
                                <>
                                  <span
                                    style={{
                                      fontSize: "0.9rem",
                                      color: "#94a3b8",
                                      textDecoration: "line-through",
                                    }}
                                  >
                                    ${plan.original.toFixed(2)}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "0.8rem",
                                      color: "#1e4a73",
                                      fontWeight: 600,
                                    }}
                                  >
                                    {plan.savingsLabel}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              border: isSelected
                                ? "2px solid #1e4a73"
                                : "2px solid rgba(148, 163, 184, 0.4)",
                              background: isSelected
                                ? "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)"
                                : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            {isSelected && (
                              <div
                                style={{
                                  width: "10px",
                                  height: "10px",
                                  borderRadius: "50%",
                                  backgroundColor: "#FFFFFF",
                                }}
                              />
                            )}
                          </div>
                          <div
                            style={{
                              padding: "0.75rem 1.5rem",
                              borderRadius: "12px",
                              background: isSelected
                                ? "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)"
                                : "rgba(148, 163, 184, 0.08)",
                              color: isSelected ? "#FFFFFF" : "#0a2540",
                              fontSize: "0.9rem",
                              fontWeight: 600,
                            }}
                          >
                            {isSelected ? "Selected" : "Select"}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

              </div>

              {/* Order Summary */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "3rem",
                  boxShadow:
                    "0 20px 60px rgba(10, 37, 64, 0.08), 0 4px 12px rgba(10, 37, 64, 0.05)",
                  border: "1px solid rgba(10, 37, 64, 0.08)",
                  minHeight: "600px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    marginBottom: "2.5rem",
                    fontSize: "2rem",
                    fontWeight: "900",
                    background:
                      "linear-gradient(135deg, #0a2540 0%, #1e4a73 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Order Summary
                </h2>

                {/* Order Items */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    marginBottom: "2.5rem",
                    paddingBottom: "2.5rem",
                    borderBottom: "2px solid rgba(10, 37, 64, 0.08)",
                    flex: 1,
                  }}
                >
                  {orderItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        gap: "1.5rem",
                        alignItems: "center",
                      }}
                    >
                      {/* Product Image */}
                      <div
                        style={{
                          width: "100px",
                          height: "100px",
                          minWidth: "100px",
                          borderRadius: "12px",
                          backgroundColor: "#f8fafc",
                          overflow: "hidden",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#e5e7eb",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#9ca3af",
                              fontSize: "0.8rem",
                            }}
                          >
                            Image
                          </div>
                        )}
                      </div>

                      {/* Product Details */}
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.5rem",
                        }}
                      >
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "1.2rem",
                            fontWeight: "700",
                            color: "#0a2540",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {item.name}
                        </h3>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            color: "#64748b",
                            fontWeight: "500",
                          }}
                        >
                          Quantity: {item.quantity}
                        </div>
                      </div>

                      {/* Item Price */}
                      <div
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "800",
                          color: "#1e4a73",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#475569",
                      }}
                    >
                      Subtotal
                    </span>
                    <span
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        color: "#0a2540",
                      }}
                    >
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#475569",
                      }}
                    >
                      Shipping
                    </span>
                    <span
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        color: "#0a2540",
                      }}
                    >
                      ${shipping.toFixed(2)}
                    </span>
                  </div>

                  {purchaseType === "subscription" && (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "1.1rem",
                            fontWeight: "600",
                            color: "#475569",
                          }}
                        >
                          Subscribe & Save
                        </div>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            color: "#1e4a73",
                            marginTop: "0.25rem",
                            fontWeight: 600,
                          }}
                        >
                          {selectedPlan.label}
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "700",
                          color: "#0a2540",
                        }}
                      >
                        ${selectedPlan.price.toFixed(2)}
                      </span>
                    </div>
                  )}

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                      paddingTop: "1.5rem",
                      marginTop: "1.5rem",
                      borderTop: "2px solid rgba(10, 37, 64, 0.08)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "900",
                          color: "#0a2540",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        Total
                      </span>
                      <span
                        style={{
                          fontSize: "2rem",
                          fontWeight: "900",
                          background:
                            "linear-gradient(135deg, #0a2540 0%, #1e4a73 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        ${displayTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "2rem",
                    background:
                      "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)",
                    color: "#FFFFFF",
                    border: "none",
                    borderRadius: "16px",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow:
                      "0 12px 40px rgba(10, 37, 64, 0.25), 0 4px 20px rgba(10, 37, 64, 0.15)",
                    letterSpacing: "0.02em",
                    marginTop: "2rem",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #43a047 0%, #4caf50 100%)";
                    e.target.style.transform = "translateY(-4px) scale(1.02)";
                    e.target.style.boxShadow =
                      "0 20px 60px rgba(10, 37, 64, 0.35), 0 8px 30px rgba(10, 37, 64, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background =
                      "linear-gradient(135deg, #1e4a73 0%, #2d5a8a 100%)";
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow =
                      "0 12px 40px rgba(10, 37, 64, 0.25), 0 4px 20px rgba(10, 37, 64, 0.15)";
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div
            style={{
              position: "sticky",
              top: "8rem",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
}
