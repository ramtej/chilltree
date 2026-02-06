import './Dashboard.css';
import '../admin-variables.css';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Orders',
      value: '1,247',
      icon: '🛒',
      change: '+12.5%',
      positive: true,
    },
    {
      title: 'Revenue',
      value: '$45,230',
      icon: '💰',
      change: '+8.2%',
      positive: true,
    },
    {
      title: 'Users',
      value: '8,429',
      icon: '👥',
      change: '+15.3%',
      positive: true,
    },
    {
      title: 'Subscriptions',
      value: '2,156',
      icon: '💳',
      change: '+5.7%',
      positive: true,
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's what's happening with your business today.</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <h3 className="stat-title">{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
