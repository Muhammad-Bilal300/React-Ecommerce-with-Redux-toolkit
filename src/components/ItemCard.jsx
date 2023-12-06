import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const ItemCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 shadow-lg rounded-lg p-2 mb-4">
      {/* <AiFillDelete className="absolute right-7 text-gray-600 cursor-pointer" /> */}
      <img src={item.img} alt={item.name} className="w-[50px] h-[50px]" />
      <div>
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-gray-800">{item.name}</h2>
          <AiFillDelete
            onClick={() => {
              dispatch(removeFromCart(item));
              toast(`${item.name} has been removed.`,{
                icon:"✔"
              })
            }}
            className="absolute right-7 h-[25px] w-[20px] mb-2 hover:text-red-600 cursor-pointer"
          />
        </div>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">${item.price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() => item.quantity > 1 && dispatch(decrementQty(item))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{item.quantity}</span>
            <AiOutlinePlus
              onClick={() => item.quantity >= 1 && dispatch(incrementQty(item))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
