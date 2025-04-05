const express = require("express");
const router = express.Router();

//Index -users
router.get("/", (req,res)=>{
    res.send("Get for post");
});

// Show -User
router.get("/:id", (req,res)=>{
    res.send("Get for post User");
});

//Post-users
router.post("/", (req,res)=>{
    res.send("get for post id");
});

//Delete-users
router.delete("/:id", (req,res)=>{
    res.send("Delete for post id");
});

module.exports = router;