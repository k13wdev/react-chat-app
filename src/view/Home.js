import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { socket } from '../app/context';

const Home = () => {
  const { user, loading } = useSelector(state => state.user);
  const navigate = useNavigate();

  if(loading === 'pending') {
    return (
      <div className='grid place-items-center h-screen'>
        Loading...
      </div>
    )
  }

  const onClickHandler = () => {
    socket.emit('USER_JOIN', user)
    navigate('/chat');
  }

  return (
    <div className='grid place-items-center h-screen'>
      <button className="py-4 px-12 bg-primary-400 text-3xl font-bold text-white drop-shadow-md rounded-lg transition-transform hover:scale-125 " onClick={onClickHandler}>Sigin</button>
    </div>
  )
}

export default Home