
let validFname=(input)=>{
    let data=input.trim()
    return (/^[a-zA-Z]+$/.test(data))
}

let validEmail=(input)=>{
    let data=input.trim()
return (/^[...(a-z)\.)(0-9)+@([/a-z/+\.(com|in|org)]+$/.test(data))
}

module.exports={validFname,validEmail}