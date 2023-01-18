import { Outlet } from "react-router-dom";

const Buttons = ({ setBigView, bigView }) => {
  // const [bigView, setBigView] = useState(false);
  return (
    <>
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
    </>
  );
};
export default Buttons;
