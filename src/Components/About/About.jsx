import React from "react";
import Riyad from "../../Assets/Image/riyad.png";

const About = () => {
  return (
    <div className="flex items-center justify-center text-center py-36">
      <div className=" container bg-slate-200 mx-auto flex flex-col lg:flex-row border border-slate-700 items-center p-8 rounded">
        <img
          className="w-[400px] h-[400px] object-cover rounded-full mx-auto"
          src={Riyad}
          alt=""
        />
        <div className="text-left">
          {" "}
          <h3 className="text-4xl font-bold mb-7">Riyad Hossain</h3>
          <p className="text-xl text-slate-600 font-[370]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id
            porro, animi ipsum alias in enim recusandae dolorum earum libero
            perferendis, maxime beatae impedit perspiciatis, placeat laboriosam
            tempore asperiores dignissimos? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Illo, accusamus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
