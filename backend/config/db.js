import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;

