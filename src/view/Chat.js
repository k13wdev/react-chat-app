import ChatBody from "../components/ChatBody/ChatBody";
import NavBarChat from "../components/NavBarChat/NavBarChat";
import TextBar from "../components/TextBar/TextBar";

const Chat = () => {

  return (
    <div className="chat overflow-hidden">
      <NavBarChat />
      <ChatBody />
      <TextBar />
    </div>
  );
};

export default Chat;
