
export const getPosts = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    return await request.json();
};

export const getUsers = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    return await request.json();
}