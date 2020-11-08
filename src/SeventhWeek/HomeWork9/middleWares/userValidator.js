module.exports = (req, res, next) => {
  const user = req.body;

  if (user.first_name && user.last_name && user.tel) {
    return next();
  };
  res.status(400).send({
    error: 'Fill missing requied arguments'
  });
};