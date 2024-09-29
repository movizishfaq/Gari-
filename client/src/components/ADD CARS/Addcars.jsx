import React, { useEffect, useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addCarData } from "../../features/cars/carSlice";
import { carReset } from "../../features/cars/carSlice";

const Addcars = () => {
  const dispatch = useDispatch();
  const { carLoading, carSuccess } = useSelector((state) => state.cars);
  const { user } = useSelector((state) => state.auth);

  const [formFields, setFormFields] = useState({
    brand: "",
    model: "",
    registered: "",
    mileage: "",
    fuel_average: "",
    color: "",
    price: "",
    cc: "",
    description: "",
  });

  const {
    brand,
    model,
    registered,
    mileage,
    fuel_average,
    color,
    price,
    cc,
    description,
  } = formFields;

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    if (carSuccess) {
      toast.success("Uploaded Successfully!");
      setFormFields({
        brand: "",
        model: "",
        registered: "",
        mileage: "",
        fuel_average: "",
        color: "",
        price: "",
        cc: "",
        description: "",
      });
      setImage(null);
      setImagePreview(null);
    }
    dispatch(carReset());
  }, [carSuccess, dispatch]);

  const handleChange = (e) => {
    setFormFields((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
    setImage(file);
  };

  const handleImageUpload = async () => {
    let data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ls8frk5v");
    try {
      setImageLoading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwtsjgcyf/image/upload",
        data
      );
      setImageLoading(false);
      return response.data.url;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imageUrl = await handleImageUpload(image);
    const frontendData = {
      user_id: user?._id,
      brand,
      model,
      registered,
      mileage,
      fuel_average,
      color,
      price,
      cc,
      description,
      image: imageUrl,
    };

    dispatch(addCarData(frontendData));
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-stone-950">
        <div className="bg-black p-6 py-8 rounded-lg shadow-lg w-full max-w-lg mt-20 z-50">
          <h2 className="text-white font-thin text-4xl mb-6 text-center">
            ADD CAR
          </h2>
          <form onSubmit={handleClick}>
            {/* Brand Field */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="brand">
                Brand
              </label>
              <input
                required
                name="brand"
                id="brand"
                value={brand}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter car brand"
              />
            </div>

            {/* Model Field */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="model">
                Model Year
              </label>
              <input
                required
                type="number"
                name="model"
                id="model"
                value={model}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter car model year"
              />
            </div>

            {/* Registered Field */}
            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="registered"
              >
                Registered
              </label>
              <input
                required
                type="text"
                name="registered"
                id="registered"
                value={registered}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter registration status"
              />
            </div>

            {/* Mileage Field */}
            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="mileage"
              >
                Mileage
              </label>
              <input
                required
                type="number"
                name="mileage"
                id="mileage"
                value={mileage}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter car mileage"
              />
            </div>

            {/* Fuel Average Field */}
            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="fuel_average"
              >
                Fuel Average
              </label>
              <input
                required
                type="number"
                name="fuel_average"
                id="fuel_average"
                value={fuel_average}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter fuel average"
              />
            </div>

            {/* Color Field */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="color">
                Color
              </label>
              <input
                required
                type="text"
                name="color"
                id="color"
                value={color}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter car color"
              />
            </div>

            {/* Price Field */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="price">
                Price
              </label>
              <input
                required
                type="number"
                name="price"
                id="price"
                value={price}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter car price"
              />
            </div>

            {/* CC Field */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="cc">
                CC
              </label>
              <input
                required
                type="number"
                name="cc"
                id="cc"
                value={cc}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter engine capacity (CC)"
              />
            </div>

            {/* Description Field */}
            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                required
                name="description"
                id="description"
                value={description}
                onChange={handleChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter car description"
              />
            </div>

            {/* Image File Selection Field */}
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="image">
                Upload Car Image
              </label>
              <input
                required
                type="file"
                name="image"
                id="image"
                onChange={handleImageChange}
                className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept="image/*"
              />
              {imagePreview && (
                <div className="mt-4">
                  <p className="text-white text-sm">Image Preview:</p>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-2 h-40 w-auto"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                carLoading || imageLoading
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={carLoading || imageLoading}
            >
              {imageLoading ? (
                <RotatingLines width="20" strokeColor="white" />
              ) : (
                "Add Car"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addcars;
