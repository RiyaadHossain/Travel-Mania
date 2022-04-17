import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const onEmailBlur = (e) => {
    const email = e.target.value;
    if (/\S+@\S+\.\S+/.test(email)) {
      setEmail({ value: email, error: "" });
    } else {
      setEmail({ value: "", error: "Email is Invalid" });
    }
  };
  const onPasswordBlur = (e) => {
    const password = e.target.value;

      setPassword({ value: password, error: "" });
   
    
  };
  useEffect(() => {
    if (user) {
      navigate("/");
      toast.success("Logged In");
    }
    if (error) {
      // toast.error("An Error Occurred")
    }
  }, [user, error, navigate]);
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (email.value === "") {
      setEmail({ value: "", error: "Email is Required" });
    }
    if (password.value === "") {
      setPassword({ value: "", error: "Password is Required" });
    }
    if (email.value && password.value) {
      signInWithEmailAndPassword(email.value, password.value);
    }
  };
  return (
    <div className="h-[93vh] pt-44 signUp-container">
      <div className="border bg-slate-200 border-gray-600 mx-auto max-w-[650px] container py-14  px-8 rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold mb-8 text-red-600">
          Log In
        </h2>
        <form onSubmit={onFormSubmit}>
          <input
            onBlur={onEmailBlur}
            className="block border text-zinc-700 outline-none p-3 text-lg mt-5 w-full rounded"
            type="email"
            placeholder="Email"
          />
          {email.error && <p className="text-red-600">⚠️ {email.error}</p>}
          <input
            onBlur={onPasswordBlur}
            className="block border text-zinc-700 outline-none p-3 text-lg mt-5 w-full rounded"
            type="password"
            placeholder="Password"
          />
          {password.error && <p className="text-red-600">⚠️ {password.error}</p>}
          <div className="flex justify-between mt-8 items-center">
            <input
              className="bg-red-600 text-white py-2 w-1/3 text-lg rounded"
              type="submit"
              value="Log In"
            />
            <p className="text-lg">
              Don't have an Account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-red-600"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
