var jwt = require('jsonwebtoken');
let tokenCheck = async function(req,res,next) {
    try {
         let token=req.headers["x-api-key"]
        if(!token) return res.status(401).send({status : false , message: "access token is not present"})
        let decodedToken = jwt.verify(token,process.env.SECRETKEY)
         if(!decodedToken)  return res.status(401).send({status : false , message: "token does not match"})
         req.head=decodedToken.id
         next()
    } catch(error) {
        res.status(401).send({status:false, message :"error in token check"})
    }
}

module.exports = {tokenCheck}



