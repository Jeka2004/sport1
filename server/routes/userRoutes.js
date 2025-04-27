import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ favorites: user.favorites || [] });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ error: "Server error while fetching favorites" });
  }
});

router.put("/favorites", async (req, res) => {
  const { userId, favorites } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { favorites },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.json({ message: "Favorites updated successfully.", favorites: user.favorites });
  } catch (error) {
    console.error("Error updating favorites:", error);
    res.status(500).json({ message: "Server error while updating favorites." });
  }
});

export default router;

