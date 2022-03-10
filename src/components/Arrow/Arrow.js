import React from 'react'

const Arrow = () => {
  return (
    <button className='absolute right-2 bottom-2 flex justify-center items-center w-10 aspect-square bg-white drop-shadow-md rounded-full'>
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
    </button>
  );
}

export default Arrow