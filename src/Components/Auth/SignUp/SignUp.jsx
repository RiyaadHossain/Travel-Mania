import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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
    if (/(?=.*\d)/.test(password)) {
      setPassword({ value: password, error: "" });
    } else {
      setPassword({ value: "", error: "Password must contain digit" });
    }
  };
  const onConfirmPasswordBlur = (e) => {
    const password = e.target.value;
    if (/(?=.*\d)/.test(password)) {
      setConfirmPassword({ value: password, error: "" });
    } else {
      setConfirmPassword({ value: "", error: "Password didn't match" });
    }
  };
  useEffect(() => {
    if (user) {
      navigate('/')
      toast.success("Account Created")
    }
    if (error) {
      toast.error("An Error Occurred")
    }
  }, [user, error, navigate])
  const onFormSubmit = e => {
    e.preventDefault()
    if (email.value === '') {
      setEmail({ value: '', error: "Email is Required" })
    }
    if (password.value === '') {
      setPassword({value: '', error: 'Password is Required'})
    }
    if (confirmPassword.value === '') {
      setPassword({value: '', error: 'Confirm Password is Required'})
    }
    if (email.value && password.value === confirmPassword.value) {
      createUserWithEmailAndPassword(email.value, password.value)
    }
  }
  return (
    <div className="h-[93vh] pt-40 signUp-container">
      <div className="border bg-slate-200 border-gray-600 mx-auto max-w-[650px] container py-14 mt px-8 rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold mb-8 text-red-600">
          Sign Up
        </h2>
        <form onSubmit={onFormSubmit}>
          <input
            className="block border text-zinc-700 outline-none p-3 text-lg mt-5 w-full rounded"
            type="text"
            placeholder="Name"
          />
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

          <input
            onBlur={onConfirmPasswordBlur}
            className="block border text-zinc-700 outline-none p-3 text-lg mt-5 w-full rounded"
            type="password"
            placeholder="Confirm Password"
            />
            {confirmPassword.error && <p className="text-red-600">⚠️ {confirmPassword.error}</p>}
          <div className="flex justify-between items-center mt-8">
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
