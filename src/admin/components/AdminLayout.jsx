import { Outlet, NavLink, useNavigate } from 'react-router-dom';

import './AdminLayout.css';

import '../admin-variables.css';



export default function AdminLayout() {

  const navigate = useNavigate();



  const handleLogout = () => {

    // Switch to customer/user role

    localStorage.setItem('role', 'user');

    // Dispatch event to notify AuthGate of role change

    window.dispatchEvent(new Event('roleUpdated'));

    // Navigate to home page (customer view)

    navigate('/');

  };



  const navItems = [

    { path: '/admin/dashboard', label: 'Dashboard', icon: '📊' },

    { path: '/admin/products', label: 'Products', icon: '📦' },

    { path: '/admin/orders', label: 'Orders', icon: '🛒' },

    { path: '/admin/subscriptions', label: 'Subscriptions', icon: '💳' },

    { path: '/admin/labs', label: 'Labs', icon: '🔬' },

    { path: '/admin/stores', label: 'Stores', icon: '🏪' },

    { path: '/admin/categories', label: 'Categories', icon: '📁' },

  ];



  return (

    <div className="admin-layout">

      <aside className="admin-sidebar">

        <div className="sidebar-header">

          <h2>Admin Panel</h2>

          <button onClick={handleLogout} className="logout-button-top">

            🚪 Logout

          </button>

        </div>

        <nav className="sidebar-nav">

          {navItems.map((item) => (

            <NavLink

              key={item.path}

              to={item.path}

              end={item.path === '/admin/dashboard'}

              className={({ isActive }) =>

                `nav-link ${isActive ? 'active' : ''}`

              }

            >

              <span className="nav-icon">{item.icon}</span>

              <span className="nav-label">{item.label}</span>

            </NavLink>

          ))}

        </nav>

      </aside>

      <main className="admin-main">

        <div className="admin-content">

          <Outlet />

        </div>

      </main>

    </div>

  );

}

