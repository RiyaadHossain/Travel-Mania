import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import auth from "../../../Firebase/Firebase";
import "./Nabvar.css";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth).then(() => {
        toast.success("Signed Out")
    }).catch((error) => {
        toast.error("An Error Occurred")
    });
  };

  return (
    <div className="container mx-auto flex justify-between items-center h-16">
      <div>
        <h1 className="text-2xl font-bold">Travelmania</h1>
      </div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/blogs"
        >
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/about"
        >
          About
        </NavLink>
        {user ? (
          <button onClick={logOut} className="button">
            Log Out
          </button>
        ) : (
          <NavLink className="button" to="/login">
            Log In
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
