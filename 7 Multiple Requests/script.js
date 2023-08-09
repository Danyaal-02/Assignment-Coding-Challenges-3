async function getMultipleRequest(req1,req2){
    const myReq1=await(fetch(req1).then((response)=>response.json()))
    const myReq2= await(fetch(req2).then((response)=>response.json()))
    return {todo:myReq1,post:myReq2}
}
const req1="https://jsonplaceholder.typicode.com/todos/1"
const req2="https://jsonplaceholder.typicode.com/posts/1"
getMultipleRequest(req1,req2).then((data)=>console.log(data))