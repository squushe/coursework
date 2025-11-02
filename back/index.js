const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "BvUhM||2r21>",
  database: "cinemabooking",
});

dbPool
  .getConnection()
  .then((connection) => {
    console.log("Successfully connected to the MySQL database!");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Будь ласка, заповніть усі поля." });
    }

    const [rows] = await dbPool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
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

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Будь ласка, заповніть усі поля." });
    }

    const [rows] = await dbPool.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    const user = rows[0];

    if (!user) {
      return res
        .status(401)
        .json({ message: "Неправильний email або пароль." });
    }

    if (user.password !== password) {
      return res
        .status(401)
        .json({ message: "Неправильний email або пароль." });
    }

    res.status(200).json({
      userId: user.id,
      name: user.name,
      email: user.email,
      message: "Вхід успішний!",
    });
  } catch (error) {
    console.error("Помилка при вході:", error);
    res.status(500).json({ message: "Помилка на сервері." });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер успішно запущено на порті ${PORT}`);
});
