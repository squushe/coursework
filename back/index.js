const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
const redis = require("redis");

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
const redisClient = redis.createClient({});

async function startServer() {
  try {
    await redisClient.connect();
    console.log("Successfully connected to Redis!");

    await dbPool.getConnection().then((conn) => {
      console.log("Successfully connected to the MySQL database!");
      conn.release();
    });

    const authRoutes = require("./routes/auth")(dbPool);
    const bookingRoutes = require("./routes/booking")(dbPool, redisClient);
    const movieRoutes = require("./routes/movies")(dbPool);
    const sessionRoutes = require("./routes/sessions")(dbPool, redisClient);
    const ticketRoutes = require("./routes/tickets")(dbPool);

    app.use("/api/auth", authRoutes);
    app.use("/api/booking", bookingRoutes);
    app.use("/api/movies", movieRoutes);
    app.use("/api/sessions", sessionRoutes);
    app.use("/api/tickets", ticketRoutes);

    app.listen(PORT, () => {
      console.log(`Сервер успішно запущено на порті ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
    process.exit(1);
  }
}

startServer();
