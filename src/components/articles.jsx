import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import rootSaga from '../redux/sagas';
import { getPosts } from "../redux/action/actionCreator";

// const handlePosts = () => {
//   dispatch(getPosts());
// }

function Articles() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
}

export default Articles;
