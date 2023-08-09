function doubleArray(arr,callback){
    return callback(arr)
}
function double(arr){
    return arr.map((e)=>e*2)
}
const arr=[1,2,3,4,5,6,7,8]
console.log(doubleArray(arr,double))