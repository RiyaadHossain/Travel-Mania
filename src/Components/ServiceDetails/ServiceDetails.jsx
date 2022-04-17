import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = ({ service }) => {
    const navigate = useNavigate()
  const { name, price, img } = service;
  return (
    <div className="border rounded-md shadow">
      <img
        className="p-3 rounded h-[450px] w-96 object-cover"
        src={img}
        alt=""
      />
      <div className="px-9 py-4">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p className="text-xl font-semibold my-2">${price}</p>
              <button
                  onClick={() => navigate('/checkout')}
          style={{ backgroundColor: "crimson" }}
          className=" px-3 text-center text-white text-lg py-2 rounded-md font-semibold"
        >
          Tour
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
