import React, { useState } from "react"; // Import useState
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
// import Signup from "./Signup";
import { useSelector } from "react-redux";
import Card from "./Card";
import Lastpart from "../HOME/Lastpart";

const Nav = () => {
  const [showSlider, setShowSlider] = useState(false);

  const { user } = useSelector((state) => state.auth);
  const toggleSlider = () => {
    setShowSlider((prev) => !prev);
  };

  return (
    <>
      <div className="relative flexbox index min-h-screen items-center justify-center bg-stone-950">
        <div class="layout-container">
          <header>
            <div class="header-wrap">
              <div class="top-wrapper flex flex-wrap items-center justify-between p-3 ">
                <h1 className="text-3xl block text-gray-300">CAR RENTAL</h1>
                <div class="left-menu flex space-x-4 ml-[6%]">
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    ABOUT
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    SERVICE
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    CAR
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    BLOG
                  </a>
                  <a
                    href="#"
                    class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    CONTACT
                  </a>
                </div>

                <button
                  type="button"
                  className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-black focus:outline-none focus:ring-blue-300 transition-all "
                >
                  <QuestionMarkCircleIcon className="h-5 w-5 mr-2" />
                  Need Help
                </button>

                <div class=" flex justify-center ">
                  <a href="/" class="inline-block">
                    <span></span>
                  </a>
                </div>
                <div class="right-menu flex space-x-4 items-center">
                  <button
                    type="button"
                    data-toggle="right-off-canvas-menu"
                    aria-expanded="false"
                    aria-controls="right-off-canvas-menu"
                    class="md:hidden px-3 py-2 border rounded text-gray-700 hover:text-black"
                  >
                    Menu
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
        <img
          className="absolute h-[75%] w-full shadow-2xl filter brightness-75 contrast-125"
          src="https://www.audiusa.com/content/dam/nemo/us/Homepage/1920x1920/MY24---e-tron-GT---Front---Parked-1920x600.jpg?width=1439"
          alt=""
        />
        <h1 className="relative text-6xl font-bold text-black ml-24 mt-[15%]">
          RENTAL CAR
        </h1>
      </div>

      {/* SELECT CARS */}
      <div className="border-l border-blue-300 h-32 mt-2 mx-auto ml-[50%]"></div>
      <h1 className="relative text-6xl font-bold text-white ml-[36%] pt-10">
        SELECT CAR
      </h1>
      <div className="bg-gray-900 p-6 mt-[3%] ">
        <div className="flex items-center justify-between mb-4">
          <button className="bg-black text-white px-4 py-2 rounded-md">
            All Cars
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300">
            Used Car
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-md border border-gray-300">
            New Cars
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded-md p-2">
            <option>Select make</option>
            {/* Add options here */}
          </select>

          <select className="border border-gray-300 rounded-md p-2">
            <option>Select Model</option>
            {/* Add options here */}
          </select>

          <div className="flex items-center">
            <span className="mr-2">Price:</span>
            <input type="range" min="0" max="5800" className="slider" />
            <div className="flex space-x-2">
              <span>$0</span>
              <span>$5800</span>
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter a location"
            className="border border-gray-300 rounded-md p-2"
          />

          <button className="bg-red-600 text-white px-4 py-2 rounded-md">
            <span>Q 2351 CARS</span>
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap justify-center">
        <div class=" mt-10 group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src=""
              class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
            />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">
              CIVIC
            </h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl">
              THE BEST CAR
            </h1>
          </div>
        </div>

        <div class="relative mt-10 group m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
            <img
              src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
              alt=""
              onClick={toggleSlider}
            />
          </div>
        </div>
      </div>

      <Lastpart />
      {showSlider && (
        <Card showSlider={showSlider} toggleSlider={toggleSlider} />
      )}
    </>
  );
};

export default Nav;
