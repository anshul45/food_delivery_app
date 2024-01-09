import mongoose from "mongoose";
let isConnected = false;

export const connectDB = async() => {
    try {
        
        if(isConnected) {
            console.log("Already Connected to MongoDB");
            return;
        }
        if(process.env.MONGO_URL)
        {
            await mongoose.connect(process.env.MONGO_URL)
            console.log("Connected to MongoDB");
            isConnected = true;
        }
    } catch (error) {
        const errorMessage = typeof error === 'string' ? error : JSON.stringify(error);
        throw new Error(errorMessage)
    }
}