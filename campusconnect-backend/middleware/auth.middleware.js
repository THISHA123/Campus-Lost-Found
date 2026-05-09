const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token." });
    }

    // Remove "Bearer "
    const actualToken = token.split(" ")[1];

    // Verify token
    const verified = jwt.verify(actualToken, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = verified;

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;