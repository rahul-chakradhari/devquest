const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/project";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI); // Callback हटाकर `await` किया
    console.log("Connected to Mongo successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1); // If connection fails, exit the process
  }
};

module.exports = connectToMongo;
