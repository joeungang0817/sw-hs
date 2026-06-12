import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined,
  waitForConnections: true, // 연결 대기 허용
  connectionLimit: 10, // 최대 동시 연결 수
});

// 연결 상태 확인 — 서버 시작 시 1회 실행
pool
  .getConnection()
  .then((conn) => {
    console.log("MySQL 연결 성공!");
    conn.release(); // 확인 후 즉시 반납
  })
  .catch((err) => console.error("MySQL 연결 실패:", err.message));
