const express = require("express");
const router = express.Router();

const { list, create } = require("../controllers/videocontroller");

router.get("/videogames", list);
router.post("/create", create);

module.exports = router;
