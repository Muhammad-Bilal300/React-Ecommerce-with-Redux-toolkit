import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`${name} added to the cart.`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-8 flex flex-wrap gap-8 justify-center lg:justify-start my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food, index) => {
          return <FoodCard key={index} food={food} handleToast={handleToast} />;
        })}
      </div>
    </>
  );
};

export default FoodItems;
