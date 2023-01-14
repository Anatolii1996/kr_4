import Articles from "../components/articles";
import Cards from "../components/cards";
import Header from "../components/header";

const Home = () => {
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
      <Articles />
      <button className="btn btn-info btn_footer">Show more</button>
    </>
  );
};
export default Home;
