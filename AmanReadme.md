For Myself-------

const{Blogs_Model}=require("../../Models/blogsModel")

const getdata=async(req,res)=>{

 let c={}
    let authorId=req.query.authorId
    if(authorId){
        c.authorId=authorId
    }
    let category=req.query.category
    if(category){
        c.category=category
    }
    let tags=req.query.tags
    if(tags){
        c.tags=tags
    }

console.log(c)

      let x=await Blogs_Model.find(c,{isDeleted:false},{isPublished:true})
    if(!x){

        res.status(200).send({msg:"false",data:x})
    }
    res.status(200).send({msg:"success",data:x})

}
module.exports={getdata}




=======================================================================================================================
========================================================================================================================
Reagix
function isValid (data) {
    if(typeof data !== "string" || data.trim().length == "") return false
    else return true
}

function validString(input){
    return (/^[a-zA-Z]+$/.test(input))
}

const validateEmail = (email) => {
    return email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
};


const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
};



module.exports.isValid = isValid
module.exports.validString = validString
module.exports.validateEmail = validateEmail
module.exports.isValidPassword = isValidPassword


using regix
if (!isValid(title)) { return res.status(400).send({ status: false, message: "title is invalid" }) }
      if (!["Mr", "Mrs", "Miss"].includes(title)) return res.status(400).send({ status: false, message: "title should be Mr,Miss,Mrs" })

      if (!isValid(fname)) { return res.status(400).send({ status: false, message: "author first name is not valid " }) }
      if (!validString(fname)) { return res.status(400).send({ status: false, message: "author first name is not valid string" }) }

      if (!isValid(lname)) { return res.status(400).send({ status: false, message: "author last name is not valid " }) }
      if (!validString(lname)) { return res.status(400).send({ status: false, message: "author last name is not valid string" }) }

      if(password.length < 8) return res.status(400).send({status : false , message : "Password length should be greater than 8 characters"})
      // if (!isValid(password)) { return res.status(400).send({ status: false, message: "password name is not valid" }) }
      if (!isValidPassword(password)) { return res.status(400).send({ status: false, message: "invalid password " }) }

      if (!isValid(email)) { return res.status(400).send({ status: false, message: " Invalid email" }) }

      if (!validateEmail(email)) { return res.status(400).send({ status: false, message: "Enter the valid email" }) }
=====================================================================================================================================
===================================================================================================================================