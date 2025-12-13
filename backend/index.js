const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config({
  path: __dirname + "/.env",
});
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

let pool;

async function initializeDatabase() {
  try {
    pool = mysql.createPool(dbConfig);

    // 테스트 연결
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    console.log("MySQL pool ready");

    // 테이블 생성 확인
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("contact_messages table checked/created");
  } catch (err) {
    console.error("DB init failed:", err.message || err);
    process.exit(1);
  }
}

app.get("/", (req, res) => res.send("Hi!"));

app.post("/api/contact", async (req, res) => {
  console.log("/api/contact called, body:", req.body);

  const { name, email, title, message } = req.body;

  if (!name || !email || !title || !message) {
    console.warn("validation failed", { name, email, title, message });
    return res
      .status(400)
      .json({ error: "Name, email, title, and message are required." });
  }

  try {
    const [result] = await pool.execute(
      "INSERT INTO contact_messages (name, email, title, message) VALUES (?, ?, ?, ?)",
      [name, email, title, message]
    );
    console.log("Inserted id:", result.insertId);
    res
      .status(200)
      .json({
        message: "Message received successfully!",
        insertId: result.insertId,
      });
  } catch (err) {
    console.error("DB insert error:", err);
    res.status(500).json({ error: "Failed to save message to database." });
  }
});

async function startServer() {
  await initializeDatabase();
  app.listen(port, () => {
    console.log(`서버 가동중 -> http://localhost:${port}`);
  });
}

startServer();
