const { Blogs_Model } = require("../../Models/blogsModel")

const deleteUsingQuery = async (req, res) => {
    try {
        let authorID=req.head
        let input=req.query
        const blog=await Blogs_Model.findOne(input)
        if(blog.authorId!=authorID)return res.status(401).send({status:false, message:"not valid User"});
        let deletedBlog=await Blogs_Model.findOne({$and:[input,{isDeleted:true}]})
        if(deletedBlog) return res.status(200).send({status:false,message:"already deleted"})
        let data = await Blogs_Model.updateMany(input,{$set:{isDeleted:true}},{new:true})
        if (data) return res.status(200).send({ status: true, message: "deleted" })
    } catch (err) {
        res.status(500).send({ status: false, message: "error while deleting blog "})
    }       
}    
module.exports = { deleteUsingQuery }
