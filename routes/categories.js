const CategoryController = require("../controllers/CategoryController");
const express = require("express");
const router = express.Router();



router.post("/",CategoryController.create);
router.put("/id/:id",CategoryController.udpate);
router.delete("/id/:id",CategoryController.delete);
router.get("/",CategoryController.getAll);
router.get("/id/:id",CategoryController.getById);
router.get("/name/:name",CategoryController.categoryFilter);




module.exports = router;