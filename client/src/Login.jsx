import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signin, clearError } from "./features/auth/authSlice";
import { Toaster, toast } from "react-hot-toast";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userError, userMessage, userLoading, userSuccess } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showSlider, setShowSlider] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (userError && typeof userMessage === "string") {
      toast.error(userMessage);
      dispatch(clearError());
    }

    if (userSuccess) {
      toast.success("Login successful!");
      navigate("/home");
    }
  }, [userError, userMessage, userSuccess, dispatch, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Reset errors before validating
    setEmailError(false);
    setPasswordError(false);

    // Validate inputs
    if (!email) setEmailError(true);
    if (!password) setPasswordError(true);

    // Only submit the form if both fields are filled
    if (email && password) {
      const frontendData = {
        myemail: email,
        mypassword: password,
      };
      dispatch(signin(frontendData));
    }
  };

  const toggleSlider = () => {
    setShowSlider((prev) => !prev);
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen flex items-center justify-center bg-stone-950">
        <div className="bg-black p-6 py-8 rounded-lg shadow-lg w-full max-w-sm mt-20 z-50">
          <h2 className="text-white font-thin text-4xl mb-6 text-center">
            USER LOGIN
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2" htmlFor="email">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 ${
                  emailError ? "border-2 border-red-500" : "focus:ring-blue-500"
                }`}
                id="email"
                type="text"
                placeholder="Enter your email"
              />
              {emailError && (
                <p className="text-red-500 text-xs mt-1">Email is required</p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-3 py-2 text-gray-300 bg-gray-800 rounded focus:outline-none focus:ring-2 ${
                  passwordError
                    ? "border-2 border-red-500"
                    : "focus:ring-blue-500"
                }`}
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">
                  Password is required
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-gray-400">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Remember Me</span>
              </label>
              <a className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-48 mr-2 bg-black text-white py-2 rounded shadow-md hover:bg-gray-600 transition-all flex items-center justify-center"
              >
                {userLoading ? "LOADING....." : "Signin"}
              </button>
              <button
                type="button"
                onClick={toggleSlider}
                className="w-48 ml-2 bg-black text-white py-2 rounded shadow-md hover:bg-gray-600 transition-all"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      {showSlider && (
        <Signup showSlider={showSlider} toggleSlider={toggleSlider} />
      )}
    </>
  );
};

export default Login;
