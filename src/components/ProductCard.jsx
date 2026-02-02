import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Add to cart:", product.id);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-image-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
      </div>
      <div className="product-card-body">
        <h3 className="product-card-title">{product.name}</h3>
        <span className="product-card-price">${product.price.toFixed(2)}</span>
        <button
          type="button"
          className="product-card-cta"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
