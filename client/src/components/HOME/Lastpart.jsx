import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

const Lastpart = () => {
  return (
    <>
      <div className="h-97 w-full bg-black">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2 ml-[1%]">
            <PhoneIcon className="w-6 h-6 text-white" />
            <span className="text-lg font-medium text-white">HELP</span>
          </div>
          <div className="flex items-center space-x-2 text-white">
            <ChatBubbleLeftIcon className="w-6 h-6 text-white" />
            <span className="text-lg font-medium">Contact Us</span>
          </div>
        </div>
        <h1 className="text-3xl text-white ml-[18%] pt-4">CAR RENTAL</h1>

        <p className="text-white mt-1 ml-[18%] pt-2">
          BUY YOUR DREAM CAR AT THE BEST PRICES.
        </p>
        <p className="text-white mt-1 ml-[18%]">
          SELL YOUR CAR QUICKLY AND EASILY WITH US!
        </p>
        <div className="flex space-x-4 p-4 ml-[18%]">
          <a
            href="https://facebook.com"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-gray-600 hover:text-gray-300 transition"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-gray-600 hover:text-gray-300 transition"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://tiktok.com"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-white text-white hover:bg-gray-600 hover:text-gray-300 transition"
          >
            <FaTiktok size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Lastpart;
