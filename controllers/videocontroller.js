const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const videomodel = require("../models/videomodel");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    const { name, description, price, category, quantity } = fields;
    let VideoJuegos = new videomodel(fields);

    if (files.photo) {
      if (files.photo.size > 50000000) {
        return res.status(400).json({
          error: "image should be less than 5mb",
        });
      }
      VideoJuegos.photo.data = fs.readFileSync(files.photo.path);
      VideoJuegos.photo.contentType = files.photo.type;
    }
    VideoJuegos.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: "ocurrio algun error, encuentra otro modo",
        });
      }
      res.json(result);
    });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "name";

  videomodel
    .find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, order]])
    .exec((err, VideoJuegos) => {
      if (err) {
        return res.status(400).json({
          error: "Video Juego no encontrado",
        });
      }
      res.json(VideoJuegos);
    });
};
