const express = require("express");
const router = express.Router();


//Index -users
router.get("/", (req,res)=>{
    res.send("Get for User");
});

// Show -User
router.get("/:id", (req,res)=>{
    res.send("Get for Show User");
});

//Post-users
router.post("/", (req,res)=>{
    res.send("get for Users id");
});

//Delete-users
router.delete("/:id", (req,res)=>{
    res.send("Delete for Users id");
});

module.exports= router;
