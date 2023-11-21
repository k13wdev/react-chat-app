import React from 'react';
import avatar from '../../assets/avatar.png';

const ChatBox = () => {
  return (
    <div className='flex gap-2'>
      <img className='w-10 aspect-square rounded-md self-end' src={avatar}/>
      <div className='pt-4 pb-8 px-4 mr-auto w-64 bg-white rounded-xl rounded-bl-md'>
        <h3 className='mb-1  text-sm text-primary-400'>Cameron Williamson</h3>
        <p className='text-dark-400 '>I want to share with you a photo of my plant that I took today. I hope you will like it.</p>
      </div>
    </div>
  )
}

export default ChatBox;