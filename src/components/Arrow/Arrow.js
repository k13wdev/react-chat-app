import React from 'react'

const Arrow = ({onClickHandler}) => {
  return (
    <button onClick={onClickHandler} className='absolute right-2 bottom-24 flex justify-center items-center w-10 aspect-square bg-white drop-shadow-md rounded-full'>
      <svg
        className=""
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
      {/* <span className='absolute bottom-8 px-2 flex items-center justify-center aspect-video text-xs text-white bg-primary-400 rounded-3xl'>14</span> */}
    </button>
  );
}

export default Arrow