function greeting(name){
    return new Promise(function(resolve){
        const greet=`Hello ${name}`
        resolve(greet)
    })
}
const name="Mithun"
greeting(name).then((greet)=>{console.log(greet)})