import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default adminLogin;
