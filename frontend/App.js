import React from "react";
import OrderDashboard from "./components/OrderDashboard";
import CreateOrder from "./components/CreateOrder";
import Inventory from "./components/Inventory";

function App() {
  return (
    <div>
      <h1>AgriEdge OMS</h1>
      <CreateOrder />
      <OrderDashboard />
      <Inventory />
    </div>
  );
}

export default App;
