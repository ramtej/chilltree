import { useState } from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Chilltree products different from other energy drinks?",
      answer: "Chilltree products are crafted with naturally sourced ingredients, including adaptogens, nootropics, and botanical extracts. Unlike traditional energy drinks that rely on synthetic stimulants, our products deliver clean, sustained energy without the crash or jitters. Every batch is third-party lab tested for purity, potency, and safety, and we provide full transparency with lab reports available to all customers."
    },
    {
      question: "How quickly will I receive my order?",
      answer: "Standard shipping typically takes 3-5 business days within the continental United States. We also offer expedited shipping options at checkout for faster delivery. International shipping times vary by location. You'll receive a tracking number via email once your order ships, so you can monitor its progress."
    },
    {
      question: "Are Chilltree products safe to consume daily?",
      answer: "Yes, our products are formulated with natural ingredients and are designed for daily use. However, we recommend starting with one serving per day to assess your individual response. As with any supplement, consult with a healthcare professional if you have underlying health conditions, are pregnant or nursing, or are taking medications."
    },
    {
      question: "Do you offer refunds or returns?",
      answer: "We stand behind the quality of our products. If you're not completely satisfied with your purchase, you can return unopened items within 30 days of delivery for a full refund. For opened products, please contact our customer service team, and we'll work with you to find a solution. Shipping costs are non-refundable unless the return is due to our error."
    },
    {
      question: "Where can I view lab reports for your products?",
      answer: "All lab reports are available on our Lab Reports page. Each product listing includes links to its corresponding third-party test results, which verify purity, potency, and the absence of contaminants. We believe in complete transparency, so you can see exactly what's in every product before you purchase."
    },
    {
      question: "Can I modify or cancel my subscription?",
      answer: "Absolutely! You have full control over your subscription. You can skip a delivery, modify the frequency, change products, or cancel at any time through your account dashboard or by contacting customer service. There are no cancellation fees, and you can reactivate your subscription whenever you'd like."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq-hero">
        <div className="faq-hero-inner">
          <h1 className="faq-hero-title">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle">
            Find answers to common questions about our products, shipping, and more.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <div className={`faq-icon-wrap ${openIndex === index ? "open" : ""}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
              <div className={`faq-answer-wrap ${openIndex === index ? "open" : ""}`}>
                <div className="faq-answer-inner">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3 className="faq-cta-title">Still have questions?</h3>
          <p className="faq-cta-text">
            Can't find what you're looking for? Our customer service team is here to help.
          </p>
          <Link to="/contact" className="faq-cta-link">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
