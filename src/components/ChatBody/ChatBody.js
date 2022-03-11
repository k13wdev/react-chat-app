import ChatboxGroup from '../Chatbox/ChatboxGroup';
import Chatbox from '../Chatbox/Chatbox';
import Owner from '../Chatbox/Owner';
import Chatter from '../Chatbox/Chatter';
import { useContext, useEffect } from 'react';
import { SocketContext } from '../../app/context';
import { useDispatch, useSelector  } from 'react-redux';
import { pushMessage } from '../../feature/messages/messagesSlice';


const ChatBody = () => {
  const socket = useContext(SocketContext);
  const dispatch = useDispatch();
  const { messagesArr } = useSelector(state => state.messages);

  useEffect(() => {
    socket.on("MESSAGE_NEW", (data) => {
      dispatch(pushMessage(data))
    });
    return () => {
      socket.off("MESSAGE_NEW")
    }
  }, [])

  return (
    <ChatboxGroup>
      {
        messagesArr.map((msg, idx) => {
          const message = msg.socketId === socket.id
            ? <Owner text={msg.body} time={msg.date} image={msg.image} />
            : <Chatter text={msg.body} time={msg.date} name={msg.auth} avatar={msg.avatar} image={msg.image}/>

          return (
            <Chatbox key={idx}>
              {message}
            </Chatbox>
          )
        })
      }
    </ChatboxGroup>
  )
}

export default ChatBody;