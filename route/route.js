const express = require('express')

const router = express.Router()
const{createAuthor} =require("../controller/Authorcontroller/AuthorController")
const{creatingBlog}=require("../controller/BlogsController/Post")
const{deletedBlogByParams}=require('../controller/BlogsController/delete')
const{getBlog}=require('../controller/BlogsController/getBlogs')
const{deleteUsingQuery}=require("../controller/BlogsController/deleteQuery")
const {updateBlog} =require("../controller/BlogsController/putBlog")
const{login}=require("../Auth/login")
const{tokenCheck}=require("../middleware/authentication")
const{authorise}=require("../middleware/authorise")

router.post("/authors",createAuthor)
router.post("/blogs",tokenCheck ,creatingBlog)
router.delete("/blogs/:blogId",tokenCheck, authorise ,deletedBlogByParams)
router.get("/blogs",getBlog)
router.delete("/blogs",tokenCheck,deleteUsingQuery)
router.put("/blogs/:blogId",tokenCheck,authorise,updateBlog)
router.post("/login",login)



module.exports = router