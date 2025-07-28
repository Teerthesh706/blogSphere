import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL =`mongodb+srv://${username}:${password}@myblog.gvlstrx.mongodb.net/?retryWrites=true&w=majority&appName=myBlog`;
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
