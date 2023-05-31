const { isValidObjectId } = require("mongoose");
const {Blogs_Model}=require("../Models/blogsModel")

const authorise = async(req, res, next)=> {
  try {
     let authorID=req.head
    let blogId = req.params.blogId;
    if(isValidObjectId(blogId)){
    let blog=await Blogs_Model.findById(blogId)
    if(authorID!=blog.authorId)return res.status(401).send({status:false, message:"not valid User"});
    next() }
    else res.status(404).send({status:false,message:"Invalid user"})
} catch (er) {
    return res.status(403).send({status:false, message:"Not authorised"});
  }
};

module.exports={authorise}