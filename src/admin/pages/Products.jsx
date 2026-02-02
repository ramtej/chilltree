import { AddIcon, DeleteIcon, EditIcon } from '../components/Icons';
import '../components/adminTable.css';
import './Products.css';

const products = [
  { id: 'p1', name: 'Chilltree Original', category: 'Shots', price: '$4.99', status: 'ACTIVE' },
  { id: 'p2', name: 'Citrus Burst Energy', category: 'Energy', price: '$3.99', status: 'ACTIVE' },
  { id: 'p3', name: 'Berry Fusion Boost', category: 'Boost', price: '$3.99', status: 'OUT OF STOCK' },
  { id: 'p4', name: 'Herbal Power', category: 'Herbal', price: '$5.49', status: 'ACTIVE' },
  { id: 'p5', name: 'Primal Force', category: 'Performance', price: '$5.99', status: 'ACTIVE' },
  { id: 'p6', name: 'Focus Fuel', category: 'Focus', price: '$4.49', status: 'OUT OF STOCK' },
  { id: 'p7', name: 'Mango Tango', category: 'Energy', price: '$3.99', status: 'ACTIVE' },
  { id: 'p8', name: 'Mit + Kava Shot', category: 'Shots', price: '$6.49', status: 'OUT OF STOCK' },
];

export default function Products() {
  return (
    <div className="products-page page-content">
      <div className="products-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Manage your product inventory</p>
        </div>
        <button type="button" className="add-product-button">
          <AddIcon size={18} />
          <span>Add Product</span>
        </button>
      </div>

      <div className="products-table-container stores-table-container">
        <table className="products-table stores-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="product-name">{product.name}</td>
                <td className="product-category">{product.category}</td>
                <td className="product-price">{product.price}</td>
                <td>
                  <span
                    className={`status-badge ${
                      product.status === 'ACTIVE' ? 'active' : 'inactive'
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="product-actions">
                  <button
                    type="button"
                    className="action-button edit-button"
                    title="Edit Product"
                    aria-label="Edit Product"
                  >
                    <EditIcon size={16} />
                    <span>Edit</span>
                  </button>
                  <button
                    type="button"
                    className="action-button delete-button"
                    title="Delete Product"
                    aria-label="Delete Product"
                  >
                    <DeleteIcon size={16} />
                    <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
