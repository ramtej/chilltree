import { useAdmin } from '../context/AdminContext';

import { useToast } from '../context/ToastContext';

import './Subscriptions.css';

import '../admin-variables.css';



export default function Subscriptions() {

  const { subscriptions, toggleSubscription } = useAdmin();

  const { showToast } = useToast();



  const formatDate = (dateString) => {

    const date = new Date(dateString);

    return date.toLocaleDateString('en-US', {

      year: 'numeric',

      month: 'short',

      day: 'numeric',

    });

  };



  const handleToggleSubscription = (id) => {

    const subscription = subscriptions.find((s) => s.id === id);

    toggleSubscription(id);

    const newStatus = subscription.status === 'Active' ? 'Cancelled' : 'Active';

    showToast(`Subscription ${newStatus.toLowerCase()}`, 'success');

  };



  return (

    <div className="subscriptions-page">

      <div className="subscriptions-header">

        <div>

          <h1>Subscriptions</h1>

          <p>Manage customer subscription plans</p>

        </div>

      </div>



      <div className="subscriptions-table-container">

        <table className="subscriptions-table">

          <thead>

            <tr>

              <th>User</th>

              <th>Plan</th>

              <th>Start Date</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {subscriptions.length === 0 ? (

              <tr>

                <td colSpan="4" className="empty-state">

                  <div className="empty-state-content">

                    <span className="empty-icon">💳</span>

                    <p>No subscriptions found</p>

                    <p className="empty-message">Subscriptions will appear here when users subscribe</p>

                  </div>

                </td>

              </tr>

            ) : (

              subscriptions.map((subscription) => (

                <tr key={subscription.id}>

                  <td className="subscription-user">{subscription.user}</td>

                  <td className="subscription-plan">{subscription.plan}</td>

                  <td className="subscription-date">

                    {formatDate(subscription.startDate)}

                  </td>

                  <td>

                    <label className="toggle-switch">

                      <input

                        type="checkbox"

                        checked={subscription.status === 'Active'}

                        onChange={() => handleToggleSubscription(subscription.id)}

                      />

                      <span className="toggle-slider"></span>

                    </label>

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

