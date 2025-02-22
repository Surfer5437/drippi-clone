import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import profileRoutes from "./routes/profiles.js";
import dmRoutes from "./routes/dms.js";
import { connectDB } from "./config/database.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use("/api/profiles", profileRoutes);
app.use("/api/dms", dmRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
