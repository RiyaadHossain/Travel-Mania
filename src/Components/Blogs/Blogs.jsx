import React from "react";
import Blog1 from "../../Assets/Image/key.jpg";
import Blog2 from "../../Assets/Image/googleAuth.jpg";
import Blog3 from "../../Assets/Image/firebaseAuthMobile.jpg";

const Blogs = () => {
  return (
    <div className="pb-20 bg-slate-200 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 pt-16">
          <img
            className="max-w-[500px]  object-cover rounded border border-gray-400"
            src={Blog1}
            alt=""
          />
          <div>
            <h2 className="font-bold text-3xl text-red-600 mb-4 mt-3">
              Difference between authorization and authentication
            </h2>
            <p className="text-[19px] text-slate-700">
              The major difference between authorization and authentication is
              Authorization verifies user identity whereas Authentication
              determines the resources' access level of a user.
              <br />
              <br />
              Usually, authentication works through password, one-time pin, bio
              info and so on. On the other hand, authorization works by settings
              that are implemented by the application's owner. The first step of
              identity is Authentication while Authorization comes after
              authentication. Authentication information is visible and slightly
              mutable by the user. However, Authorization settings are invisible
              and immutable by the user. Authentication checks whether the
              person is a user or not. On the contrary, Authorization specifies
              user privilege or security level.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 pt-24">
          <img
            className="max-w-[500px] object-cover rounded border border-gray-400"
            src={Blog2}
            alt=""
          />
          <div>
            <h2 className="font-bold text-3xl text-red-600 mb-4 mt-3">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p className="text-[19px] text-slate-700">
              The fundamental usage of firebase is for authentication of the
              user. Generally, I use Firebase to firmly authenticate user data
              and to secure the user data in the database.
              <br />
              <br />
              Also, by using Firebase, I personalize the user experience across
              all the users based on their interests and preference. Firebase
              allows users to sign in using Email-password and other popular
              authentication providers such as Google, Facebook, Github,
              Microsoft, Apple and so on.
            </p>
            <h3 className="text-2xl font-semibold mt-6 mb-3">Alternatives of Firebase -</h3>
            <p className="text-lg text-slate-600 mb-2">
              <span className="font-semibold text-slate-900 mr-2  text-xl">Parse:</span> A complete open-source application stack and
              backend framework
            </p>
            <p className="text-lg text-slate-600 mb-2">
              <span className="font-semibold text-slate-900 mr-2  text-xl">Back4App:</span> An open source, low code, backend
              alternative to Firebase
            </p>
            <p className="text-lg text-slate-600 mb-2">
              <span className="font-semibold text-slate-900 mr-2  text-xl">AWS Amplify:</span> A cloud platform by Amazon that provides a
              set of tools and services
            </p>
            <p className="text-lg text-slate-600 mb-2">
              <span className="font-semibold text-slate-900 mr-2  text-xl">Kuzzle:</span>  An open source which serves single
              sign-on, collaboration, messaging, secondary screens
            </p>
            <p className="text-lg text-slate-600 mb-2">
              <span className="font-semibold text-slate-900 mr-2  text-xl">Couchbase:</span> An open source, NoSQL document-oriented
              engagement database
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 pt-24">
          <img
            className="max-w-[500px]  object-cover rounded border border-gray-400"
            src={Blog3}
            alt=""
          />
          <div>
            <h2 className="font-bold text-3xl text-red-600 mb-4 mt-3">
              What other services does firebase provide other than
              authentication?
            </h2>
            <div className="text-[19px] text-slate-700">
              <p className="mb-3">Firebase is a complete package that can assist in building mobile web application faster with ease and in most efficiant way. Here are some services that Firebase Provides except Authentication:</p>
              
             <p className="text-slate-900 font-semibold">➡️ Cloud Firestor</p>
             <p className="text-slate-900 font-semibold">➡️ Cloud Function</p>
             <p className="text-slate-900 font-semibold">➡️ Hostin</p>
             <p className="text-slate-900 font-semibold">➡️ Cloud Storag</p>
             <p className="text-slate-900 font-semibold">➡️ Google Analytic</p>
             <p className="text-slate-900 font-semibold">➡️ Prediction</p>
             <p className="text-slate-900 font-semibold">➡️ Cloud Messagin</p>
             <p className="text-slate-900 font-semibold">➡️ Dynamic Link</p>
             <p className="text-slate-900 font-semibold">➡️ Remote Config</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
