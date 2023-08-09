fetch("https://jsonplaceholder.typicode.com/posts/123456789")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not okay")
        }
    })
    .catch((error) => {
        console.log(error)
    })