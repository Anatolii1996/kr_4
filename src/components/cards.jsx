import { connect } from "react-redux";

function Cards() {
  return (
    <div className="card app-card">
       
        <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
       
      
    </div>
  );
}
const mapStateToProps = ({ posts }) => {
  return { posts };
};

export default connect(mapStateToProps)(Cards);
