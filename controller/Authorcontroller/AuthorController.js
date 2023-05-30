const {Author_Model}=require("../../Models/authorModel")
const {hassPassWord}=require("../../brypt/hasshingPassword")
//create
const createAuthor=async (req,res)=>{

     try { const data=req.body;
          const{fname,lname,title,email ,password }=data
          if(!fname) return res.status(400).send({status:false,message:"fname not found"})
          if(!lname) return res.status(400).send({status:false,message:"lname not found"})
          if (!["Mr", "Mrs", "Miss"].includes(title)) return res.status(400).send({ status: false, message: "title should be Mr,Miss,Mrs" })
          if(!email) return res.status(400).send({status:false,message:"email not found"})
          if(!password) return res.status(400).send({status:false,message:"password not found"})

          if(!fname.match(/^([(A-Z)(a-z)]+$)/i)){
               return res.status(400).send({status:false,message:"please enter valid fname"})
          }
          if(!lname.match(/^([(A-Z)()(a-z)]+$)/i)){
               return res.status(400).send("please enter valid lname")
          }
          
          if(!email.match(/^([...(a-z)\.)(0-9)+@([/a-z/]+\.(com|in|org)$)/gi)){
               return res.status(400).send({status:false,message:"email format is invalid "})
          }
           const hasspassword=await hassPassWord(password)
          let author=await Author_Model.findOne({email:email})
          if(author) return res.status(400).send({status:false,message:"email already exist"})
          let create= await Author_Model.create({fname,lname,title,email ,password:hasspassword })
          res.status(201).send({status:true,data:create})
          
     } catch (error) {
          res.status(500).send({status:false,message:"error in Creating Author"})
          
     }
}
module.exports={createAuthor}

