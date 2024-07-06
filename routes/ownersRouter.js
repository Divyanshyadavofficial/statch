const express = require('express');
const router  = express.Router();
const ownerModel = require("../models/owner-model");
const userModel = require('../models/user-model');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

if(process.env.NODE_ENV==="development"){
    router.post("/create", async function(req,res){
       let owners =  await ownerModel.find();
       if(owners.length>0){ 
            return res.status(504).send("you don't have the permission to create a new owner.");
        }
        let {fullname,email,password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        });
        res.Status(201).send(createdOwner);
    });
}
router.get("/",function(req,res){
    res.send("hey");
});



module.exports = router;