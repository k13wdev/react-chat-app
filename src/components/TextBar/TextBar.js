import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { SocketContext } from "../../app/context";
import { toBase64 } from "../../app/helpers";
import { MESSAGE } from "../../feature/socket/socketSlice";
const TextBar = () => {
  const [message, setMessage] = useState({ value: "" });
  // const socket = useContext(SocketContext);
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (message.value) {
      const data = {
        body: message.value,
      };
      /* socket.emit("MESSAGE", data); */
      dispatch(MESSAGE(data))
      setMessage({ value: "" });
    }
  };

  const onChangeHandler = (event) => {
    setMessage({ value: event.target.value.trim() });
  };

  const onInputHandler = async (event) => {
    const file = event.target.files[0];
    const imageBase64 = await toBase64(file);
    const data = {
      image: imageBase64,
    };
    // socket.emit("MESSAGE", data);
    event.target.value = null;
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="pt-4 pb-9 px-4 flex items-center gap-4 text-dark-200 bg-white"
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
        className="p-2 w-full h-10  bg-dark-100 rounded-xl placeholder:text-center"
        onChange={onChangeHandler}
        value={message.value}
        placeholder="Type something..."
      />

    </form>
  );
};

export default TextBar;
