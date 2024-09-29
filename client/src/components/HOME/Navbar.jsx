import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import Luxuarycars from "./Luxuarycars";
import Cartypes from "./Cartypes";
import Comments from "./Comments";
import Lastpart from "./Lastpart";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flexbox index min-h-screen items-center justify-center bg-stone-950">
        <div className="layout-container">
          <header>
            <div className="header-wrap">
              <div className="top-wrapper flex flex-wrap items-center justify-between p-3 ">
                <h1 className="text-3xl block text-gray-300">CAR RENTAL</h1>
                <div className="left-menu flex space-x-4 ml-[6%]">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => navigate("/CARSALE")}
                  >
                    ABOUT
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => navigate("/CARSALE")}
                  >
                    SERVICE
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => navigate("/CARSALE")}
                  >
                    CAR
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => navigate("/Login")}
                  >
                    BLOG
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    CONTACT
                  </a>
                </div>
                <button
                  type="button"
                  className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-blue-300 transition-all"
                >
                  <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                  Need Help
                </button>

                <div className="flex justify-center ">
                  <a href="/" className="inline-block">
                    <span></span>
                  </a>
                </div>
                <div className="right-menu flex space-x-4 items-center">
                  <button
                    type="button"
                    data-toggle="right-off-canvas-menu"
                    aria-expanded="false"
                    aria-controls="right-off-canvas-menu"
                    className="md:hidden px-3 py-2 border rounded text-gray-700 hover:text-black"
                  >
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
        <img
          className="absolute min-h-screen shadow-2xl filter brightness-75 contrast-125"
          src="https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/2021-09/audi_rs_7_front_1.jpg?itok=1S2Ph9Gr"
          alt=""
        />
        <h1 className="relative text-6xl font-bold text-black ml-24 mt-[15%]">
          RENTAL CAR
        </h1>
        <div className="flex items-center">
          <span className="mr-2">Proceed</span>
          <ArrowRightIcon className="relative pt-[1%] h-[5%] w-[5%] text-white " />
        </div>

        <button
          className="flex ml-64 mb-[15%] relative bg-transparent text-white border border-white rounded-full py-2 px-4 hover:bg-white hover:text-black transition-all"
          onClick={() => navigate("/CARSALE")}
        >
          <ArrowUpRightIcon className="mt-[3%] h-5 w-5" />
          BUY CARS
        </button>
      </div>

      <Luxuarycars />
      <Cartypes />
      <Comments />
      <Lastpart />
    </>
  );
};

export default Navbar;
