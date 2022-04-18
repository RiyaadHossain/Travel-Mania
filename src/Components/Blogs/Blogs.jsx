import React from "react";
import Blog from "../../Assets/Image/travelBackground.jpg";

const Blogs = () => {
  /* 
    13.1 Difference between authorization and authentication

    13.2 Why are you using firebase? What other options do you have to implement authentication?

    13.3 What other services does firebase provide other than authentication?
 */

  return (
    <div className="pb-20 bg-slate-200 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 pt-16">
          <img
            className="max-w-[500px] mx-auto object-cover rounded border border-gray-400"
            src={Blog}
            alt=""
          />
          <div>
            <h2 className="font-bold text-3xl text-red-600 mb-6">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p className="text-[19px] text-slate-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              dolor veritatis adipisci vel animi recusandae, vero laudantium
              accusantium eius architecto numquam non similique, soluta fuga nam
              doloremque harum nisi illum aperiam rerum maxime, ipsa ea cumque
              assumenda! Magni eos omnis architecto facilis illo. Natus deleniti
              tempore possimus pariatur odit exercitationem?
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 pt-16">
          <img
            className="max-w-[500px] mx-auto object-cover rounded border border-gray-400"
            src={Blog}
            alt=""
          />
          <div>
            <h2 className="font-bold text-3xl text-red-600 mb-6">
              Difference between authorization and authentication
            </h2>
            <p className="text-[19px] text-slate-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              dolor veritatis adipisci vel animi recusandae, vero laudantium
              accusantium eius architecto numquam non similique, soluta fuga nam
              doloremque harum nisi illum aperiam rerum maxime, ipsa ea cumque
              assumenda! Magni eos omnis architecto facilis illo. Natus deleniti
              tempore possimus pariatur odit exercitationem?
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 pt-16">
          <img
            className="max-w-[500px] mx-auto object-cover rounded border border-gray-400"
            src={Blog}
            alt=""
          />
          <div>
            <h2 className="font-bold text-3xl text-red-600 mb-6">
              What other services does firebase provide other than
              authentication?
            </h2>
            <p className="text-[19px] text-slate-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              dolor veritatis adipisci vel animi recusandae, vero laudantium
              accusantium eius architecto numquam non similique, soluta fuga nam
              doloremque harum nisi illum aperiam rerum maxime, ipsa ea cumque
              assumenda! Magni eos omnis architecto facilis illo. Natus deleniti
              tempore possimus pariatur odit exercitationem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
