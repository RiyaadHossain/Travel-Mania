import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container text-center h-[93.2vh] flex items-center text-white justify-center">
      <div>
        <h1 className="text-6xl font-bold max-w-[800px] mwi mx-auto">
          Life is short and the world is wide!
        </h1>
        <p className="text-xl my-7 font-thin text-slate-300 max-w-[600px] mx-auto">
        Travelmania allows you to make out fantastic travel journeys to make unforgetable memories. We offer three different categories of your travel destination. We teach you techniques that might be essential in accident cases.
        </p>
        <div className="flex justify-center">
          <button className="facy-button1">
            <span>Explore</span>
            <div class="liquid"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
