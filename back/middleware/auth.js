const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Токен не надано");
    }

    const decodedToken = jwt.verify(token, "your_super_secret_key_for_jwt");

    req.userData = { userId: decodedToken.userId };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Автентифікація не вдалася." });
  }
};
