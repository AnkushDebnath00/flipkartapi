import mongoose from "mongoose";

export const Connection = async (URL) => {
  try {
    mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
};

export default Connection;
