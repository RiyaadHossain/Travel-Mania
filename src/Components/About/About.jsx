import React from "react";
import Riyad from "../../Assets/Image/riyadPro.png";

const About = () => {
  return (
    <div className="flex items-center bg-slate-200 justify-center text-center py-36">
      <div className=" container mx-auto flex flex-co justify-center lg:flex-row border border-slate-700 bg-white items-center p-8 rounded">
        <img
          className="w-[400px] h-[400px] object-cover rounded-full mx-auto"
          src={Riyad}
          alt=""
        />
        <div className="text-left w-[70%]">
          {" "}
          <h3 className="text-4xl font-bold mb-1">Riyad Hossain</h3>
          <span className=" mb-7 text-red-500 font-[500] text-lg block">Font-end Developer</span>
          <p className="text-xl text-slate-800 font-[370]">
            Myself Riyad Hossain and I want to be a Full stack Web Application Developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
