import Cards from "../components/cards";
import { useEffect, useState } from "react";
import { getPosts } from "../redux/action/actionCreator";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/modal";

const Home = () => {
  const { posts } = useSelector((state) => state);
  const [countPost, setCountPost] = useState(3);
  const [bigView, setBigView] = useState(false);
  const showingPosts = posts ? posts.slice(0, countPost) : [];
  const [modalActive, setModalActive] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <div className="home-header">
        <h1 className="home-title">Article list</h1>
        <div>
          <button className="btn btn-info">Add articles</button>
          {bigView ? (
        <button
          className="btn btn-info"
          onClick={() => {
            setBigView(false);
          }}
        >
          Make small cards
        </button>
      ) : (
        <button
          className="btn btn-info"
          onClick={() => {
            setBigView(true);
          }}
        >
          Make big cards
        </button>
      )}
        </div>
      </div>
      

      <Cards
        countPost={countPost}
        showingPosts={showingPosts}
        bigView={bigView}
        setBigView={setBigView}
      />
      {countPost < posts.length ? (
        <button
          className="btn btn-info btn_footer"
          onClick={() => {
            setCountPost(countPost + 3);
          }}
        >
          Show more
        </button>
      ) : (
        ""
      )}
      
      <Modal modalActive={modalActive} setModalActive={setModalActive} />
    </>
  );
};
export default Home;
