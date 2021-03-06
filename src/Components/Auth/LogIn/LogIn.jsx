import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase";
import Google from "../../../Assets/Icon/google.png";
import Github from "../../../Assets/Icon/github-black.png";
import Spinner from "../../Spinner/Spinner";

const LogIn = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [errorMsg, setMsgError] = useState()

  // Email and Password
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  // Google Sign Up
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  // Github Sign Up
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);

  // Reset Password
  const [sendPasswordResetEmail, loading] = useSendPasswordResetEmail(auth);

  const onEmailBlur = (e) => {
    const email = e.target.value;

    setEmail({ value: email, error: "" });
  };
  const onPasswordBlur = (e) => {
    const password = e.target.value;

    setPassword({ value: password, error: "" });
  };

  useEffect(() => {
    if (user || githubUser || googleUser) {
      navigate(from);
      toast.success("Logged In");
      setMsgError("")
    }
    if (loading) {
      return <Spinner/>
    }
    if (error) {
      if (error) {
        setMsgError("Email and Password didn't match")
        // toast.error("Email and Password didn't match", {id: 'test'});
      }
    }
  }, [user, githubUser, googleUser, error, loading, from, navigate]);

  // Form Submit Function
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
          {email.error && <p className="text-red-600">?????? {email.error}</p>}
          <input
            onBlur={onPasswordBlur}
            className="block border text-zinc-700 outline-none p-3 text-lg mt-5 w-full rounded"
            type="password"
            placeholder="Password"
          />
          {password.error && (
            <p className="text-red-600">?????? {password.error}</p>
          )}
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
        {errorMsg && <p className="text-red-600 mt-4">{errorMsg}</p>}
        <div className="text-right">
          {" "}
          <button
            onClick={async () => {
              if (email.value === "") {
                setEmail({
                  value: "",
                  error: "Please Enter Email to Reset Password",
                });
                setPassword({ value: "", error: "" });
              } else {
                toast.success("Email Sent");
                await sendPasswordResetEmail(email.value);
              }
            }}
            className="text-red-600 text-lg mt-2"
          >
            Reset Password
          </button>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="h-[1px] w-1/3 bg-red-600"></div>
          <div className="mx-4 font-semibold">
            <span>Or</span>
          </div>
          <div className="h-[1px] w-1/3 bg-red-600"></div>
        </div>
        <div className="flex  gap-7 mt-4">
          <button
            onClick={() => signInWithGoogle()}
            className="flex hover:bg-slate-500  items-center border border-gray-500 w-1/2 mx-auto px-2 py-1 rounded-full mt-3"
          >
            <img src={Google} className="w-10" alt="" />
            <span className="text-lg ml-3 font-semibold text-gray-800 hover:text-white">
              Continue with Google
            </span>
          </button>
          <button
            onClick={() => signInWithGithub()}
            className="flex hover:bg-slate-500  items-center border border-gray-500 w-1/2 mx-auto px-2 py-1 rounded-full mt-3"
          >
            <img src={Github} className="w-10" alt="" />
            <span className="text-lg ml-3 font-semibold text-gray-800 hover:text-white">
              Continue with Github
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
