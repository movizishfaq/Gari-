// Card.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../../features/cars/carSlice"; // Adjust the path as necessary

const Card = ({ showSlider, toggleSlider }) => {
  const [formField, setFormField] = useState({
    name: "",
    image: null,
    model: "",
    brand: "",
    registered: "",
    mileage: "",
    fuelaverage: "",
    color: "#000000",
    price: "",
    cc: "",
    description: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    image: false,
    model: false,
    brand: false,
    registered: false,
    mileage: false,
    fuelaverage: false,
    color: false,
    price: false,
    cc: false,
    description: false,
  });

  const { userLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormField((prevValue) => ({
        ...prevValue,
        image: files[0],
      }));
    } else {
      setFormField((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Destructure the formField for easy access
    const {
      name,
      image,
      model,
      brand,
      registered,
      mileage,
      fuelaverage,
      color,
      price,
      cc,
      description,
    } = formField;

    // Validate fields
    const errors = {
      name: !name,
      image: !image,
      model: !model,
      brand: !brand,
      registered: !registered,
      mileage: !mileage,
      fuelaverage: !fuelaverage,
      color: !color,
      price: !price,
      cc: !cc,
      description: !description,
    };

    setFieldErrors(errors);

    // Check for any errors before proceeding
    if (Object.values(errors).some((error) => error)) {
      console.error("Form contains errors", errors);
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append("Name", name); // Adjust the key based on your backend requirements
    formData.append("image", image);
    formData.append("model", model);
    formData.append("brand", brand);
    formData.append("registered", registered);
    formData.append("mileage", mileage);
    formData.append("fuelaverage", fuelaverage);
    formData.append("color", color);
    formData.append("price", price);
    formData.append("cc", cc);
    formData.append("description", description);

    try {
      await dispatch(addCar(formData)).unwrap(); // Use unwrap for better error handling
      console.log("Car added successfully");
      toggleSlider(); // Close the slider after successful addition
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <>
      {showSlider && (
        <div className="fixed inset-0 z-50 backdrop-blur-lg"></div>
      )}
      <div
        className={`z-[555] fixed left-1/2 -translate-x-1/2 w-[55%] h-[80%] text-white transition-transform duration-500 ${
          showSlider ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ top: showSlider ? "10%" : "100%" }}
      >
        <div className="p-3 backdrop-blur-sm">
          <form onSubmit={handleSignup}>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl mb-4 text-center text-black">
                  ADD CAR
                </h1>
                <div className="space-y-4">
                  {/* Form Fields */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Car Name"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.name ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.image ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="model"
                    placeholder="Model"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.model ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.brand ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="registered"
                    placeholder="Registered Year"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.registered ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="mileage"
                    placeholder="Mileage (in km)"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.mileage ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="fuelaverage"
                    placeholder="Fuel Average"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.fuelaverage ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="color"
                    name="color"
                    onChange={handleChange}
                    value={formField.color}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.color ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.price ? "border-red-500" : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="cc"
                    placeholder="CC"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.cc ? "border-red-500" : ""
                    }`}
                  />
                  <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    className={`border border-gray-300 rounded-md p-2 w-full ${
                      fieldErrors.description ? "border-red-500" : ""
                    }`}
                  />

                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="w-48 bg-black text-white py-2 rounded shadow-md hover:bg-stone-900 transition-all"
                    >
                      {userLoading ? "LOADING....." : "Add Car"}
                    </button>
                  </div>
                  <div className="flex items-center justify-center mt-4">
                    <button
                      type="button"
                      onClick={toggleSlider}
                      className="w-48 bg-black text-white py-2 rounded shadow-md hover:bg-stone-900 transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
