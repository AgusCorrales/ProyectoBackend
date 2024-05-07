 const ProductController = require("../controllers/ProductController");
 const express = require("express");
const UserController = require("../controllers/UserController");
 const router = express.Router();



router.post("/",ProductController.create);
router.get("/",ProductController.getAll);
router.put("/id/:id",ProductController.update);
router.delete("/id/:id",ProductController.delete);
router.get("/id/:id",ProductController.getById);
router.get("/name/:name",ProductController.productFilter);
router.get("/price/:price",ProductController.getByPrice);
router.get("/pricedesc",ProductController.getOrderDes);



 






module.exports = router;
