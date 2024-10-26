import { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '', description: '', price: 0, quantity: 0
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:5000/products');
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = async () => {
    await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });
    fetchProducts();
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.description} - ${product.price} - Qty: {product.quantity}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Add New Product</h3>
      <input placeholder="Name" onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })} />
      <input placeholder="Quantity" type="number" onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })} />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default ProductList;
