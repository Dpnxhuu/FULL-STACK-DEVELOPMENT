import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/contacts-crud");
    console.log("Database connected.");
  } catch (err) {
    console.log("DB error:", err);
  }
};

export default connectDB;