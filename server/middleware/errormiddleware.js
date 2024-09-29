const errorhandler = (err, req, res, next) => {
  res.send({
    error: err.message,
  });
};
module.exports = errorhandler;
