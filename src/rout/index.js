import express from "express";
import Post from "../module/module.js";
const router = express.Router();
//creating a new post
router.post("/post",async(req,res) =>{
    const post = new Post({
        first_name:req.body.first_name,
        second_name:req.body.second_name,
        gender:req.body.gender,
        email:req.body.email,
        specification:req.body.specification,
    })
    await post.save();
    res.send(post)
})

export default router;