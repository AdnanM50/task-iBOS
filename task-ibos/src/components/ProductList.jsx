import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">${product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductList;
