import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ food, handleToast }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold w-[270px] bg-white p-5 flex flex-col rounded-lg gap-3">
      <img
        src={food.img}
        alt={food.name}
        className="w-auto h-[145px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="text-md flex justify-between">
        <h2>{food.name}</h2>
        <span className="text-green-500 ml-2">${food.price}</span>
      </div>
      <p className="text-sm font-normal">{food.desc.slice(0, 75)} ...</p>

      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {food.rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart(food));
            handleToast(food.name);
          }}
          className="p-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
