const models = require("../models/models");

exports.create = (req, res) => {
  const routes = new models(req.body);
  routes.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Something went wrong, please try again...",
      });
    }
    res.json({ data });
  });
};

exports.list = (req, res) => {
  models.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
    res.json(data);
  });
};

exports.remove = (req, res) => {
  let routes = req.routes;
  routes.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "algo anda mal",
      });
    }
    res.json({
      message: "Categoria borrada",
    });
  });
};

exports.CategoryByID = (req, res, next, id) => {
  models.findById(id).exec((err, routes) => {
    if (err || !routes) {
      return res.status(400).json({
        error: "La categoria no existe o no fue encontrada",
      });
    }
    req.routes = routes;
    next();
  });
};
