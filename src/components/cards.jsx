
function Cards({ showingPosts}) {
  
  return (
    <div className="cards">
      {showingPosts.map(({ title, body, id, name, phone, email, url }) => {
        return (
          <div className="card app-card" key={id}>
            <div className="card-body">
              <h5 className="card-title title">{title||name}</h5>
              <img className="photo-img" src={url} />
              <p className="card-text">{body||phone}</p>
              <p className="card-text">{email}</p>
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
