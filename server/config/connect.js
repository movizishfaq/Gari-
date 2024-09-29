const mongoose = require("mongoose");
// make a function to connect with database
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`database connected on host:${mongoose.connection.host}`);
};
module.exports = connectDB;
