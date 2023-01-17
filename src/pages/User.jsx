import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../redux/action/actionCreator";
import Cards from "../components/cards";
import Modal from "../modal/modal";
import Buttons from "../components/buttons";

const User = () => {
  const { users } = useSelector((state) => state);
  const [countUser, setCountUser] = useState(3);
  const [modalActive, setModalActive] = useState(true);
  const showingPosts = users ? users.slice(0, countUser) : [];
  const [bigView, setBigView] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <div className="home-header">
        <div className="home-title"></div>
        <Buttons bigView={bigView} setBigView={setBigView} />
      </div>

      <Cards
        showingPosts={showingPosts}
        bigView={bigView}
        setBigView={setBigView}
      />
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
