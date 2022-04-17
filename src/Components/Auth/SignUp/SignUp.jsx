import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[93vh] pt-40 signUp-container">
      <div className="border bg-slate-200 border-gray-600 mx-auto max-w-[650px] container py-14 mt px-8 rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold mb-8 text-red-600">
          Sign Up
        </h2>
        <form className="">
          <input
            className="block border text-zinc-700 outline-none p-3 text-lg mb-5 w-full rounded"
            type="text"
            placeholder="Name"
          />
          <input
            className="block border text-zinc-700 outline-none p-3 text-lg mb-5 w-full rounded"
            type="email"
            placeholder="Email"
          />
          <input
            className="block border text-zinc-700 outline-none p-3 text-lg mb-5 w-full rounded"
            type="password"
            placeholder="Password"
          />
          <input
            className="block border text-zinc-700 outline-none p-3 text-lg mb-5 w-full rounded"
            type="password"
            placeholder="Confirm Password"
          />
          <div className="flex justify-between items-center">
            <input
              className="bg-red-600 text-white py-2 w-1/3 text-lg rounded"
              type="submit"
              value="Sign Up"
            />
            <p className="text-lg">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-red-600"
              >
                Log In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
