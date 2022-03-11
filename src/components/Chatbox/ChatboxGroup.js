const ChatboxGroup = ({children}) => {
  return (
    <div className='grid py-1 px-4 self-end h-full overflow-y-scroll'>
      <ul className='grid gap-1 self-end'>
        {children}
      </ul>
    </div>
  )
}

export default ChatboxGroup;