import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('Error',err))
} 

const url = process.env.MONGODB_URL;
connectDB(url);

export default connectDB;