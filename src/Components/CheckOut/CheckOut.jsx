import React from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const navigate = useNavigate()
  return (
    <div className="h-[69.2vh] bg-slate-200 flex justify-center ">
      <div className="text-center">
        <h1 className=" font-bold text-3xl text-red-600 pt-16">
          Checkout Your preference
        </h1>
        <button onClick={() => navigate('/procceed')} className="bg-red-600 mt-10 text-white py-2 px-5 rounded text-base font-semibold">Procceed</button>
      </div>
    </div>
  );
};

export default CheckOut;
