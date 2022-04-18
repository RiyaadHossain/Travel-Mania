import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase";
import { useCreateUserWithEmailAndPassword,  useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import Google from "../../../Assets/Icon/google.png"
import Github from "../../../Assets/Icon/github-black.png"

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    error: "",
  });

  // Email and Password
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

  // Google Sign Up
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  // Github Sign Up
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);



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
    const confirmPassword = e.target.value;
    if (password.value === confirmPassword) {
      setConfirmPassword({ value: confirmPassword, error: "" });
    } else {
      setConfirmPassword({ value: "", error: "Password didn't match" });
    }
  };
  useEffect(() => {
    if (user || githubUser || googleUser) {
      navigate('/')
      toast.success("Varification Mail Sent")
    }
    if (error) {
      // toast.error("An Error Occurred")
    }
  }, [user, githubUser, googleUser, error, navigate ])

  // Function: Form Submit 
  const onFormSubmit = async e => {
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
      await createUserWithEmailAndPassword(email.value, password.value)
      
    }
  }


  return (
    <div className="h-[93vh] pt-32 signUp-container">
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
        <div className="flex items-center justify-center mt-8">
          <div className="h-[1px] w-1/3 bg-red-600"></div>
          <div className="mx-4 font-semibold"><span>Or</span></div>
          <div className="h-[1px] w-1/3 bg-red-600"></div>
        </div>
        <div className="flex  gap-7 mt-4">
        <button onClick={() => signInWithGoogle()} className="flex hover:bg-slate-500  items-center border border-gray-500 w-1/2 mx-auto px-2 py-1 rounded-full mt-3"><img src={Google} className="w-10" alt="" /><span className="text-lg ml-3 font-semibold text-gray-800 hover:text-white">Continue with Google</span></button>
        <button onClick={() => signInWithGithub()} className="flex hover:bg-slate-500  items-center border border-gray-500 w-1/2 mx-auto px-2 py-1 rounded-full mt-3"><img src={Github} className="w-10" alt="" /><span className="text-lg ml-3 font-semibold text-gray-800 hover:text-white">Continue with Github</span></button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
