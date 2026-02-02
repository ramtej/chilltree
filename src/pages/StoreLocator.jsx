import { useState } from "react";
import "./StoreLocator.css";

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState("");

  const stores = [
    { id: 1, name: "Chilltree Downtown", address: "123 Main Street", city: "Los Angeles, CA 90001", phone: "(555) 123-4567" },
    { id: 2, name: "Chilltree Westside", address: "456 Ocean Boulevard", city: "Santa Monica, CA 90401", phone: "(555) 234-5678" },
    { id: 3, name: "Chilltree Valley", address: "789 Valley Drive", city: "San Fernando, CA 91340", phone: "(555) 345-6789" },
  ];

  const filteredStores = stores.filter(
    (store) =>
      store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="store-locator-page">
      <div className="store-locator-inner">
        <div className="store-locator-header">
          <h1 className="store-locator-title">Find a Store</h1>
        </div>
        <div className="store-locator-search-wrap">
          <input
            type="text"
            className="store-locator-search"
            placeholder="Search by city or zip code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="store-locator-grid">
          <div className="store-locator-list">
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <div key={store.id} className="store-locator-card">
                  <h3 className="store-locator-card-name">{store.name}</h3>
                  <div className="store-locator-card-details">
                    <p>{store.address}</p>
                    <p>{store.city}</p>
                    <p className="store-locator-card-phone">{store.phone}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="store-locator-empty">
                No stores found matching your search.
              </div>
            )}
          </div>
          <div className="store-locator-map">
            <div className="store-locator-map-placeholder">
              <div className="icon">🗺️</div>
              <p>Map View</p>
              <p>Interactive map will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
