const { fetchViews, addViews } = require("../models/views-models");
exports.getViews = (req, res, next) => {
  return fetchViews().then((views) => {
    return res.status(200).send({ views });
  });
};
exports.postView = (req, res, next) => {
  return addViews().then((view) => {
    return res.status(201).send({ view });
  });
};
