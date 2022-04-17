import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="flex justify-center items-center py-8 bg-neutral-900 text-white ">
      <div className="">
        <div className="flex justify-center mb-8 text-center">
          <p className="text-2xl mr-5 ">
            <BsFacebook />
          </p>
          <p className="text-2xl mr-5 ">
            <BsGithub />
          </p>
          <p className="text-2xl mr-5 ">
            <BsTwitter />
          </p>
        </div>
        <div className="my-2 text-center"> 
          <span>Info . </span>
          <span>Support . </span>
          <span>Marketing</span>
        </div>
        <div className="mb-2 text-center">
          <span>Terms of Use . </span>
          <span>Privacy Policy</span>
        </div>
        <p className="text-slate-500 text-center">
          &copy; {date.getFullYear()} Clarity Money
        </p>
      </div>
    </footer>
  );
};

export default Footer;
