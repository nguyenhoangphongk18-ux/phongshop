export default function handler(req, res) {
  if (req.method === "POST") {
    const { user, pass } = req.body;

    if (user === "admin" && pass === "123") {
      res.status(200).json({ message: "Đăng nhập thành công" });
    } else {
      res.status(200).json({ message: "Sai tài khoản hoặc mật khẩu" });
    }
  }
}