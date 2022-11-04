const express = require("express");
const {
  list,
  create,
  remove,
  CategoryByID,
} = require("../controllers/controllers");
const router = express.Router();

router.get("/categories", list);
router.post("/create", create);
router.get("/funciona", (req, res) => {
  console.log("Esta pagina esta funcionando perfectamente");
});
router.delete("/:categoryByID", remove);
router.param("categoryByID", CategoryByID);

module.exports = router;
