import { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { useToast } from '../context/ToastContext';
import './Orders.css';
import '../admin-variables.css';

export default function Orders() {
  const { orders, updateOrderStatus, setOrdersList } = useAdmin();
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter orders based on search term
  const filteredOrders = orders.filter(order => {
    const searchLower = searchTerm.toLowerCase();
    return (
      order.id.toLowerCase().includes(searchLower) ||
      order.customer.toLowerCase().includes(searchLower) ||
      order.product.toLowerCase().includes(searchLower) ||
      order.paymentStatus.toLowerCase().includes(searchLower) ||
      order.status.toLowerCase().includes(searchLower)
    );
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleProductChange = (orderId, newProduct) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, product: newProduct } : order
    );
    setOrdersList(updatedOrders);
    showToast(`Product updated to ${newProduct}`, 'success');
  };

  const handlePaymentStatusChange = (orderId, newPaymentStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, paymentStatus: newPaymentStatus } : order
    );
    setOrdersList(updatedOrders);
    showToast(`Payment status updated to ${newPaymentStatus}`, 'success');
  };

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrdersList(updatedOrders);
    showToast(`Status updated to ${newStatus}`, 'success');
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div>
          <h1>Orders</h1>
          <p>View and manage customer orders</p>
        </div>
        <div className="header-actions">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search orders by ID, customer, product, payment status, or status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <div className="search-icon">🔍</div>
          </div>
        </div>
      </div>

      {searchTerm && (
        <div className="search-results">
          Found {filteredOrders.length} of {orders.length} orders
        </div>
      )}

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Payment Status</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-state">
                  <div className="empty-state-content">
                    <span className="empty-icon">🛒</span>
                    <p>{searchTerm ? 'No orders found matching your search' : 'No orders found'}</p>
                    <p className="empty-message">
                      {searchTerm ? 'Try adjusting your search terms' : 'Orders will appear here when customers place them'}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td className="order-customer">{order.customer}</td>
                  <td>
                    <select
                      value={order.product}
                      onChange={(e) => handleProductChange(order.id, e.target.value)}
                      className="product-select"
                    >
                      <option value="Energy Shots">Energy Shots</option>
                      <option value="Pills">Pills</option>
                    </select>
                  </td>
                  <td className="order-amount">{order.amount}</td>
                  <td>
                    <select
                      value={order.paymentStatus}
                      onChange={(e) => handlePaymentStatusChange(order.id, e.target.value)}
                      className="payment-status-select"
                    >
                      <option value="Paid">Paid</option>
                      <option value="Pending">Pending</option>
                      <option value="Refunded">Refunded</option>
                      <option value="Failed">Failed</option>
                    </select>
                  </td>
                  <td className="order-date">{formatDate(order.date)}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`status-select status-${order.status.toLowerCase()}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
