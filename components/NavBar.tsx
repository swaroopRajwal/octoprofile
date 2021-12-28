import React from 'react';

const NavBar = () => {
  return (
    <div className='fixed top-0 right-0 left-0 z-50 bg-teal px-5 py-1'>
      <div className='flex justify-between items-center max-w-screen-xl mx-auto'>
        <p className='font-semibold text-white title'>0cto-profile</p>
        <a href="https://github.com/swaroopRajwal/octoprofile" target='_blank' className='h-7 w-7 sm:h-9 sm:w-9 lg:h-10 lg:w-10'>
          <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 49.5V40.7925C36.0844 39.7196 35.9395 38.641 35.5748 37.6285C35.2101 36.616 34.6341 35.6927 33.885 34.92C40.95 34.1325 48.375 31.455 48.375 19.17C48.3744 16.0286 47.1661 13.0077 45 10.7325C46.0257 7.98412 45.9532 4.94627 44.7975 2.24998C44.7975 2.24998 42.1425 1.46248 36 5.57998C30.843 4.18233 25.407 4.18233 20.25 5.57998C14.1075 1.46248 11.4525 2.24998 11.4525 2.24998C10.2968 4.94627 10.2243 7.98412 11.25 10.7325C9.06779 13.0246 7.85818 16.0728 7.875 19.2375C7.875 31.4325 15.3 34.11 22.365 34.9875C21.6247 35.7524 21.0538 36.6646 20.6894 37.6648C20.325 38.665 20.1753 39.7306 20.25 40.7925V49.5M20.25 42.75C9 46.125 9 37.125 4.5 36L20.25 42.75Z" stroke="#DEEEEA" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  )
}
export default NavBar;