import ChatboxGroup from "../Chatbox/ChatboxGroup";
import Chatbox from "../Chatbox/Chatbox";
import Owner from "../Chatbox/Owner";
import Chatter from "../Chatbox/Chatter";
import { useSelector } from "react-redux";
const ChatBody = () => {
  const { messagesArr } = useSelector((state) => state.socket);
  const { user } = useSelector((state) => state.user);

  return (
    <ChatboxGroup>
      {messagesArr.map((msg, idx) => {
        return (
          <Chatbox key={idx}>
            {msg.authId === user.id ? (
              <Owner text={msg.text} image={msg.image} time={msg.date} />
            ) : (
              <Chatter
                name={msg.authName}
                avatar={msg.avatar}
                text={msg.text}
                image={msg.image}
                time={msg.date}
              />
            )}
          </Chatbox>
        );
      })}
    </ChatboxGroup>
  );
};

export default ChatBody;
