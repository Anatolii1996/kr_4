import { key } from "localforage";
import { useSelector } from "react-redux";

function Cards() {
  const { posts } = useSelector((state) => state);
  

  return (
    <div className="cards">
      {posts.map(({ title, body, id }) => {
        return (
          <div className="card app-card" key={id}>
            <div className="card-body">
              <h5 className="card-title title">{title}</h5>
              <p className="card-text">{body}</p>
              <div className="buttons">
                <button className="btn">View</button>
                <button className="btn">Change color</button>
                <button className="btn">Edit</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
