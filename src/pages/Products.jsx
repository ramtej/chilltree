import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Products.css";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

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
    let filtered = products;

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
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return a.id - b.id; // featured default
    });

    return sorted;
  };

  const filteredProducts = getFilteredAndSortedProducts();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("All");
    setIsCategoryDropdownOpen(false);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsCategoryDropdownOpen(false);
  };

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
          <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="hero-title-gold">Shop</span> Products
          </h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.4s' }}>
            Discover lab-tested botanicals that deliver extraordinary results. 
            Professional wellness without compromise.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="products-filter-section">
        <div className="products-inner">
          <div className="filter-bar">
            <div className="filter-left">
              <div className="filter-group">
                <label className="filter-label">Availability</label>
                <select className="filter-select">
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                  <option>All</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Price</label>
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

              <div className="filter-group">
                <label className="filter-label">Product Type</label>
                <div 
                  className="category-dropdown"
                  onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                  onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                >
                  <div className="category-selected">
                    {selectedCategory === "All" ? "All Products" : selectedCategory}
                    <span className="dropdown-arrow">▼</span>
                  </div>
                  
                  {isCategoryDropdownOpen && (
                    <div className="category-dropdown-menu">
                      <div className="dropdown-section">
                        <div className="dropdown-title">Categories</div>
                        {categories.map((category) => (
                          <div 
                            key={category.name}
                            className="dropdown-item category-item"
                            onClick={() => handleCategorySelect(category.name)}
                          >
                            {category.name}
                          </div>
                        ))}
                      </div>
                      
                      {selectedCategory !== "All" && (
                        <div className="dropdown-section">
                          <div className="dropdown-title">Subcategories</div>
                          {categories
                            .find(cat => cat.name === selectedCategory)
                            ?.subcategories.map((subcategory) => (
                              <div 
                                key={subcategory}
                                className="dropdown-item subcategory-item"
                                onClick={() => handleSubcategorySelect(subcategory)}
                              >
                                {subcategory}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="filter-right">
              <div className="filter-group">
                <label className="filter-label">Sort by</label>
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
              <div className="product-count">
                {filteredProducts.length} products
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Circular Carousel */}
      <section className="products-grid-section">
        <div className="products-inner">
          <div className="circular-carousel">
            <div className="carousel-container">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="carousel-card"
                    style={{ 
                      '--card-index': index,
                      '--total-cards': filteredProducts.length
                    }}
                  >
                    <ProductCard product={product} index={index} />
                  </div>
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
        </div>
      </section>
    </div>
  );
}
