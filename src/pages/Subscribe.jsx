import { useState } from "react";
import "./Subscribe.css";

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: "monthly",
      name: "Monthly",
      duration: "1 Month",
      price: 29.99,
      originalPrice: null,
      savings: null,
      popular: false,
      benefits: [
        "Free shipping on all orders",
        "Cancel anytime",
        "Access to exclusive products",
        "Priority customer support",
        "Monthly wellness tips & guides",
      ],
    },
    {
      id: "3months",
      name: "3 Months",
      duration: "3 Months",
      price: 79.99,
      originalPrice: 89.97,
      savings: "Save 11%",
      popular: true,
      benefits: [
        "Everything in Monthly",
        "Save 11% vs monthly",
        "Free shipping on all orders",
        "Cancel anytime",
        "Access to exclusive products",
        "Priority customer support",
        "Quarterly wellness assessment",
      ],
    },
    {
      id: "6months",
      name: "6 Months",
      duration: "6 Months",
      price: 143.99,
      originalPrice: 179.94,
      savings: "Save 20%",
      popular: false,
      benefits: [
        "Everything in 3 Months",
        "Save 20% vs monthly",
        "Free shipping on all orders",
        "Cancel anytime",
        "Access to exclusive products",
        "Priority customer support",
        "Bi-annual wellness assessment",
        "Exclusive subscriber-only events",
      ],
    },
  ];

  const handleChoosePlan = (planId) => {
    setSelectedPlan(planId);
    console.log("Selected plan:", planId);
  };

  return (
    <div className="subscribe-page">
      <section className="subscribe-hero">
        <h1 className="subscribe-title">Choose Your Plan</h1>
        <p className="subscribe-subtitle">
          Subscribe and save on premium energy products. Flexible plans designed
          to fit your wellness journey.
        </p>
      </section>

      <section className="subscribe-cards">
        <div className="subscribe-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`subscribe-card ${plan.popular ? "subscribe-card--popular" : ""}`}
            >
              {plan.popular && <span className="subscribe-badge">Most Popular</span>}
              <div className="subscribe-card-header">
                <h3 className="subscribe-card-name">{plan.name}</h3>
                <p className="subscribe-card-duration">{plan.duration}</p>
              </div>
              <div className="subscribe-card-price-wrap">
                <span className="subscribe-card-price">${plan.price}</span>
                {plan.originalPrice && (
                  <div className="subscribe-card-original">
                    <span className="subscribe-card-original-price">
                      ${plan.originalPrice}
                    </span>
                    <span className="subscribe-card-savings">{plan.savings}</span>
                  </div>
                )}
              </div>
              <div className="subscribe-card-benefits">
                <ul>
                  {plan.benefits.map((benefit, index) => (
                    <li key={index}>
                      <span>✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="subscribe-card-cta"
                onClick={() => handleChoosePlan(plan.id)}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="subscribe-trust">
        <div className="subscribe-trust-inner">
          <div className="subscribe-trust-item">
            <span>✓</span>
            Cancel anytime
          </div>
          <div className="subscribe-trust-item">
            <span>✓</span>
            Free shipping
          </div>
          <div className="subscribe-trust-item">
            <span>✓</span>
            No commitment
          </div>
        </div>
      </section>
    </div>
  );
}
