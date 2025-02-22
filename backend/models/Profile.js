import express from "express";
import Profile from "../models/Profile.js";
const router = express.Router();

// Search profiles by keyword
router.get("/search", async (req, res) => {
  try {
    const { keyword } = req.query;
    const profiles = await Profile.findAll({
      where: { keywords: { [Op.contains]: [keyword] } },
      order: [["score", "DESC"]],
    });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
export default router;
