import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useToast } from '../context/ToastContext';
import { EditIcon, DeleteIcon, AddIcon, SaveIcon, CancelIcon, CloseIcon } from '../components/Icons';
import '../components/adminTable.css';
import './Stores.css';
import '../admin-variables.css';

export default function Stores() {
  const { stores, addStore, updateStore, deleteStore } = useAdmin();
  const { showToast } = useToast();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingStore, setEditingStore] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
  });

  const handleAddStore = () => {
    setIsEditMode(false);
    setEditingStore(null);
    setFormData({
      name: '',
      address: '',
      city: '',
      phone: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    const store = stores.find((s) => s.id === id);
    if (store) {
      setIsEditMode(true);
      setEditingStore(store);
      // Parse address to separate address and city
      const addressParts = store.address.split(', ');
      const city = addressParts.length > 1 ? addressParts.slice(1).join(', ') : '';
      const address = addressParts[0];
      setFormData({
        name: store.name,
        address: address,
        city: city,
        phone: store.phone,
      });
      setIsModalOpen(true);
    }
  };

  const handleDelete = (id) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = () => {
    if (deleteConfirmId) {
      deleteStore(deleteConfirmId);
      showToast('Store deleted successfully', 'success');
      setDeleteConfirmId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmId(null);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setEditingStore(null);
    setFormData({
      name: '',
      address: '',
      city: '',
      phone: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const fullAddress = formData.city
      ? `${formData.address}, ${formData.city}`
      : formData.address;

    if (isEditMode && editingStore) {
      // Update existing store
      updateStore(editingStore.id, {
        name: formData.name,
        address: fullAddress,
        phone: formData.phone,
      });
      showToast('Store updated successfully', 'success');
    } else {
      // Add new store
      addStore({
        name: formData.name,
        address: fullAddress,
        phone: formData.phone,
        status: 'Active',
      });
      showToast('Store added successfully', 'success');
    }

    handleModalClose();
  };

  return (
    <div className="stores-page page-content">
      <div className="stores-header">
        <div>
          <h1 className="page-title">Store Locations</h1>
          <p className="page-subtitle">Manage store locations and information</p>
        </div>
        <button onClick={handleAddStore} className="add-store-button">
          <AddIcon size={18} />
          <span>Add Store</span>
        </button>
      </div>

      <div className="stores-table-container">
        <table className="stores-table">
          <thead>
            <tr>
              <th>Store Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-state">
                  <div className="empty-state-content">
                    <span className="empty-icon">🏪</span>
                    <p>No stores found</p>
                    <p className="empty-message">Add your first store location to get started</p>
                  </div>
                </td>
              </tr>
            ) : (
              stores.map((store) => (
                <tr key={store.id}>
                  <td className="store-name">{store.name}</td>
                  <td className="store-address">{store.address}</td>
                  <td className="store-phone">{store.phone}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        store.status === 'Active' ? 'active' : 'inactive'
                      }`}
                    >
                      {store.status}
                    </span>
                  </td>
                  <td className="store-actions">
                    <button
                      onClick={() => handleEdit(store.id)}
                      className="action-button edit-button"
                      title="Edit Store"
                      aria-label="Edit Store"
                    >
                      <EditIcon size={16} />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(store.id)}
                      className="action-button delete-button"
                      title="Delete Store"
                      aria-label="Delete Store"
                    >
                      <DeleteIcon size={16} />
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Store Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModalClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{isEditMode ? 'Edit Store' : 'Add Store'}</h2>
              <button className="modal-close" onClick={handleModalClose}>
                ×
              </button>
            </div>
            <form onSubmit={handleSave} className="modal-form">
              <div className="form-group">
                <label htmlFor="name">Store Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter store name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter street address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter city"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter phone number"
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="cancel-button"
                >
                  <CancelIcon size={16} />
                  <span>Cancel</span>
                </button>
                <button type="submit" className="save-button">
                  <SaveIcon size={16} />
                  <span>{isEditMode ? 'Update' : 'Save'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId && (
        <div className="modal-overlay" onClick={cancelDelete}>
          <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Confirm Delete</h2>
              <button className="modal-close" onClick={cancelDelete}>
                ×
              </button>
            </div>
            <div className="delete-content">
              <p>
                Are you sure you want to delete this store? This action cannot
                be undone.
              </p>
              <div className="modal-actions">
                <button
                  type="button"
                  onClick={cancelDelete}
                  className="cancel-button"
                >
                  <CancelIcon size={16} />
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  onClick={confirmDelete}
                  className="delete-confirm-button"
                >
                  <DeleteIcon size={16} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
