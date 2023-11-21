const TextBar = () => {
  return (
    <form className="pt-4 pb-9 px-4 flex items-center gap-4 text-dark-200 bg-white">
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0001 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.00012 12H20.0001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <textarea className="p-2 w-full h-10  bg-dark-100 rounded-xl"></textarea>
      <button>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7.50012" y="2.25" width="9" height="13.5" rx="4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.50012 9.75V11.25C4.50012 15.3921 7.85799 18.75 12.0001 18.75V18.75C16.1423 18.75 19.5001 15.3921 19.5001 11.25V9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.0001 19.5V21.75M12.0001 21.75H15.0001M12.0001 21.75H9.00012" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </form>
  )
}

export default TextBar;