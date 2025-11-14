const express = require("express");
const router = express.Router();

module.exports = function (dbPool) {
  router.get("/:id", async (req, res) => {
    try {
      const sessionId = req.params.id;

      const [rows] = await dbPool.execute(
        `SELECT 
                    s.id, s.hall_name, s.start_time, s.price,
                    m.title as movie_title, m.poster_url as movie_poster
                 FROM sessions s
                 JOIN movies m ON s.movie_id = m.id
                 WHERE s.id = ?`,
        [sessionId]
      );

      const sessionDetails = rows[0];

      if (!sessionDetails) {
        return res.status(404).json({ message: "Сеанс не знайдено." });
      }

      //   const [takenSeats] = await dbPool.execute(
      //     "SELECT row_number, seat_number FROM tickets WHERE session_id = ?",
      //     [sessionId]
      //   );

      //   sessionDetails.takenSeats = takenSeats;

      res.status(200).json(sessionDetails);
    } catch (error) {
      console.error("Помилка при отриманні сеансу за ID:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  return router;
};
