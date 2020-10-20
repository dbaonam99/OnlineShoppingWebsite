const jwt = require('jsonwebtoken');

module.exports.verifyToken = function(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const verified = jwt.verify(token, 'hahaha');
    req.user = verified;
    res.send(req.user)
  } catch(err) {
    res.status(400);
  }
}