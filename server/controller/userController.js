const usermodel = require("../models/usermodel");
const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Register user function
const registerUser = expressAsyncHandler(async (req, res) => {
  console.log("Incoming request body:", req.body);
  const {
    myFirstname,
    myLastname,
    myemail,
    myphone,
    mypassword,
    myconfirmpassword,
    mygender,
  } = req.body;

  // Check for missing fields
  if (
    !myFirstname ||
    !myLastname ||
    !myemail ||
    !myphone ||
    !mypassword ||
    !myconfirmpassword ||
    !mygender
  ) {
    res.status(400);
    throw new Error("PLEASE ENTER ALL THE FIELDS");
  }

  // Check if passwords match
  if (mypassword !== myconfirmpassword) {
    res.status(400);
    throw new Error("PLEASE ENTER A CORRECT PASSWORD");
  }

  try {
    const finduser = await usermodel.findOne({ email: myemail });
    if (finduser) {
      res.status(400);
      throw new Error("User already exists!");
    }

    // Hash the password
    const hashpassword = await bcrypt.hash(mypassword, 10);

    const createduser = await usermodel.create({
      Firstname: myFirstname,
      Lastname: myLastname,
      email: myemail,
      password: hashpassword,
      gender: mygender,
      phone: myphone,
    });

    res.status(201).json({
      id: createduser._id,
      name: createduser.Firstname,
      email: createduser.email,
      password: createduser.password,
      gender: createduser.gender,
      phone: createduser.phone,
      token: generateToken(createduser._id),
    });
  } catch (error) {
    // Handle server error
    res.status(500);
    throw new Error(error.message || "Internal Server Error");
  }
});

// Login user function
const loginuser = expressAsyncHandler(async (req, res) => {
  const { myemail, mypassword } = req.body;

  // Check for missing fields
  if (!myemail || !mypassword) {
    res.status(400);
    throw new Error("PLEASE ENTER ALL THE FIELDS");
  }

  const finduser = await usermodel.findOne({ email: myemail });
  if (!finduser) {
    res.status(404);
    throw new Error("INVALID EMAIL");
  }

  const isPasswordCorrect = await bcrypt.compare(mypassword, finduser.password);
  if (!isPasswordCorrect) {
    res.status(401);
    throw new Error("INVALID PASSWORD!!!");
  }

  res.send({
    id: finduser._id,
    name: finduser.Firstname,
    email: finduser.email,
    password: finduser.password, // Note: be careful about sending passwords in responses, even if hashed
    gender: finduser.gender,
    phone: finduser.phone,
    token: generateToken(finduser._id),
  }); // Respond with user data on successful login
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

module.exports = {
  registerUser,
  loginuser,
};
