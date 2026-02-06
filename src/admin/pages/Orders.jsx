import { useAdmin } from '../context/AdminContext';
import { useToast } from '../context/ToastContext';
import './Orders.css';
import '../admin-variables.css';

export default function Orders() {
  const { orders, updateOrderStatus } = useAdmin();
  const { showToast } = useToast();

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
    showToast(`Order status updated to ${newStatus}`, 'success');
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div>
          <h1>Orders</h1>
          <p>View and manage customer orders</p>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-state">
                  <div className="empty-state-content">
                    <span className="empty-icon">🛒</span>
                    <p>No orders found</p>
                    <p className="empty-message">Orders will appear here when customers place them</p>
                  </div>
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td className="order-customer">{order.customer}</td>
                  <td className="order-amount">{order.amount}</td>
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
