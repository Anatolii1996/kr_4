import { useEffect } from 'react';

function Articles(){
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resp)=>resp.json())
      }, [])
}

export default Articles;