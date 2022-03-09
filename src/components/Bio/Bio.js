import avatar from '../../assets/avatar.png'

const Bio = () => {
  return (
    <section className='-mt-2'>
      <img src={avatar}/>
      <div className='pt-4 pb-5 px-4 bg-white rounded-tl-xl  rounded-tr-xl '>

        <h2 className='mb-1 text-3xl font-bold text-dark-400'>Cat lovers</h2>

        <div className='mb-2 flex gap-2 text-dark-200'>
          <div className='flex items-center gap-1'>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0882 4.75368C10.0882 6.46695 8.71453 7.84072 7.00006 7.84072C5.28616 7.84072 3.9119 6.46695 3.9119 4.75368C3.9119 3.04042 5.28616 1.66724 7.00006 1.66724C8.71453 1.66724 10.0882 3.04042 10.0882 4.75368ZM11.6667 11.35C11.6667 9.76328 9.53092 9.35203 7.00006 9.35203C4.4832 9.35203 2.33339 9.7487 2.33339 11.336V12.4589C2.33339 12.9422 2.72514 13.3339 3.20839 13.3339H7.00006H10.7917C11.275 13.3339 11.6667 12.9422 11.6667 12.4589V11.35Z" fill="currentColor"/>
            </svg>
            <span>4</span>
          </div>
          <div className='flex items-center gap-1'>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72367 7.50041C4.72367 8.74485 5.74237 9.75738 7.0001 9.75738C8.25213 9.75738 9.27083 8.74485 9.27083 7.50041C9.27083 6.25031 8.25213 5.23778 7.0001 5.23778C5.74237 5.23778 4.72367 6.25031 4.72367 7.50041ZM10.3464 4.02728C11.3424 4.79657 12.1903 5.92222 12.7993 7.33071C12.8448 7.43818 12.8448 7.56263 12.7993 7.66445C11.5814 10.4814 9.41311 12.1671 7.0001 12.1671H6.99441C4.58709 12.1671 2.4188 10.4814 1.20091 7.66445C1.15538 7.56263 1.15538 7.43818 1.20091 7.33071C2.4188 4.51374 4.58709 2.83374 6.99441 2.83374H7.0001C8.2066 2.83374 9.3505 3.25233 10.3464 4.02728ZM7.00078 8.90765C7.78045 8.90765 8.41785 8.27411 8.41785 7.49916C8.41785 6.71856 7.78045 6.08502 7.00078 6.08502C6.93249 6.08502 6.86419 6.09068 6.80159 6.10199C6.77883 6.72421 6.26663 7.22199 5.63493 7.22199H5.60647C5.5894 7.3125 5.57802 7.403 5.57802 7.49916C5.57802 8.27411 6.21541 8.90765 7.00078 8.90765Z" fill="currentColor"/>
            </svg>
            <span>2 482</span>
          </div>
        </div>

        <p className='text-dark-400'>Our mission is not to bother you. But we can only share information about what happens with poor animals in this cruel world.</p>
      </div>
    </section>
  )
}

export default Bio;