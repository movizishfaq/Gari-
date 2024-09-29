import axios from "axios";

export const loginuser = async (userdata) => {
  const response = await axios.post(
    "http://localhost:3001/api/users/login-user",
    userdata
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const signup = async (userdata) => {
  const response = await axios.post(
    "http://localhost:3001/api/users/register-User",
    userdata
  );
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
