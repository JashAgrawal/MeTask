var express = require("express");
var services = require("../services");
var router = express.Router();

router.post("/search", services.company.search);
router.post("/addCompany", services.company.addCompany);

router.post("/addUser", services.user.addUser);
router.post("/getUserCompany", services.user.getUserCompany);
router.get("/getAllUsers", services.user.getAllUsers);

module.exports = router;
