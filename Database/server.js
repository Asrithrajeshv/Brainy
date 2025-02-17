const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request body

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// User Schema & Model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Route to Handle Registration
app.post("/save-recipe", async (req, res) => {
  try {
      const { name, image, instructions } = req.body;

      // Check if recipe already exists
      const existingRecipe = await Recipe.findOne({ name });
      if (existingRecipe) {
          return res.status(400).json({ message: "Recipe already saved!" });
      }

      const newRecipe = new Recipe({ name, image, instructions });
      await newRecipe.save();

      res.status(201).json({ message: "Recipe saved successfully!" });
  } catch (error) {
      console.error("Error saving recipe:", error);
      res.status(500).json({ message: "Server error, try again!" });
  }
});
app.get("/recipes", async (req, res) => {
  try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
  } catch (error) {
      console.error("Error fetching recipes:", error);
      res.status(500).json({ message: "Server error, try again!" });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Registration successful!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
