import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavBarChat = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const onClickHandler = () => {
    dispatch({type: "SOCKET/USER_LEAVE", payload: user.room})
    navigate("/");
  };

  return (
    <nav className="pt-10 pb-1 pl-4 pr-2 flex justify-between items-center bg-white">
      <button className="text-primary-400" onClick={onClickHandler}>
        <svg
          className="transform rotate-90"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00024 9L12.0002 15L18.0002 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <h1 className="text-dark-400">{user.room}</h1>
      <button
        onClick={() => {
          navigate("/profile");
        }}
      >
        <img className="w-10 h-10 object-cover rounded-md" src={user.avatar} />
      </button>
    </nav>
  );
};

export default NavBarChat;
