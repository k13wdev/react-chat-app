import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toBase64 } from "../../app/helpers";

const TextBar = () => {
  const {user} = useSelector((state) => state.user);
  const {typing} = useSelector((state) => state.socket);
  const [message, setMessage] = useState({ value: "", image: "" });
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (message.value || message.image) {
      dispatch({ type: "SOCKET/SEND_MESSAGE", payload: { ...message } });
      setMessage({ value: "", image: "" });
      dispatch({type: "SOCKET/SEND_USER_TYPING", payload: {name: user.name, typing: false}})
    }
  };

  const onChangeHandler = (event) => {
    setMessage({ ...message, value: event.target.value.trim() });
    dispatch({type: "SOCKET/SEND_USER_TYPING", payload: {name: user.name, typing: true}});
  };

  const onInputHandler = async (event) => {
    const file = event.target.files[0];
    const imageBase64 = await toBase64(file);
    setMessage({ ...message, image: imageBase64 });
    event.target.value = null;
  };

  return (
    <div className="pt-4 pb-9 px-4 grid gap-2 place-items-center bg-white">
      {typing}
      <form
        onSubmit={onSubmitHandler}
        className="flex items-center gap-4 text-dark-200 "
      >
        <label>
          <input
            onInput={onInputHandler}
            className="sr-only"
            type="file"
            accept="image/png, image/jpeg"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0001 4V20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.00012 12H20.0001"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <input
          onChange={onChangeHandler}
          value={message.value}
          placeholder="Type something..."
          className="p-2 w-full h-10  bg-dark-100 rounded-xl placeholder:text-center"
        />
      </form>
      {message.image ? (
        <img
          src={message.image}
          className="w-10 aspect-square object-cover rounded-md"
        />
      ) : null}
    </div>
  );
};

export default TextBar;
