const { isValidObjectId } = require("mongoose")
const{Blogs_Model}=require("../../Models/blogsModel")

const deletedBlogByParams = async (req,res)=>{
   try {
      let blogId = req.params.blogId
      if(isValidObjectId(blogId)){
       let blog = await Blogs_Model.findById(blogId)
       if(!blog){ return res.status(401).send({status:false,message:"Id data is not present"})  }
       let deletedBlog=await Blogs_Model.findOne({_id:blogId,isDeleted:true})
       if(deletedBlog){return res.status(200).send({status:false,message:"Already deleted..."})}
       let newBlogData= await Blogs_Model.findByIdAndUpdate(blogId,{$set:{isDeleted:true}},{new:true}) 
      res.status(200).send({status:true,message:"deleted succesfully.."})}
      else (res.status(400).send({status:false,message:"Invalid Id"}))
      
   } catch (error) {
      res.status(500).send({status:false,message:"error in deletion"})
      
   }
}
module.exports={deletedBlogByParams}