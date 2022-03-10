import animals from '../../assets/icon-animals.svg';
import nature from '../../assets/icon-nature.svg';
import entertainment from '../../assets/icon-entertainment.svg';

const Tags = () => {
  return (
    <div className="pl-4 pb-4 overflow-hidden bg-white">
      <ul className="flex gap-2 overflow-y-scroll no-scrollbar text-dark-400">
        <li className=' flex-shrink-0'>
          <button className="flex gap-3 py-3 pl-4 pr-5 bg-white border border-dark-100 rounded-lg">
            <img src={animals}/>
            Animals
          </button>
        </li>
        <li className=' flex-shrink-0'>
          <button className="flex gap-3 py-3 pl-4 pr-5 bg-white border border-dark-100 rounded-lg">
            <img src={nature}/>
            Nature
          </button>
        </li>
        <li className=' flex-shrink-0'>
          <button className="flex gap-3 py-3 pl-4 pr-5 bg-white border border-dark-100 rounded-lg">
            <img src={entertainment}/>
            Entertainment
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Tags;