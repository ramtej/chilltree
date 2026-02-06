import { useState } from 'react';
import { AddIcon, DeleteIcon, EditIcon } from '../components/Icons';
import '../components/adminTable.css';
import './Products.css';
import '../admin-variables.css';

export default function Products() {
  const [products, setProducts] = useState([
    { id: 'p1', name: 'Chilltree Original', category: 'Shots', price: '$4.99', status: 'ACTIVE' },
    { id: 'p2', name: 'Citrus Burst Energy', category: 'Energy', price: '$3.99', status: 'ACTIVE' },
    { id: 'p3', name: 'Berry Fusion Boost', category: 'Boost', price: '$3.99', status: 'OUT OF STOCK' },
    { id: 'p4', name: 'Herbal Power', category: 'Herbal', price: '$5.49', status: 'ACTIVE' },
    { id: 'p5', name: 'Primal Force', category: 'Performance', price: '$5.99', status: 'ACTIVE' },
    { id: 'p6', name: 'Focus Fuel', category: 'Focus', price: '$4.49', status: 'OUT OF STOCK' },
    { id: 'p7', name: 'Mango Tango', category: 'Energy', price: '$3.99', status: 'ACTIVE' },
    { id: 'p8', name: 'Mit + Kava Shot', category: 'Shots', price: '$6.49', status: 'OUT OF STOCK' },
  ]);
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Shots',
    price: '',
    status: 'ACTIVE'
  });

  const handleAddProduct = () => {
    setFormData({ name: '', category: 'Shots', price: '', status: 'ACTIVE' });
    setIsAddModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      status: product.status
    });
  };

  const handleDeleteProduct = (productId) => {
    setDeleteConfirmId(productId);
  };

  const confirmDelete = () => {
    setProducts(products.filter(p => p.id !== deleteConfirmId));
    setDeleteConfirmId(null);
  };

  const saveProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData }
          : p
      ));
      setEditingProduct(null);
    } else {
      const newProduct = {
        id: `p${Date.now()}`,
        ...formData
      };
      setProducts([...products, newProduct]);
      setIsAddModalOpen(false);
    }
  };

  const cancelEdit = () => {
    setEditingProduct(null);
    setIsAddModalOpen(false);
    setFormData({ name: '', category: 'Shots', price: '', status: 'ACTIVE' });
  };
  return (
    <div className="products-page page-content">
      <div className="products-header">
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Manage your product inventory</p>
        </div>
        <button type="button" className="add-product-button" onClick={handleAddProduct}>
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
                    onClick={() => handleEditProduct(product)}
                  >
                    <EditIcon size={16} />
                    <span>Edit</span>
                  </button>
                  <button
                    type="button"
                    className="action-button delete-button"
                    title="Delete Product"
                    aria-label="Delete Product"
                    onClick={() => handleDeleteProduct(product.id)}
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

      {/* Add/Edit Product Modal */}
      {(isAddModalOpen || editingProduct) && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button 
                className="modal-close" 
                onClick={cancelEdit}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="modal-form">
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter product name"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="Shots">Shots</option>
                  <option value="Energy">Energy</option>
                  <option value="Boost">Boost</option>
                  <option value="Herbal">Herbal</option>
                  <option value="Performance">Performance</option>
                  <option value="Focus">Focus</option>
                </select>
              </div>
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  placeholder="$0.00"
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="OUT OF STOCK">OUT OF STOCK</option>
                </select>
              </div>
            </div>
            <div className="modal-actions">
              <button className="cancel-button" onClick={cancelEdit}>
                Cancel
              </button>
              <button className="save-button" onClick={saveProduct}>
                {editingProduct ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="modal-overlay">
          <div className="modal-content delete-modal">
            <div className="delete-content">
              <h3>Confirm Delete</h3>
              <p>Are you sure you want to delete this product? This action cannot be undone.</p>
            </div>
            <div className="modal-actions">
              <button className="cancel-button" onClick={() => setDeleteConfirmId(null)}>
                Cancel
              </button>
              <button className="delete-confirm-button" onClick={confirmDelete}>
                <DeleteIcon size={16} />
                Delete Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
