import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPhotos } from "../redux/action/actionCreator";
import Cards from "../components/cards";

const Photos=()=>{
    const { photos } = useSelector((state) => state);
    const [countPhoto, setCountPhoto] = useState(3);
    const showingPosts =photos ? photos.slice(0, countPhoto) : [];

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPhotos());
    }, []);

return(
    <>
    <Cards showingPosts={showingPosts}/>
    {countPhoto<photos.length ? 
        <button
        className="btn btn-info btn_footer"
        onClick={() => {
            setCountPhoto(countPhoto + 3);
        }}
      >
        Show more
      </button>
      :
      ""
    }</>
    
)
};
export default Photos;