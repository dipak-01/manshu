import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process if unable to connect
    }
};

connectToMongoDB();

app.use("/user", userRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
