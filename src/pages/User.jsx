import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../redux/action/actionCreator";
import Cards from "../components/cards";

const User = () => {
  const { users } = useSelector((state) => state);
  const [countUser, setCountUser] = useState(3);
  const showingPosts = users ? users.slice(0, countUser) : [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <Cards showingPosts={showingPosts} />
      {countUser < users.length ? (
        <button
          className="btn btn-info btn_footer"
          onClick={() => {
            setCountUser(countUser + 3);
          }}
        >
          Show more
        </button>
      ) : (
        ""
      )}
    </>
  );
};
export default User;
