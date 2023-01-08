const getPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    return await request.json();
};

export default getPosts;