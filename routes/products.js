 const ProductController = require("../controllers/ProductContoller");
 const express = require("express");
 const router = express.Router();


router.post("/",ProductController.create);
router.put("/id/:id",ProductController.update);
router.get("/",ProductController.getAll);
router.delete("/id/:id",ProductController.delete);
router.get("/id/:id",ProductController.getById);
router.get("/name/:name",ProductController.productFilter);
router.get("/price/:price",ProductController.getByPrice);

 






module.exports = router;
