import React from "react";
import Riyad from "../../Assets/Image/riyadPro.png";

const About = () => {
  return (
    <div className="flex items-center bg-slate-200 justify-center text-center py-36">
      <div className=" container mx-auto flex flex-col justify-center lg:flex-row border border-slate-700 bg-white items-center p-8 rounded">
        <img
          className="w-[400px] h-[400px] object-cover rounded-full mx-auto"
          src={Riyad}
          alt=""
        />
        <div className="text-left lg:w-[70%]">
          {" "}
          <h3 className="text-4xl font-bold mb-1">Riyad Hossain</h3>
          <span className=" mb-7 text-red-500 font-[500] text-lg block">
            Font-end Developer
          </span>
          <p className="text-xl text-slate-800 font-[370]">
            I am Riyad Hossain and I want to be a Full-stack Web Application
            Developer. To achieve my goal of being a Web Application Developer,
            I work approximately 8-9 hours regularly.
            <br />
            <br />I possess certain soft skills such as firm determination, deep
            focus, persistency, hard work, and consistency to succeed in my
            career. These skills help me a lot to avoid failure whenever I start
            building any project. Moreover, I don't give up even if I get any
            errors while coding. Rather, I read the error message and try to
            carefully fix the error by observing my code. Also, I search on
            Google whenever I can't resolve my code bug on my own. This is how I
            work to accomplish my goal. 🙂
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
