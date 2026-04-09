import React, { useState, useEffect } from "react";

function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Dummy inventory data
    setItems([
      { name: "Seeds", stock: 100 },
      { name: "Fertilizer", stock: 50 },
      { name: "Pesticides", stock: 30 }
    ]);
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Stock: {item.stock}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
