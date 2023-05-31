
let validFname=(input)=>{
    return (/^[a-zA-Z]+$/.test(input))
}

let validEmail=(input)=>{
    return (/^([...(a-z)\.)(0-9)+@([/a-z/]+\.(com|in|org)+$)/.test(input))
}

module.exports={validFname,validEmail}