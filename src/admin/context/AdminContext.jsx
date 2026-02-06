import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

// Helper functions for localStorage
const loadFromStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

// Default data
const defaultProducts = [
    {
      id: 1,
      name: 'Premium Coffee Beans',
      category: 'Beverages',
      price: '$24.99',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Organic Green Tea',
      category: 'Beverages',
      price: '$18.50',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Artisan Chocolate Bar',
      category: 'Snacks',
      price: '$12.99',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Honey Infused Syrup',
      category: 'Condiments',
      price: '$15.75',
      status: 'Inactive',
    },
    {
      id: 5,
      name: 'Gourmet Popcorn',
      category: 'Snacks',
      price: '$9.99',
      status: 'Active',
    },
    {
      id: 6,
      name: 'Herbal Tea Collection',
      category: 'Beverages',
      price: '$32.00',
      status: 'Active',
    },
    {
      id: 7,
      name: 'Maple Syrup',
      category: 'Condiments',
      price: '$22.50',
      status: 'Active',
    },
    {
      id: 8,
      name: 'Trail Mix',
      category: 'Snacks',
      price: '$14.25',
      status: 'Inactive',
    },
];

const defaultOrders = [
    {
      id: 'ORD-001',
      customer: 'John Smith',
      product: 'Energy Shots',
      amount: '$124.99',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-002',
      customer: 'Sarah Johnson',
      product: 'Pills',
      amount: '$89.50',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-003',
      customer: 'Michael Brown',
      product: 'Energy Shots',
      amount: '$156.75',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    },
    {
      id: 'ORD-004',
      customer: 'Emily Davis',
      product: 'Pills',
      amount: '$67.25',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-005',
      customer: 'David Wilson',
      product: 'Energy Shots',
      amount: '$234.00',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-006',
      customer: 'Jessica Martinez',
      product: 'Pills',
      amount: '$98.50',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    },
    {
      id: 'ORD-007',
      customer: 'Robert Taylor',
      product: 'Energy Shots',
      amount: '$145.99',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-008',
      customer: 'Michelle White',
      product: 'Pills',
      amount: '$78.25',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-009',
      customer: 'Christopher Lee',
      product: 'Energy Shots',
      amount: '$189.75',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-010',
      customer: 'Amanda Anderson',
      product: 'Pills',
      amount: '$112.00',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    },
    {
      id: 'ORD-011',
      customer: 'Daniel Martinez',
      product: 'Energy Shots',
      amount: '$234.00',
      paymentStatus: 'Paid',
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    }
  ];

const defaultSubscriptions = [
    {
      id: 1,
      user: 'John Smith',
      plan: 'Premium',
      startDate: '2024-01-15',
      status: 'Active',
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      plan: 'Basic',
      startDate: '2024-02-20',
      status: 'Active',
    },
    {
      id: 3,
      user: 'Michael Brown',
      plan: 'Premium',
      startDate: '2023-12-10',
      status: 'Active',
    },
    {
      id: 4,
      user: 'Emily Davis',
      plan: 'Enterprise',
      startDate: '2024-03-05',
      status: 'Active',
    },
    {
      id: 5,
      user: 'David Wilson',
      plan: 'Basic',
      startDate: '2023-11-18',
      status: 'Cancelled',
    },
    {
      id: 6,
      user: 'Jessica Martinez',
      plan: 'Premium',
      startDate: '2024-01-28',
      status: 'Active',
    },
    {
      id: 7,
      user: 'Robert Taylor',
      plan: 'Basic',
      startDate: '2024-02-14',
      status: 'Active',
    },
    {
      id: 8,
      user: 'Amanda Anderson',
      plan: 'Premium',
      startDate: '2023-10-22',
      status: 'Cancelled',
    },
    {
      id: 9,
      user: 'Christopher Lee',
      plan: 'Enterprise',
      startDate: '2024-03-12',
      status: 'Active',
    },
    {
      id: 10,
      user: 'Michelle White',
      plan: 'Premium',
      startDate: '2024-01-05',
      status: 'Active',
    },
];

const defaultLabReports = [
    {
      id: 1,
      name: 'Coffee Quality Analysis - Batch 001',
      type: 'Quality Test',
      uploadDate: '2024-01-15',
      status: 'Published',
    },
    {
      id: 2,
      name: 'Organic Certification Report',
      type: 'Certification',
      uploadDate: '2024-02-20',
      status: 'Published',
    },
    {
      id: 3,
      name: 'Pesticide Residue Test - Q1 2024',
      type: 'Safety Test',
      uploadDate: '2024-03-10',
      status: 'Draft',
    },
    {
      id: 4,
      name: 'Flavor Profile Analysis',
      type: 'Quality Test',
      uploadDate: '2024-02-28',
      status: 'Published',
    },
    {
      id: 5,
      name: 'Microbiological Analysis',
      type: 'Safety Test',
      uploadDate: '2024-03-15',
      status: 'Published',
    },
    {
      id: 6,
      name: 'Nutritional Information Report',
      type: 'Nutrition',
      uploadDate: '2024-01-30',
      status: 'Draft',
    },
];

