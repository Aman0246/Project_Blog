const { comparePassword } =require("../brypt/hasshingPassword")
var jwt = require('jsonwebtoken');
const {Author_Model}=require("../Models/authorModel");
const {validEmail} =require("../Regix/Regex")


const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!Object.keys(req.body).length>0) return res.status(400).send({status:"false",message:"email and Password needed"})
        if(!email) return res.status(400).send({status:"false",message:"email needed"})
        if(!validEmail(email)){
            return res.status(400).send({status:false,message:"email format is invalid "})}
        if(!password) return res.status(400).send({status:"false",message:"password needed"})
        const author=await Author_Model.findOne({email:email})
        if(!author) return res.status(401).send({status:"false",message:"email is not registered"})
        const passwordStatus=await comparePassword(password,author.password)
        if(!passwordStatus) return res.status(401).send({status:"false",message:"password does not Match Try Again."})
        const token=jwt.sign({id:author._id},process.env.SECRETKEY,{expiresIn:"1d"})
        if(!token) return res.status(400).send({status:false,message:"Token not found"})
        res.setHeader("x-api-key",token)
        
        res.status(200).send({status:"true",message:"login success",token})
        
    } catch (error) {
        res.status(500).send({status:false , message:error.message})
        
    }
}
module.exports={login}