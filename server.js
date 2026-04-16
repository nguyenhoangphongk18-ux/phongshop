const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// giả database (RAM thôi, restart là bay 😐)
let users = [];

// API đăng ký
app.post("/register", (req, res) => {
  const { user, pass } = req.body;

  if (!user || !pass) {
    return res.json({ message: "Thiếu thông tin" });
  }

  const exists = users.find(u => u.user === user);
  if (exists) {
    return res.json({ message: "Tài khoản đã tồn tại" });
  }

  users.push({ user, pass });

  res.json({ message: "Đăng ký thành công" });
});

// API đăng nhập
app.post("/login", (req, res) => {
  const { user, pass } = req.body;

  const found = users.find(u => u.user === user && u.pass === pass);

  if (found) {
    res.json({ message: "Đăng nhập thành công" });
  } else {
    res.json({ message: "Sai tài khoản hoặc mật khẩu" });
  }
});

app.listen(PORT, () => {
  console.log("Server chạy tại http://localhost:" + PORT);
});