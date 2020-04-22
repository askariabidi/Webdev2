const express = require("express");
const router = express.Router();
const { signup, signin, signout ,getItems , addItem , requireSignin} = require("../controller/control");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get("/getitems", getItems);
router.post("/additem", requireSignin, addItem);

module.exports = router;
