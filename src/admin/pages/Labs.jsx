import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useToast } from '../context/ToastContext';
import { ViewIcon, DeleteIcon, UploadIcon, CloseIcon, CancelIcon } from '../components/Icons';
import './Labs.css';
import '../admin-variables.css';

export default function Labs() {
  const { labReports, addLabReport, deleteLabReport } = useAdmin();
  const { showToast } = useToast();

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      addLabReport({
        name: file.name,
        type: 'Quality Test',
        uploadDate: new Date().toISOString().split('T')[0],
        status: 'Draft',
      });
      showToast('Lab report uploaded successfully', 'success');
      // Reset file input
      e.target.value = '';
    } else {
      showToast('Please select a PDF file', 'error');
    }
  };

  const handleUpload = () => {
    // Trigger file input click
    document.getElementById('file-input').click();
  };

  const [viewingReport, setViewingReport] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const handleView = (id) => {
    const report = labReports.find((r) => r.id === id);
    if (report) {
      setViewingReport(report);
    }
  };

  const handleDelete = (id) => {
    setDeleteConfirmId(id);
  };

  const confirmDelete = () => {
    if (deleteConfirmId) {
      deleteLabReport(deleteConfirmId);
      showToast('Lab report deleted successfully', 'success');
      setDeleteConfirmId(null);
    }
  };

  const cancelDelete = () => {
    setDeleteConfirmId(null);
  };

  const closeViewModal = () => {
    setViewingReport(null);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="labs-page">
      <div className="labs-header">
        <div>
          <h1>Lab Reports</h1>
          <p>Manage and upload laboratory test reports</p>
        </div>
        <div>
          <input
            type="file"
            id="file-input"
            accept=".pdf"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
          <button onClick={handleUpload} className="upload-button">
            <UploadIcon size={18} />
            <span>Upload Report</span>
          </button>
        </div>
      </div>

      <div className="labs-table-container">
        <table className="labs-table">
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Type</th>
              <th>Upload Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {labReports.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-state">
                  <div className="empty-state-content">
                    <span className="empty-icon">🔬</span>
                    <p>No lab reports found</p>
                    <p className="empty-message">Upload your first lab report to get started</p>
                  </div>
                </td>
              </tr>
            ) : (
              labReports.map((report) => (
                <tr key={report.id}>
                  <td className="report-name">{report.name}</td>
                  <td className="report-type">{report.type}</td>
                  <td className="report-date">{formatDate(report.uploadDate)}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        report.status === 'Published' ? 'published' : 'draft'
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="report-actions">
                    <button
                      onClick={() => handleView(report.id)}
                      className="action-button view-button"
                      title="View Report"
                      aria-label="View Report"
                    >
                      <ViewIcon size={16} />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => handleDelete(report.id)}
                      className="action-button delete-button"
                      title="Delete Report"
                      aria-label="Delete Report"
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

      {/* View Report Modal */}
      {viewingReport && (
        <div className="modal-overlay" onClick={closeViewModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Lab Report Details</h2>
              <button className="modal-close" onClick={closeViewModal}>
                ×
              </button>
            </div>
            <div className="view-report-content">
              <div className="report-detail-item">
                <label>Report Name:</label>
                <p>{viewingReport.name}</p>
              </div>
              <div className="report-detail-item">
                <label>Type:</label>
                <p>{viewingReport.type}</p>
              </div>
              <div className="report-detail-item">
                <label>Upload Date:</label>
                <p>{formatDate(viewingReport.uploadDate)}</p>
              </div>
              <div className="report-detail-item">
                <label>Status:</label>
                <span
                  className={`status-badge ${
                    viewingReport.status === 'Published' ? 'published' : 'draft'
                  }`}
                >
                  {viewingReport.status}
                </span>
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  onClick={closeViewModal}
                  className="cancel-button"
                >
                  <CloseIcon size={16} />
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId && (
        <div className="modal-overlay" onClick={cancelDelete}>
          <div className="modal-content delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Confirm Delete</h2>
              <button className="modal-close" onClick={cancelDelete} aria-label="Close">
                <CloseIcon size={20} />
              </button>
            </div>
            <div className="delete-content">
              <p>
                Are you sure you want to delete this lab report? This action cannot
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
