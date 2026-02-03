import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Products.css";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");

  const getProductCategory = (product) => {
    return product.category || "Energy Shots";
  };

  const categories = ["All", "Energy Shots", "Pills"];
  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name", label: "Name" }
  ];
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "under-5", label: "Under $5" },
    { value: "5-to-10", label: "$5 - $10" },
    { value: "over-10", label: "Over $10" }
  ];

  const getFilteredAndSortedProducts = () => {
    let filtered = selectedCategory === "All"
      ? products
      : products.filter((product) => getProductCategory(product) === selectedCategory);

    // Price range filter
    if (priceRange !== "all") {
      filtered = filtered.filter(product => {
        if (priceRange === "under-5") return product.price < 5;
        if (priceRange === "5-to-10") return product.price >= 5 && product.price <= 10;
        if (priceRange === "over-10") return product.price > 10;
        return true;
      });
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.id - b.id; // featured default
    });

    return sorted;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          card.style.animationDelay = `${index * 0.1}s`;
          card.classList.add('fade-in-up');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredProducts]);

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge fade-in-up">
            <span>✓</span>
            <span>Professional Wellness</span>
          </div>
          <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero-title-gold">Premium</span> Collection
          </h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.4s' }}>
            Discover lab-tested botanicals that deliver extraordinary results. 
            Professional wellness without compromise.
          </p>
          <div className="hero-stats fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="stat-item">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Premium Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25%</div>
              <div className="stat-label">Subscribe Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="products-filter-section">
        <div className="products-inner">
          <div className="filter-bar">
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <div className="filter-buttons">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`filter-btn ${
                      selectedCategory === category ? "filter-btn--active" : "filter-btn--default"
                    }`}
                    style={{ '--filter-index': index }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Sort By</label>
              <select 
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label className="filter-label">Price Range</label>
              <select 
                className="filter-select"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="results-count">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="products-inner">
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className="products-empty">
                <div className="empty-icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more results</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
