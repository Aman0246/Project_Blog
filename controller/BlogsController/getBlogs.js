const { isValidObjectId } = require("mongoose");
const{Blogs_Model}=require("../../Models/blogsModel")
const getBlog = async function(req,res){
    
    let {tags,authorId,category,subcategory}=req.query 
    

    try {
        
      const filter = {};
      
      if (authorId) {
        if(isValidObjectId(authorId)){
        filter.authorId = authorId;}
        else { return res.status(404).send({status:false,message:"no blog of this Author"})}
      }
  
      if (category) {
        filter.category = category;
      }
  
      if (tags) {
        filter.tags = tags; 
      }
  
      if (subcategory) {
        filter.subcategory = subcategory;
      }
      let blogData= await Blogs_Model.find({...filter,isDeleted:false,isPublished:true});//
      if(blogData.length>0){
          res.status(200).send({status:true,message:"Blogs list",data:blogData})
      }else{
          res.status(200).send({status:false,message:"No blogs with applied filters"})
      }
    } catch (error) {
      res.status(500).send({ status: false, message: "error in finding"})
      
    }
}
module.exports={getBlog}