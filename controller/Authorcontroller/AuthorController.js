const {Author_Model}=require("../../Models/authorModel")
const {hassPassWord}=require("../../brypt/hasshingPassword")
const {validFname,isValid,validEmail} =require("../../Regix/Regex")
//create
const createAuthor=async (req,res)=>{

     try { const data=req.body;
          const{fname,lname,title,email ,password }=data
          
          if(!Object.keys(data).length>0) return res.status(400).send({status:false ,message:"Data not found in body"})
          if(!fname) return res.status(400).send({status:false,message:"fname not found"})
          if(!lname) return res.status(400).send({status:false,message:"lname not found"})
          if (!["Mr", "Mrs", "Miss"].includes(title.trim())) return res.status(400).send({ status: false, message: "title should be Mr,Miss,Mrs" })
          if(!email) return res.status(400).send({status:false,message:"email not found"})
          if(!password) return res.status(400).send({status:false,message:"password not found"})
          if (!isValid(fname)) { return res.status(400).send({ status: false, message: "author first name is not valid string" }) }
          if(!validFname(fname)){
               return res.status(400).send({status:false,message:"invalid format of fName"})
          }
          if (!isValid(lname)) { return res.status(400).send({ status: false, message: "author lname name is not valid string" }) }
          if(!validFname(lname)){
               return res.status(400).send({status:false,message:"invalid format of lName"})
          }
          if (!isValid(email)) { return res.status(400).send({ status: false, message: "author email is not valid string" }) }
          if(!validEmail(email)){
               return res.status(400).send({status:false,message:"email format is invalid "})
          }
           const hasspassword=await hassPassWord(password)
          let author=await Author_Model.findOne({email:email})
          if(author) return res.status(400).send({status:false,message:"email already exist"})
          let create= await Author_Model.create({fname:fname,lname:lname,title:title,email:email ,password:hasspassword })
          res.status(201).send({status:true,data:create})
          
     } catch (error) {
          res.status(500).send({status:false,message:"error in Creating Author"})
          
     }
}
module.exports={createAuthor}

