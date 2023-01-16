import Cards from "../components/cards";
import { useEffect, useState } from "react";
import { getPosts } from "../redux/action/actionCreator";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const { posts } = useSelector((state) => state);
  const [countPost, setCountPost] = useState(3);
  const showingPosts =posts ? posts.slice(0, countPost) : [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  

  return (
    <>
      <div className="home-header">
        <h1 className="home-title">Article list</h1>
        <div>
          <button className="btn btn-info">Make big cards</button>
          <button className="btn btn-info">Add articles</button>
        </div>
      </div>
      <Cards countPost={countPost} showingPosts={showingPosts}/>
      {countPost<posts.length ? 
          <button
          className="btn btn-info btn_footer"
          onClick={() => {
            setCountPost(countPost + 3);
          }}
        >
          Show more
        </button>
        :
        ""
      }
      
    </>
  );
};
export default Home;
