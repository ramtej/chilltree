import { useState } from 'react';
import './Categories.css';
import '../admin-variables.css';

export default function Categories() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Energy Shots',
      subcategories: ['Mit + Kava', 'Kava + Kana'],
      status: 'Active'
    },
    {
      id: 2,
      name: 'Pills',
      subcategories: ['Mit + Kava', 'Kava + Kana'],
      status: 'Active'
    }
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    subcategories: '',
    status: 'Active'
  });

  const handleAddCategory = () => {
    setFormData({
      name: '',
      subcategories: '',
      status: 'Active'
    });
    setIsAddModalOpen(true);
    setEditingCategory(null);
  };

  const handleEdit = (categoryId) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      setFormData({
        name: category.name,
        subcategories: category.subcategories.join(', '),
        status: category.status
      });
      setEditingCategory(category);
      setIsAddModalOpen(true);
    }
  };

  const handleDelete = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(c => c.id !== categoryId));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subcategoriesArray = formData.subcategories
      .split(',')
      .map(sub => sub.trim())
      .filter(sub => sub !== '');

    if (editingCategory) {
      // Update existing category
      setCategories(categories.map(c => 
        c.id === editingCategory.id 
          ? { ...c, ...formData, subcategories: subcategoriesArray }
          : c
      ));
    } else {
      // Add new category
      const newCategory = {
        id: Date.now(),
        ...formData,
        subcategories: subcategoriesArray
      };
      setCategories([...categories, newCategory]);
    }

    closeModal();
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setEditingCategory(null);
    setFormData({
      name: '',
      subcategories: '',
      status: 'Active'
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="categories-page">
      <div className="categories-header">
        <div>
          <h1>Categories</h1>
          <p>Manage product categories and subcategories</p>
        </div>
        <button className="add-category-btn" onClick={handleAddCategory}>
          + Add Category
        </button>
      </div>

      <div className="categories-table-container">
        <table className="categories-table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Subcategories</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-state">
                  <div className="empty-state-content">
                    <span className="empty-icon">📁</span>
                    <p>No categories found</p>
                    <p className="empty-message">Create your first category to get started</p>
                  </div>
                </td>
              </tr>
            ) : (
              categories.map((category) => (
                <tr key={category.id}>
                  <td className="category-name">{category.name}</td>
                  <td className="subcategories">
                    {category.subcategories.length > 0 ? (
                      <div className="subcategory-badges">
                        {category.subcategories.map((sub, index) => (
                          <span key={index} className="subcategory-badge">
                            {sub}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="no-subcategories">—</span>
                    )}
                  </td>
                  <td className="status">
                    <span className={`status-badge ${category.status.toLowerCase()}`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="actions">
                    <button 
                      className="action-btn edit-btn" 
                      onClick={() => handleEdit(category.id)}
                    >
                      Edit
                    </button>
                    <button 
                      className="action-btn delete-btn" 
                      onClick={() => handleDelete(category.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Category Modal */}
      {isAddModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{editingCategory ? 'Edit Category' : 'Add New Category'}</h2>
              <button 
                className="modal-close" 
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="modal-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subcategories">Subcategories (comma-separated)</label>
                  <input
                    type="text"
                    id="subcategories"
                    name="subcategories"
                    value={formData.subcategories}
                    onChange={handleInputChange}
                    placeholder="e.g., Mit + Kava, Kava + Kana"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="button" className="cancel-btn" onClick={closeModal}>
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    {editingCategory ? 'Update Category' : 'Add Category'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
