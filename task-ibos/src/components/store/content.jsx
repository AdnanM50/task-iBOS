import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
import { IoBagOutline } from "react-icons/io5";

const Content = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  return (
    <div className=" w-full p-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
        {products.map((product) => (
          <div key={product.id} className="border bg-white shadow-md rounded-lg p-4">
            <div className="h-[236px] py-4 px-5 bg-[#F2F2F2]">
            <img src="" alt="" className="h-[205px] object-fill" />
            </div>
            
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <div class="flex items-center space-x-2">
  <span className="text-xl font-semibold text-black">€299.00</span>
  <span className="text-xl text-gray-400 line-through">€350.00</span>
  <span className="text-xl font-semibold text-red-600">30% OFF</span>
</div>
            <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>
            {/* <p className="text-lg font-bold mb-4">${product.price}</p> */}
            <button
              onClick={() => addToCart(product)}
              className="bg-[#202020] w-full text-white px-4 py-2 flex rounded justify-center items-center"
            >
              <IoBagOutline size={20} className="mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
