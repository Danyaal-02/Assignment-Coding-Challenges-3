function manipulateString(str,callback){
    str=str.toUpperCase()
    return callback(str)
}
function print(str){
    console.log("The manipulated string is: "+str)
}
const str="hello world"
manipulateString(str,print)