import React from "react";

const Comments = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-600 text-center pt-[4%]">
        REVIEWS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[9%] mb-[10%]">
        <div className="bg-stone-950 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/2021-09/audi_rs_7_front_1.jpg?itok=1S2Ph9Gr "
            alt="..."
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl text-white font-semibold mb-2">
              Card title
            </h5>
            <p className="text-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="bg-stone-950  p-4">
            <small className=" text-white">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="bg-stone-950 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/2021-09/audi_rs_7_front_1.jpg?itok=1S2Ph9Gr "
            alt="..."
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl text-white font-semibold mb-2">
              Card title
            </h5>
            <p className="text-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="bg-stone-950  p-4">
            <small className=" text-white">Last updated 3 mins ago</small>
          </div>
        </div>
        <div className="bg-stone-950 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://www.mansory.com/sites/default/files/styles/1920x800_fullwidth_car_slider/public/2021-09/audi_rs_7_front_1.jpg?itok=1S2Ph9Gr "
            alt="..."
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h5 className="text-xl text-white font-semibold mb-2">
              Card title
            </h5>
            <p className="text-white">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div className="bg-stone-950  p-4">
            <small className=" text-white">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
