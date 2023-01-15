function errorHandler(err, req, res, next) {
  res.status(5000).json({ msg: "Something went wrong" });
}

module.exports = errorHandler;
