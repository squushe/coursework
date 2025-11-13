const express = require("express");
const router = express.Router();

module.exports = function (dbPool) {
  router.get("/", async (req, res) => {
    try {
      const [movies] = await dbPool.execute("SELECT * FROM movies");

      res.status(200).json(movies);
    } catch (error) {
      console.error("Помилка при отриманні фільмів:", error);
      res
        .status(500)
        .json({ message: "Помилка на сервері при отриманні фільмів." });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const movieId = req.params.id;

      const [rows] = await dbPool.execute("SELECT * FROM movies WHERE id = ?", [
        movieId,
      ]);
      const movie = rows[0];

      if (!movie) {
        return res.status(404).json({ message: "Фільм не знайдено." });
      }

      res.status(200).json(movie);
    } catch (error) {
      console.error("Помилка при отриманні фільму за ID:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  return router;
};
