const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

module.exports = function (dbPool) {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const userId = req.userData.userId;

      const [tickets] = await dbPool.execute(
        `SELECT 
                    t.id as ticket_id, t.row_number, t.seat_number, t.booking_time,
                    s.hall_name, s.start_time,
                    m.title as movie_title, m.poster_url as movie_poster
                 FROM tickets t
                 JOIN sessions s ON t.session_id = s.id
                 JOIN movies m ON s.movie_id = m.id
                 WHERE t.user_id = ?
                 ORDER BY s.start_time DESC`,
        [userId]
      );

      res.status(200).json(tickets);
    } catch (error) {
      console.error("Помилка при отриманні квитків:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  return router;
};
