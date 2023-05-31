
let validFname=(input)=>{
    let data=input.trim()
    return (/^[a-zA-Z]+$/.test(data))
}

let validEmail=(input)=>{
    let data=input.trim()
return (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data))
}

function isValid (data) {
    if(typeof data !== "string" || data.trim().length == "") return false
    else return true
}

module.exports={isValid,validFname,validEmail}