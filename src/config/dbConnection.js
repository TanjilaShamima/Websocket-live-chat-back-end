const mongoose = require("mongoose");
const { appConfig } = require("./constant");

const connectMongoDB = async () => {
  try {
    console.log("Here========");
    await mongoose.connect(appConfig.db.mongoDbUrl);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectMongoDB };
