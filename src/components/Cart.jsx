import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const totalQty = cartItems.reduce(
    (totalQty, item) => totalQty + item.quantity,
    0
  );
  const totalAmount = cartItems.reduce(
    (totalAmount, item) => totalAmount + item.quantity * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? `translate-x-0` : `translate-x-full`
        } transition-all durstaion-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        <hr className="w-[90vw] lg:w-[18vw] my-4" />

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return <ItemCard key={index} item={item} />;
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800 mt-4">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-bold text-gray-800 text-xl">
            {" "}
            <span>Items: </span>
            <span className="text-green-500">{totalQty}</span>
          </h3>
          <h3 className="font-bold text-gray-800 text-xl">
            <span>Total Amount:</span>
            <span className="text-green-500"> ${totalAmount}</span>
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />

          <button
            onClick={() => {
              navigate("/success");
            }}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[9vw0] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-lg text-5xl p-3 fixed bottom-10 right-4 ${
          totalQty > 0 && `animate-bounce delay-100 transition-all`
        }`}
      />
    </>
  );
};

export default Cart;
