import React, { useEffect, useState } from "react";

function OrderDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Dummy data (replace with API later)
    setOrders([
      { id: 1, product: "Seeds", quantity: 10, status: "Pending" },
      { id: 2, product: "Fertilizer", quantity: 5, status: "Shipped" }
    ]);
  }, []);

  return (
    <div>
      <h2>Order Dashboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.product}</td>
              <td>{o.quantity}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDashboard;
