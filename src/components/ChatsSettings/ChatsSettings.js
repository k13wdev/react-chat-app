import volume from '../../assets/icon-volume.svg';
import heart from '../../assets/icon-heart.svg';
import search from '../../assets/icon-search.svg';


const ChatsSettings = () => {
  return (
    <div className='pt-4 px-4'>
      <ul className='grid gap-1'>
        <li className="py-3 pl-4 pr-3 flex items-center gap-2 text-dark-400 bg-white rounded-xl">
          <img src={volume} alt="Mute"/>
          <span>Mute</span>
          <span className='ml-auto text-dark-200'>No</span>
          <button className='text-dark-200'>
            <svg className='transform -rotate-90' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00024 9L12.0002 15L18.0002 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </li>
        <li className="py-3 pl-4 pr-3 flex items-center gap-2 text-dark-400 bg-white rounded-xl">
          <img src={heart} alt="Mute"/>
          <span>Reacted messages</span>
          <span className='ml-auto text-dark-200'>142</span>
          <button className='text-dark-200'>
            <svg className='transform -rotate-90' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00024 9L12.0002 15L18.0002 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </li>
        <li className="py-3 pl-4 pr-3 flex items-center gap-2 text-dark-400 bg-white rounded-xl">
          <img src={search} alt="Mute"/>
          <span>Search</span>
          <button className='ml-auto text-dark-200'>
            <svg className='transform -rotate-90' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00024 9L12.0002 15L18.0002 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ChatsSettings;