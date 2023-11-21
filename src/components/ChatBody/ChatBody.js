import React from 'react';
import ChatBoxOwner from '../ChatBoxOwner/ChatBoxOwner';
import ChatBox from '../ChatBox/ChatBox';

const ChatBody = () => {
  return (
    <div className='py-1 px-4 self-end'>
      <ul className='grid gap-1'>
        <li>
          <ChatBoxOwner/>
        </li>
        <li>
          <ChatBox/>
        </li>

        <li>
          <ChatBox/>
        </li>

        <li>
          <ChatBox/>
        </li>

        <li>
          <ChatBox/>
        </li>

      </ul>
    </div>
  )
}

export default ChatBody;