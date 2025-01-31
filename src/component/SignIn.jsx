import React from "react";
import img from "../assets/gym.jpg";
import { GoArrowLeft } from "react-icons/go";
import { FaScissors } from "react-icons/fa6";

const SignIn = () => {
  return (
    <>
      <div className="grid grid-cols-12 ">
        {/* //first part(image part) */}
        <div className="relative flex col-span-4">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/b9a28a201304995.Y3JvcCwyNTAwLDE5NTUsMCw2.png"
            alt=""
            className="h-screen object-cover bg-black"
          />
          <div className="absolute left-8 top-8 text-white text-xl font-bold tracking-wider flex items-center">
            <FaScissors className="text-red-700 text-2xl" />
            <span className="ml-2">SALON-X</span>
          </div>
        </div>
        {/* second part (form part)*/}
        <div className="flex border justify-center items-center col-span-8 relative">
          <div className=" absolute top-6 left-5">
            <button className="bg-slate-200 p-2 rounded-full hover:text-xl">
              <GoArrowLeft />
            </button>
          </div>
          <form>
            <div>
              <div className="flex justify-center items-center h-full ">
                <span className="bg-black rounded-full p-2 mb-2">
                  <FaScissors className="text-red-700" />
                </span>
              </div>

              <h1 className="text-black text-center font-bold text-2xl mb-2">
                Welcome back!
              </h1>
              <p className="text-center text-black text-sm mb-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <input
                type="text"
                name="name"
                placeholder="Email address"
                className="mb-6 w-full bg-gray-100 bg-opacity-50 rounded-xl border border-gray-300 focus:border-indigo-500 focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <input
                type="text"
                name="name"
                placeholder="Password"
                className="w-full bg-gray-100 bg-opacity-50 rounded-xl border border-gray-300 focus:border-indigo-500 focus:bg-white  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {/* remender and forget password part  */}
              <div className="flex justify-between mt-3">
                <div className="">
                  <input type="checkbox" name="" id="RememberId" />
                  <label htmlFor="RememberId" className="ml-2">
                    Remember Me
                  </label>
                </div>
                <div className="">
                  <p className="text-end hover:underline text-blue-700">
                    Forget password?
                  </p>
                </div>
              </div>
              <button className="bg-orange-500 w-full rounded-xl mt-7 p-2 text-white text-center hover:bg-orange-700">
                SIGN IN
              </button>
            </div>
            <p className="text-center mt-4">
              Don't have an account?
              <span className="text-blue-700 hover:underline"> Sign in</span>
            </p>
          </form>
          {/* footer part  */}
          <footer className="w-full text-center py-4 text-gray-600 text-sm border-t  absolute bottom-0 left-0">
            <div className="flex justify-around mt-3">
              <p className="text-black">
                By processing you agree to the terms and conditions and privacy
                ploice
              </p>
              <div className="">
                <span className="text-end hover:underline text-blue-700">
                  Help
                </span>
                <span className=" ml-2 text-end hover:underline text-blue-700">
                  privacy
                </span>
                <span className="ml-2 text-end hover:underline text-blue-700">
                  Terms
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SignIn;
