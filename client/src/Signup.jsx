import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { registeruser } from "./features/auth/authSlice";

const Signup = ({ showSlider, toggleSlider }) => {
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [formField, setFormField] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    Password: "",
    ConfirmedPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    Firstname: false,
    Lastname: false,
    email: false,
    Password: false,
    ConfirmedPassword: false,
  });

  const { userLoading } = useSelector((state) => state.auth);
  const { Firstname, Lastname, email, Password, ConfirmedPassword } = formField;

  // Function to handle gender change
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleChange = (e) => {
    setFormField((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const handlesignup = (e) => {
    e.preventDefault();
    const frontendData = {
      myFirstname: Firstname,
      myLastname: Lastname,
      myemail: email,
      myphone: phone,
      mypassword: Password,
      myconfirmpassword: ConfirmedPassword,
      mygender: gender,
    };

    // Check for empty fields
    const errors = {
      Firstname: !Firstname,
      Lastname: !Lastname,
      email: !email,
      Password: !Password,
      ConfirmedPassword: !ConfirmedPassword,
    };

    setFieldErrors(errors);

    // If there are no errors, dispatch the signup action
    if (!Object.values(errors).includes(true)) {
      dispatch(registeruser(frontendData));
    }
  };

  return (
    <>
      <div
        className={`z-[555] fixed left-1/2 backdrop-blur -translate-x-1/2 w-[55%] h-[80%] bg-blac text-white transition-transform duration-500 ${
          showSlider ? "translate-y-0" : "translate-y-full "
        }`}
        style={{
          top: showSlider ? "10%" : "100%",
        }}
      >
        <div className="p-3 backdrop-blur-sm ">
          <form onSubmit={handlesignup}>
            <div className="space-y- max-h-[600px] overflow-y-auto">
              <div className="overflow-y-auto mb-56 pt-48 pb-36 h-screen flex  items-center justify-center bg-cover  bg-opacity-80">
                <div className=" bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
                  <h1 className="text-3xl mb-4 text-center text-black ">
                    Sign Up
                  </h1>
                  <div className="space-y-4">
                    <div className="flex space-x-4">
                      <div className="w-1/2">
                        <label className="block text-black">First Name</label>
                        <input
                          name="Firstname"
                          value={Firstname}
                          onChange={handleChange}
                          type="text"
                          className={`w-full p-3 border rounded-lg bg-black bg-opacity-50 focus:outline-none ${
                            fieldErrors.Firstname
                              ? "border-red-500"
                              : "focus:border-blue-500"
                          }`}
                          placeholder="First Name..."
                        />
                      </div>
                      <div className="w-1/2">
                        <label className="block text-black">Last Name</label>
                        <input
                          name="Lastname"
                          value={Lastname}
                          onChange={handleChange}
                          type="text"
                          className={`w-full p-3 border rounded-lg bg-black bg-opacity-50 focus:outline-none ${
                            fieldErrors.Lastname
                              ? "border-red-500"
                              : "focus:border-blue-500"
                          }`}
                          placeholder="Last Name..."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-black ">Email</label>
                      <input
                        name="email"
                        value={email}
                        onChange={handleChange}
                        type="text"
                        className={`w-full p-3 border rounded-lg bg-black bg-opacity-50 focus:outline-none ${
                          fieldErrors.email
                            ? "border-red-500"
                            : "focus:border-blue-500"
                        }`}
                        placeholder="Enter Email..."
                      />
                    </div>
                    <div>
                      <label className="block text-black">Phone Number</label>
                      <PhoneInput
                        country={"us"}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                          className:
                            "w-full p-3 border rounded-lg bg-black bg-opacity-50 focus:outline-none",
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-black">Password</label>
                      <input
                        name="Password"
                        value={Password}
                        onChange={handleChange}
                        type="password"
                        className={`w-full p-3 border rounded-lg bg-black bg-opacity-50 focus:outline-none ${
                          fieldErrors.Password
                            ? "border-red-500"
                            : "focus:border-blue-500"
                        }`}
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <label className="block text-black">
                        Confirmed Password
                      </label>
                      <input
                        name="ConfirmedPassword"
                        value={ConfirmedPassword}
                        onChange={handleChange}
                        type="password"
                        className={`w-full p-3 border rounded-lg bg-black bg-opacity-50 focus:outline-none ${
                          fieldErrors.ConfirmedPassword
                            ? "border-red-500"
                            : "focus:border-blue-500"
                        }`}
                        placeholder="Password"
                      />
                    </div>

                    <div className="flex w-72 flex-col gap-6">
                      {/* Gender selection */}
                      <label className="text-sm text-black">
                        Select Gender
                      </label>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center ">
                          <input
                            type="radio"
                            value="Male"
                            checked={gender === "Male"}
                            onChange={handleGenderChange}
                            className="form-radio h-4 w-4 text-black border-gray-300 focus:ring-black"
                          />
                          <span className="text-black hover:underline ">
                            Male
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="Female"
                            checked={gender === "Female"}
                            onChange={handleGenderChange}
                            className="form-radio h-4 w-4 text-black border-gray-300 focus:ring-black"
                          />
                          <span className="text-black hover:underline ">
                            Female
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="Other"
                            checked={gender === "Other"}
                            onChange={handleGenderChange}
                            className="form-radio h-4 w-4 text-black border-gray-300 focus:ring-black"
                          />
                          <span className="text-black hover:underline ">
                            Other
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="submit"
                        className="w-48 mr-2 bg-black text-white py-2 rounded shadow-md hover:bg-stone-900 transition-all"
                      >
                        {userLoading ? "LOADING....." : "Sign up"}
                      </button>

                      <div className="flex flex-col items-center justify-center">
                        <span className="flex items-center justify-center rounded-full bg-gray-700 w-12 h-12 text-gray-400">
                          OR
                        </span>
                      </div>

                      <button
                        onClick={toggleSlider}
                        className="w-48 ml-2 bg-black text-white py-2 rounded shadow-md hover:bg-stone-900 transition-all"
                      >
                        Close
                      </button>
                    </div>
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

export default Signup;
