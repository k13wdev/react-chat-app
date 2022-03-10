import Arrow from "../Arrow/Arrow";

const ChatboxGroup = ({children}) => {
  return (
    <div className='relative py-1 px-4 self-end'>
      <ul className='grid gap-1'>
        {children}
      </ul>
      <Arrow/>
    </div>
  )
}

export default ChatboxGroup;