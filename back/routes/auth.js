const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

module.exports = function (dbPool) {
  router.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        return res
          .status(400)
          .json({ message: "Будь ласка, заповніть усі поля." });
      }
      const [rows] = await dbPool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (rows.length > 0) {
        return res
          .status(409)
          .json({ message: "Користувач з таким email вже існує." });
      }
      await dbPool.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, password]
      );
      res.status(201).json({ message: "Користувача успішно зареєстровано!" });
    } catch (error) {
      console.error("Помилка при реєстрації:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Будь ласка, заповніть усі поля." });
      }

      const [rows] = await dbPool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      const user = rows[0];

      if (!user || user.password !== password) {
        return res
          .status(401)
          .json({ message: "Неправильний email або пароль." });
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        token: token,
        userId: user.id,
        message: "Вхід успішний!",
      });
    } catch (error) {
      console.error("Помилка при вході:", error);
      res.status(500).json({ message: "Помилка на сервері." });
    }
  });

  return router;
};
