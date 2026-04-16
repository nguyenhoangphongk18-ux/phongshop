import { users } from "./data";

export default function handler(req, res) {
  if (req.method === "POST") {
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
  }
}
