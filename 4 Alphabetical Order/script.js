function getTitle(arr,callback){
    arr=arr.map((e)=>{return e.title})
    return callback(arr)
}
function print(arr){
    arr=arr.sort()
    console.log(arr)
}
const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
    {
      title: "A Tale of Two Cities",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      year: 1997,
    },
  ];
  
getTitle(books,print)