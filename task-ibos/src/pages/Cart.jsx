
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap">
        {/* Left section: Cart items */}
        <div className="w-full lg:w-2/3 p-4 border-r">
          <h2 className="text-2xl font-bold mb-4">An overview of your order</h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">€ {item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-2 border rounded text-center mr-4"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Right section: Order details */}
        <div className="w-full lg:w-1/3 p-4">
          <h2 className="text-2xl font-bold mb-4">Order details</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Subtotal</span>
              <span className="font-semibold">€ {calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Shipping</span>
              <span className="font-semibold">Free</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Estimated Tax</span>
              <span className="font-semibold">€ 0.00</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-xl font-bold">Total</span>
              <span className="text-xl font-bold">€ {calculateTotal()}</span>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
