let users = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    const { user, pass } = req.body;

    if (!user || !pass) {
      return res.status(200).json({ message: "Thiếu thông tin" });
    }

    const exists = users.find(u => u.user === user);
    if (exists) {
      return res.status(200).json({ message: "Tài khoản đã tồn tại" });
    }

    users.push({ user, pass });

    res.status(200).json({ message: "Đăng ký thành công" });
  }
}
