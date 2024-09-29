const jwt = require("jsonwebtoken");
const usermodel = require("../models/usermodel");

const GrabToken = async (req, res, next) => {
  let token;

  // Check if the authorization header is present and starts with "Bearer"
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Extract the token from the Authorization header
    token = req.headers.authorization.split(" ")[1];

    try {
      // Verify the token using jwt
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user by the decoded id and exclude the password field
      req.user = await usermodel.findById(decoded.id).select("-password");

      // Proceed to the next middleware or route
      next();
    } catch (error) {
      // If token verification fails, log the error and send a 401 response
      console.error("Token verification failed:", error.message);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    // If no token is present in the request, send a 401 response
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};

module.exports = { GrabToken };
