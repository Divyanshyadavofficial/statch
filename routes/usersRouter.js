const express = require('express');
const {registerUser} = require("../controllers/authController")
const router  = express.Router();

router.get("/",function(req,res){
    res.send("hey");
});
router.post("/register", registerUser);
module.exports = router;