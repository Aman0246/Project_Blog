const {Blogs_Model}=require("../Models/blogsModel")

const   authorise = async(req, res, next)=> {
  try {
     let authorID=req.head
    let blogId = req.params.blogId;
    let blog=await Blogs_Model.findById(blogId)
    if(authorID!=blog.authorId)return res.status(401).send({status:false, message:"not valid User"});
    next() 
} catch (er) {
    return res.status(400).send({status:false, message:"Not authorised"});
  }
};

module.exports={authorise}