const defaultStores = [
  {
    id: 1,
    name: 'Downtown Location',
    address: '123 Main Street, New York, NY 10001',
    phone: '(555) 123-4567',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Shopping Mall Branch',
    address: '456 Commerce Blvd, Los Angeles, CA 90001',
    phone: '(555) 234-5678',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Airport Terminal',
    address: '789 Airport Way, Chicago, IL 60601',
    phone: '(555) 345-6789',
    status: 'Active',
  },
  {
    id: 4,
    name: 'University Campus',
    address: '321 College Ave, Boston, MA 02101',
    phone: '(555) 456-7890',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Suburban Plaza',
    address: '654 Park Street, Seattle, WA 98101',
    phone: '(555) 567-8901',
    status: 'Inactive',
  },
  {
    id: 6,
    name: 'Beachfront Store',
    address: '987 Ocean Drive, Miami, FL 33101',
    phone: '(555) 678-9012',
    status: 'Active',
  },
];

export const AdminProvider = ({ children }) => {
  // Products state with localStorage
  const [products, setProducts] = useState(() =>
    loadFromStorage('admin_products', defaultProducts)
  );

  // Orders state with localStorage
  const [orders, setOrders] = useState(() =>
    loadFromStorage('admin_orders', defaultOrders)
  );

  // Subscriptions state with localStorage
  const [subscriptions, setSubscriptions] = useState(() =>
    loadFromStorage('admin_subscriptions', defaultSubscriptions)
  );

  // Labs state with localStorage
  const [labReports, setLabReports] = useState(() =>
    loadFromStorage('admin_labReports', defaultLabReports)
  );

  // Stores state with localStorage
  const [stores, setStores] = useState(() =>
    loadFromStorage('admin_stores', defaultStores)
  );

  // Sync products to localStorage
  useEffect(() => {
    saveToStorage('admin_products', products);
  }, [products]);

  // Sync orders to localStorage
  useEffect(() => {
    saveToStorage('admin_orders', orders);
  }, [orders]);

  // Sync subscriptions to localStorage
  useEffect(() => {
    saveToStorage('admin_subscriptions', subscriptions);
  }, [subscriptions]);

  // Sync labReports to localStorage
  useEffect(() => {
    saveToStorage('admin_labReports', labReports);
  }, [labReports]);

  // Sync stores to localStorage
  useEffect(() => {
    saveToStorage('admin_stores', stores);
  }, [stores]);

  // Products CRUD
  const addProduct = (product) => {
    const newProduct = {
      id: Math.max(...products.map((p) => p.id), 0) + 1,
      ...product,
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Orders CRUD
  const updateOrderStatus = (id, status) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const handleStatusChange = (id, status) => {
    setOrders(orders.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  const setOrdersList = (newOrders) => {
    setOrders(newOrders);
  };

  // Subscriptions CRUD
  const toggleSubscription = (id) => {
    setSubscriptions(
      subscriptions.map((s) =>
        s.id === id
          ? {
              ...s,
              status: s.status === 'Active' ? 'Cancelled' : 'Active',
            }
          : s
      )
    );
  };

  // Labs CRUD
  const addLabReport = (report) => {
    const newReport = {
      id: Math.max(...labReports.map((r) => r.id), 0) + 1,
      ...report,
    };
    setLabReports([...labReports, newReport]);
  };

  const deleteLabReport = (id) => {
    setLabReports(labReports.filter((r) => r.id !== id));
  };

  // Stores CRUD
  const addStore = (store) => {
    const newStore = {
      id: Math.max(...stores.map((s) => s.id), 0) + 1,
      ...store,
    };
    setStores([...stores, newStore]);
  };

  const updateStore = (id, updatedStore) => {
    setStores(stores.map((s) => (s.id === id ? { ...s, ...updatedStore } : s)));
  };

  const deleteStore = (id) => {
    setStores(stores.filter((s) => s.id !== id));
  };

  const value = {
    // Data
    products,
    orders,
    subscriptions,
    labReports,
    stores,
    // Products functions
    addProduct,
    updateProduct,
    deleteProduct,
    // Orders functions
    updateOrderStatus,
    setOrdersList,
    // Subscriptions functions
    toggleSubscription,
    // Labs functions
    addLabReport,
    deleteLabReport,
    // Stores functions
    addStore,
    updateStore,
    deleteStore,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
