import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { emptyCart } from "../redux/slices/CartSlice";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-4xl font-bold mb-4 text-center text-green-500">
            Order successful!
          </h2>
          <p className="text-xl">Your order has been successfully placed</p>
          <button
            onClick={() => {
              dispatch(emptyCart());
            }}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[15vw] lg:w-[15vw] mt-5"
          >
            Return to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Success;
