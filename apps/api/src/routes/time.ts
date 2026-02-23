import { Router, type Router as RouterType } from "express";

const router: RouterType = Router();

/**
 * GET /api/time
 * Get current server time in ISO format and Unix timestamp
 */
router.get("/", (req, res) => {
  try {
    const now = new Date();
    res.json({
      iso: now.toISOString(),
      unix: now.getTime(),
      formatted: now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    });
  } catch (error) {
    console.error("Error fetching time:", error);
    res.status(500).json({ error: "Failed to fetch time" });
  }
});

export default router;
