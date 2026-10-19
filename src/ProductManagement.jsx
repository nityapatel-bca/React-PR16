import React, { useState } from 'react';

function ProductManagement() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name,
      price: price
    };

    setProducts([...products, newProduct]);
    setName('');
    setPrice('');
  }

  return (
    <div>
      <h1>Product Management</h1>

      <form onSubmit={addProduct}>
        <label>Product Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <label>Product Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          min="0.01"
          step="0.01"
        />
        <br /><br />

        <button type="submit">Add Product</button>
      </form>

      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products added.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ₹{product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductManagement;