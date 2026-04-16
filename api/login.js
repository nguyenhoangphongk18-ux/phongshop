import { users } from "./data";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { user, pass } = req.body;

    const found = users.find(u => u.user === user && u.pass === pass);

    if (found) {
      res.json({ message: "Đăng nhập thành công" });
    } else {
      res.json({ message: "Sai tài khoản hoặc mật khẩu" });
    }
  }
}
