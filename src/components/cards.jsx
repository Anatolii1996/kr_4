import { useState } from "react";

function Cards({ showingPosts, bigView }) {
  const [currentColor, setCurrentColor] = useState(0);
  const colorClasses=["", 'red', "blue" ];

  const changeColor =()=>{
    if (currentColor>=2){
      setCurrentColor(0);
    }else{
       setCurrentColor(currentColor+1)
    }};
   

  return (
    <div className="cards">
      {showingPosts.map(({ title, body, id, name, phone, email, url }) => {
        return (
          <div className={`card app-card ${bigView ? "big" : ""} ${colorClasses[currentColor]}`} key={id}>
            <div className="card-body">
              <h5 className="card-title title">{title || name}</h5>
              <img className="photo-img" src={url} />
              <p className="card-text">{body || phone}</p>
              <p className="card-text">{email}</p>
              <div className="buttons">
                <button className="btn">View</button>
                <button className="btn" onClick={()=>{changeColor()} 
                }>Change color</button>
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
