exports.invalidPathError = (req, res, next) => {
  return res.status(404).send({ msg: "path does not exist" });
};
