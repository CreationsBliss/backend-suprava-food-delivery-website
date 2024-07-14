import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://musfiqrahman0322:uNis8nY7kdTa1zt5@cluster0.ybmtp22.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB connected"));
};
