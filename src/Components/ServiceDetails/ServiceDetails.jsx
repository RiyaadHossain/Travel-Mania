import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const navigate = useNavigate();
  const { name, price, img, description } = service;
  return (
    <div className="border rounded-md shadow">
      <img
        className="p-3 rounded h-[450px] w-full object-cover"
        src={img}
        alt=""
      />
      <div className="px-8 py-4">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <p className="text-2xl font-bold my-2">${price}</p>
        <p className="text-lg">{ description}</p>
        <button
          onClick={() => navigate("/checkout")}
          style={{ backgroundColor: "crimson" }}
          className="mt-3 px-3 text-center text-white text-lg py-2 rounded-md font-medium"
        >
          Take Guide
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
