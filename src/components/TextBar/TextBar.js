import { render } from "@testing-library/react";
import { useContext, useState } from "react";
import { SocketContext } from "../../app/context";
import imageToBase64 from 'image-to-base64/browser';

const TextBar = () => {
  const [message, setMessage] = useState({value: ''})
  const socket = useContext(SocketContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(message.value) {
      const data = {
        body: message.value,
      };

      socket.emit('MESSAGE_SEND', data)
      setMessage({value: ''})
    }
  }

  const onChangeHandler = (event) =>  {
    if(event.target.value.trim()) {
      setMessage({value: event.target.value})
    }
  }


  const onInputHandler = (event) => {
    console.log(event.target.files[0 ]);
    imageToBase64(event.target.files[0])
    .then((response) => {
      const data = {
        image: response,
      };
      socket.emit('MESSAGE_SEND', data)
    })
    .catch((error) => console.log(error))
    event.target.value = null
  }

  return (
    <form onSubmit={onSubmitHandler} className="pt-4 pb-9 px-4 flex items-center gap-4 text-dark-200 bg-white">
      <label>
        <input onInput={onInputHandler} className="sr-only" type="file" accept="image/png, image/jpeg"/>        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0001 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.00012 12H20.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </label>
      <input className="p-2 w-full h-10  bg-dark-100 rounded-xl" onChange={onChangeHandler} value={message.value}/>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7.50012" y="2.25" width="9" height="13.5" rx="4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.50012 9.75V11.25C4.50012 15.3921 7.85799 18.75 12.0001 18.75V18.75C16.1423 18.75 19.5001 15.3921 19.5001 11.25V9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.0001 19.5V21.75M12.0001 21.75H15.0001M12.0001 21.75H9.00012" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </form>
  )
}

export default TextBar;