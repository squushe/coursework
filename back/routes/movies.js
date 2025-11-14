const express = require("express");
const router = express.Router();

module.exports = function (dbPool) {
  router.get("/", async (req, res) => {
    try {
      const [movies] = await dbPool.execute(
        "SELECT id, title, poster_url, genre FROM movies"
      );
      res.status(200).json(movies);
    } catch (error) {
      console.error("Помилка при отриманні фільмів:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      const movieId = req.params.id;

      const [movieRows] = await dbPool.execute(
        "SELECT * FROM movies WHERE id = ?",
        [movieId]
      );
      const movie = movieRows[0];

      if (!movie) {
        return res.status(404).json({ message: "Фільм не знайдено." });
      }

      const [actors] = await dbPool.execute(
        `SELECT a.id, a.name, a.photo_url FROM actors a JOIN movie_actors ma ON a.id = ma.actor_id WHERE ma.movie_id = ?`,
        [movieId]
      );

      const [sessions] = await dbPool.execute(
        "SELECT * FROM sessions WHERE movie_id = ? AND start_time > NOW() ORDER BY start_time ASC",
        [movieId]
      );

      movie.actors = actors;
      movie.sessions = sessions;

      res.status(200).json(movie);
    } catch (error) {
      console.error("Помилка при отриманні фільму за ID:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  return router;
};
