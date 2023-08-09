function ageInDays(obj,callback){
    return callback(obj)
}
function print(obj){
    console.log(`The person's full name in ${obj.firstName} ${obj.lastName} and his age in days is ${obj.ageInYears*365}`)
}
const obj={firstName: "Tony",
            lastName: "Stark",
            ageInYears: 21}
ageInDays(obj,print)