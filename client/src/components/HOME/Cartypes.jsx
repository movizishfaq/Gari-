import React from "react";

const Cartypes = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-600 text-center pb-8">
        RENTAL CAR TYPES
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        <div className="relative w-80 h-80 rounded-xl overflow-hidden">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/2022-ferrari-daytona-sp3-102-1659298018.jpg?crop=0.699xw:0.589xh;0.151xw,0.284xh&resize=700:*"
            alt="Luxury car"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-semibold">
            Convertible
          </div>
          <button className="absolute bottom-4 left-4 p-2 bg-black bg-opacity-60 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="relative w-80 h-80 rounded-xl overflow-hidden">
          <img
            src="https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/2021-09/audi_rs_7_front_1.jpg?itok=1S2Ph9Gr"
            alt="Luxury car"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-semibold">
            Convertible
          </div>
          <button className="absolute bottom-4 left-4 p-2 bg-black bg-opacity-60 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="relative w-80 h-80 rounded-xl overflow-hidden">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/ferrari-1669909439.jpeg?crop=0.821xw:0.730xh;0.0945xw,0.171xh&resize=800:*"
            alt="Luxury car"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 text-white text-lg font-semibold">
            Convertible
          </div>
          <button className="absolute bottom-4 left-4 p-2 bg-black bg-opacity-60 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
          <div class="border-t-2 border-blue-500 my-6"></div>
        </div>
      </div>

      <div className="border-l border-blue-300 h-32 mt-20 mx-auto ml-[50%]"></div>
    </>
  );
};

export default Cartypes;
