const express = require("express");
const router = express.Router();

module.exports = function (dbPool, redisClient) {
  router.post("/reserve", async (req, res) => {
    try {
      const { screeningId, row, seat, userId } = req.body;
      const seatKey = `screening:${screeningId}:seat:${row}-${seat}`;
      const result = await redisClient.set(seatKey, userId, {
        NX: true,
        EX: 900,
      });
      if (result === null) {
        return res
          .status(409)
          .json({ message: "Це місце вже тимчасово заброньоване." });
      }
      res
        .status(200)
        .json({ message: `Місце ${row}-${seat} зарезервовано на 15 хвилин.` });
    } catch (error) {
      console.error("Помилка при резервуванні місця:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  router.post("/confirm", async (req, res) => {
    try {
      const { screeningId, seats, userId } = req.body;
      for (const seat of seats) {
        const seatKey = `screening:${screeningId}:seat:${seat.row}-${seat.seat}`;
        const reservedByUserId = await redisClient.get(seatKey);
        if (reservedByUserId === null) {
          return res.status(400).json({
            message: `Час бронювання для місця ${seat.row}-${seat.seat} вичерпався.`,
          });
        }
        if (parseInt(reservedByUserId) !== userId) {
          return res.status(403).json({
            message: "Помилка: ви не можете купити чуже зарезервоване місце.",
          });
        }
      }
      const connection = await dbPool.getConnection();
      try {
        await connection.beginTransaction();
        for (const seat of seats) {
          await connection.execute(
            "INSERT INTO tickets (`session_id`, `user_id`, `row_number`, `seat_number`, `status`, `booking_time`) VALUES (?, ?, ?, ?, 'paid', NOW())",
            [screeningId, userId, seat.row, seat.seat]
          );
        }
        await connection.commit();
      } catch (dbError) {
        await connection.rollback();
        throw dbError;
      } finally {
        connection.release();
      }
      for (const seat of seats) {
        const seatKey = `screening:${screeningId}:seat:${seat.row}-${seat.seat}`;
        await redisClient.del(seatKey);
      }
      res.status(201).json({ message: "Квитки успішно придбано!" });
    } catch (error) {
      console.error("Помилка при підтвердженні покупки:", error);
      res
        .status(500)
        .json({ message: "Помилка на сервері при підтвердженні." });
    }
  });

  return router;
};
