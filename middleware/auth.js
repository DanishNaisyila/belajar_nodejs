const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware Autentikasi (AuthN)
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token tidak ditemukan' });

  jwt.verify(token, JWT_SECRET, (err, decodedPayload) => {
    if (err)
      return res.status(403).json({ error: 'Token tidak valid atau kedaluwarsa' });

    req.user = decodedPayload.user;
    next();
  });
}

// Middleware Autorisasi (AuthZ)
function authorizeRole(roles = []) {
  if (typeof roles === 'string') {
    roles = [roles.toLowerCase()];
  } else {
    roles = roles.map(role => role.toLowerCase());
  }

  return (req, res, next) => {
    const userRole = req.user && req.user.role ? req.user.role.toLowerCase() : '';

    if (roles.includes(userRole)) {
      next();
    } else {
      return res
        .status(403)
        .json({ error: 'Akses Dilarang: Peran tidak memadai' });
    }
  };
}

module.exports = { authenticateToken, authorizeRole };