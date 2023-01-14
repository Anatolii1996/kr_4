import Cards from "../components/cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/action/actionCreator";

const Home = () => {
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
      <Cards />
      {/* <Articles /> */}
      <button className="btn btn-info btn_footer">Show more</button>
    </>
  );
};
export default Home;
