const Tags = () => {
  return (
    <div className="pl-4 pb-4 overflow-hidden bg-white">
      <ul className="flex gap-2 overflow-y-scroll no-scrollbar text-dark-400">
        <li><button className="py-3 pl-4 pr-5 bg-white border border-dark-100 rounded-lg">Animals</button></li>
        <li><button className="py-3 pl-4 pr-5 bg-white border border-dark-100 rounded-lg">Nature</button></li>
        <li><button className="py-3 pl-4 pr-5 bg-white border border-dark-100 rounded-lg">Entertainment</button></li>
        <li><button className="py-3 pl-4 pr-5 bg-white border border-dark-100 rounded-lg">Entertainment</button></li>
      </ul>
    </div>
  )
}

export default Tags;