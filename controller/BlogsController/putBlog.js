const { isValidObjectId } = require('mongoose')
const {Blogs_Model}= require('../../Models/blogsModel')

const updateBlog = async(req,res) =>{
    try{
        let blogId = req.params.blogId
        if(isValidObjectId(blogId)){
        let data = req.body
        let blog = await Blogs_Model.findById(blogId)
        if(!blog)return res.status(400).send({status:true, message:"Blog Not Found"})
        let time = new Date()
        let update = await Blogs_Model.findOneAndUpdate(
            {$and : [{_id : blogId} , {isDeleted : false}] } ,
            {$set : data,isPublish:true,publishedAt:time } ,
            {new : true}
            )
       return res.status(200).send({status : true , message : "Blog updated successfully" , data : update})}
        else return res.status(400).send("object id is not valid")
       
        
        
    }catch(error) {res.status(400).send({status:false,message:"Internal Server Error"})}
}


module.exports = {updateBlog}