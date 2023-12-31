import { useNavigate } from 'react-router-dom';

const NavBarProfile = () => {
  const navigate = useNavigate();

  return (
    <nav className="absolute inset-x-0 pt-14 pb-9 px-6 flex justify-between text-white bg-gradient-to-b from-dark-400 to-transparent">
      <button onClick={() => {navigate('/chat')}}>
        <svg className='transform rotate-90' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.00024 9L12.0002 15L18.0002 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button>
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.66153 8.01769H4.78547C2.87467 8.01769 1.32538 9.56699 1.32538 11.4778L1.32538 16.0552C1.32538 17.9651 2.87467 19.5144 4.78547 19.5144H15.2362C17.147 19.5144 18.6963 17.9651 18.6963 16.0552V11.4684C18.6963 9.56323 17.1517 8.01769 15.2465 8.01769H14.3611" stroke="currentColor" strokeWidth="1.40845" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.0107 1.63872V12.9448" stroke="currentColor" strokeWidth="1.40845" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.27356 4.38843L10.0106 1.63913L12.7487 4.38843" stroke="currentColor" strokeWidth="1.40845" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </nav>
  )
}

export default NavBarProfile;