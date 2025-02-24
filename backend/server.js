import express from "express";
import pkg from "pg";
const { Client } = pkg;
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // 👈 Add your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"]
  }));

// Load environment variables
const API_URL =
  "https://ai.api.nvidia.com/v1/genai/stabilityai/stable-diffusion-3-medium";
const API_KEY = process.env.API_KEY;
const JWT_SECRET = process.env.JWT_SECRET;

// Database connection
const pgClient = new Client({
  connectionString: process.env.DATABASE_URL,
});
pgClient
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Database connection error:", err));

// Ensure 'users' table exists
async function checkUsersTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      username VARCHAR(100) UNIQUE NOT NULL,
      password TEXT NOT NULL
    );
  `;
  await pgClient.query(createTableQuery);
  console.log("✅ Users table checked/created.");
}
checkUsersTable();


  
// app.get("/Landing", async (req, res) => {
//   if()
// });

app.post("/api/generate-image", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) return res.status(400).json({ error: "Prompt is required" });

    const response = await axios.post(
      API_URL,
      {
        prompt,
        cfg_scale: 5,
        aspect_ratio: "16:9",
        seed: 0,
        steps: 50,
        negative_prompt: "",
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch image" });
  }
});

// User signup API
app.post("/api/signup", async (req, res) => {
    const { name, username, password } = req.body;
    console.log("Received signup request:", req.body); // 👈 Add this
  
    if (!name || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Hashed password:", hashedPassword); // 👈 Debug hashed password
  
      const insertQuery =
        "INSERT INTO users (name, username, password) VALUES ($1, $2, $3) RETURNING id;";
      const result = await pgClient.query(insertQuery, [name, username, hashedPassword]);
      console.log("Inserted user:", result.rows[0]); // 👈 Log insertion result
  
      res.json({ message: "Sign up successful" });
    } catch (e) {
      console.error("Signup error:", e); // 👈 Log any error
      res.status(500).json({ message: "Error: try again" });
    }
  });
  

// User sign-in API
app.post("/api/signin", async (req, res) => {
    const { username, password } = req.body;
    console.log("🔍 Sign-in attempt for:", username); // Debug username
  
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const userQuery = "SELECT * FROM users WHERE username = $1;";
      const result = await pgClient.query(userQuery, [username]);
  
      console.log("🔍 Query result:", result.rows); // Log database result
  
      if (result.rows.length === 0) {
        console.log("❌ User not found");
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const user = result.rows[0];
      console.log("🔍 Retrieved user:", user); // Debug user data
  
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("🔍 Password match:", isMatch); // Log password comparison
  
      if (!isMatch) {
        console.log("❌ Password incorrect");
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
  
      console.log("✅ Sign-in successful, Token generated");
      res.json({ message: "Sign in successful", token });
  
    } catch (e) {
      console.error("❌ Sign-in error:", e);
      res.status(500).json({ message: "Error: try again" });
    }
  });
  
  import { authenticateUser } from "./authMiddleware.js";

  app.get("/dashboard", authenticateUser, async (req, res) => {
    try {
        // Fetch user-specific data (if required)
        res.json({ message: `Welcome to the dashboard, ${req.user.username}!` });
    } catch (e) {
        console.error("Dashboard error:", e);
        res.status(500).json({ message: "Error: try again" });
    }
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
