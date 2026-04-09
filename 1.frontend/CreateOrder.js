import React, { useState } from "react";

function CreateOrder() {
  const [order, setOrder] = useState({
    product: "",
    quantity: "",
    customer: ""
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Created:", order);

    alert("Order Created Successfully!");
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product"
          placeholder="Product Name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />
        <input
          type="text"
          name="customer"
          placeholder="Customer Name"
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateOrder;
