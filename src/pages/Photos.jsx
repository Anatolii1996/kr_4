import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPhotos } from "../redux/action/actionCreator";

const Photos=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPhotos());
    }, []);

return(
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem nulla explicabo, perferendis ducimus quod voluptatum esse consequatur aspernatur quis quibusdam sequi neque porro voluptatibus distinctio optio quidem sed reprehenderit! In!</p>
)
};
export default Photos;