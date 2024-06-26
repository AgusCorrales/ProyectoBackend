const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const {authentication,isAdmin} = require('../middleware/authentication')



router.post("/",UserController.create);
router.get("/info",authentication,UserController.findOne);
router.get("/",authentication,UserController.getAll);
router.post("/login",UserController.login);
router.delete("/id/:id",authentication, isAdmin, UserController.delete);
router.delete('/logout',authentication,UserController.logout);











module.exports = router;