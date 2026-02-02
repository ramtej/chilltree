import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import "./Products.css";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getProductCategory = (product) => {
    return product.category || "Energy Shots";
  };

  const categories = ["All", "Energy Shots", "Pills"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => getProductCategory(product) === selectedCategory);

  return (
    <div className="products-page">
      <div className="products-inner">
        <div className="products-header">
          <h1 className="products-title">Shop Products</h1>
          <p className="products-subtitle">We offer a wide range of products to help you stay energized and healthy.</p>
        </div>

        <div className="products-filters">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`products-filter-btn ${selectedCategory === category ? "products-filter-btn--active" : "products-filter-btn--default"}`}
              style={{'--filter-index': index}}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="products-empty">No products found in this category.</div>
          )}
        </div>
      </div>
    </div>
  );
}
