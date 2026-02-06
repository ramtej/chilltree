import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Products.css";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [priceRange, setPriceRange] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [style, setStyle] = useState([]);

  const getProductCategory = (product) => {
    return product.category || "Energy Shots";
  };

  const getSubcategory = (product) => {
    return product.subcategory || "All";
  };

  const categories = [
    { 
      name: "Energy Shots", 
      subcategories: ["Mit + Kava", "Kava + Kana"]
    },
    { 
      name: "Pills", 
      subcategories: ["Mit + Kava", "Kava + Kana"]
    }
  ];

  const sortOptions = [
    { value: "name-asc", label: "Name: A to Z" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
  ];
  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "under-5", label: "Under $5" },
    { value: "5-to-10", label: "$5 - $10" },
    { value: "over-10", label: "Over $10" }
  ];

  const getFilteredAndSortedProducts = () => {
    let filtered = products;

    // Availability filter
    if (availability !== "all") {
      filtered = filtered.filter(product => {
        if (availability === "in-stock") return product.inStock !== false;
        if (availability === "out-of-stock") return product.inStock === false;
        return true;
      });
    }

    // Style filter
    if (style.length > 0) {
      filtered = filtered.filter(product => {
        return style.some(s => {
          if (s === "traditional") return product.name.toLowerCase().includes("traditional");
          if (s === "modern") return product.name.toLowerCase().includes("modern");
          if (s === "organic") return product.name.toLowerCase().includes("organic");
          return false;
        });
      });
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => getProductCategory(product) === selectedCategory);
    }

    // Subcategory filter
    if (selectedSubcategory !== "All") {
      filtered = filtered.filter((product) => getSubcategory(product) === selectedSubcategory);
    }

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
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.id - b.id;
    });

    return sorted;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  const calculateActiveFiltersCount = () => {
    let count = 0;
    if (availability !== "all") count++;
    if (selectedCategory !== "All") count++;
    if (selectedSubcategory !== "All") count++;
    if (priceRange !== "all") count++;
    if (style.length > 0) count++;
    setActiveFiltersCount(count);
  };

  useEffect(() => {
    calculateActiveFiltersCount();
  }, [availability, selectedCategory, selectedSubcategory, priceRange, style]);

  const clearAllFilters = () => {
    setAvailability("all");
    setSelectedCategory("All");
    setSelectedSubcategory("All");
    setPriceRange("all");
    setStyle([]);
  };

  const handleStyleChange = (styleValue) => {
    setStyle(prev => 
      prev.includes(styleValue) 
        ? prev.filter(s => s !== styleValue)
        : [...prev, styleValue]
    );
  };

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-particles"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero-title-gold">Shop</span> Products
          </h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.4s' }}>
            Discover lab-tested botanicals that deliver extraordinary results. 
            Professional wellness without compromise.
          </p>
        </div>
      </section>

      {/* Amazon-Style Layout */}
      <div className="amazon-layout">
        {/* Left Sidebar - Filters */}
        <aside className={`filters-sidebar ${isMobileFilterOpen ? 'mobile-open' : ''}`}>
          <div className="filters-header">
            <h2>Filters</h2>
            <button className="filters-close" onClick={() => setIsMobileFilterOpen(false)}>
              ×
            </button>
          </div>
          
          <div className="filters-content">
            {/* Availability Filter */}
            <div className="filter-section">
              <h3>Availability</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="availability"
                    value="all"
                    checked={availability === "all"}
                    onChange={(e) => setAvailability(e.target.value)}
                  />
                  <span>All Products</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="availability"
                    value="in-stock"
                    checked={availability === "in-stock"}
                    onChange={(e) => setAvailability(e.target.value)}
                  />
                  <span>In Stock</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="availability"
                    value="out-of-stock"
                    checked={availability === "out-of-stock"}
                    onChange={(e) => setAvailability(e.target.value)}
                  />
                  <span>Out of Stock</span>
                </label>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="filter-options">
                {priceRanges.map(range => (
                  <label key={range.value} className="filter-option">
                    <input
                      type="radio"
                      name="price"
                      value={range.value}
                      checked={priceRange === range.value}
                      onChange={(e) => setPriceRange(e.target.value)}
                    />
                    <span>{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Product Type Filter */}
            <div className="filter-section">
              <h3>Product Type</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="category"
                    value="All"
                    checked={selectedCategory === "All"}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  />
                  <span>All Products</span>
                </label>
                {categories.map((category) => (
                  <label key={category.name} className="filter-option">
                    <input
                      type="radio"
                      name="category"
                      value={category.name}
                      checked={selectedCategory === category.name}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Style Filter */}
            <div className="filter-section">
              <h3>Style</h3>
              <div className="filter-options">
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={style.includes("traditional")}
                    onChange={() => handleStyleChange("traditional")}
                  />
                  <span>Traditional</span>
                </label>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={style.includes("modern")}
                    onChange={() => handleStyleChange("modern")}
                  />
                  <span>Modern</span>
                </label>
                <label className="filter-option">
                  <input 
                    type="checkbox" 
                    checked={style.includes("organic")}
                    onChange={() => handleStyleChange("organic")}
                  />
                  <span>Organic</span>
                </label>
              </div>
            </div>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button className="clear-filters-btn" onClick={clearAllFilters}>
                Clear All Filters ({activeFiltersCount})
              </button>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Top Bar - Sorting */}
          <div className="top-bar">
            <div className="top-bar-left">
              <button 
                className="mobile-filter-btn"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                Filter
                {activeFiltersCount > 0 && (
                  <span className="filter-count">{activeFiltersCount}</span>
                )}
              </button>
            </div>
            <div className="top-bar-right">
              <div className="sort-dropdown">
                <label>Sort by</label>
                <select 
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
              <div className="product-count">
                {filteredProducts.length} products
              </div>
            </div>
          </div>

          {/* Product Grid */}
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
        </main>
      </div>
    </div>
  );
}
