import express from "express";
const router = express.Router();

// Generate a DM using AI (Placeholder)
router.post("/generate", async (req, res) => {
  const { username, bio } = req.body;
  const message = `Hey ${username}, I saw your profile and thought you'd love our product! Let's chat.`;
  res.json({ message });
});
export default router;
