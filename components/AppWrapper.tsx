import { NextPage } from 'next';
import React from 'react';
import NavBar from './NavBar';

const AppWrapper: NextPage = (props) => {
  return(
    <div className='bg-black min-h-screen pt-12 sm:pt-16 flex flex-col justify-center debug-screens overflow-auto pb-10'>
      <NavBar/>
      {props.children}
      {/* <p className='text-cream text-lg absolute bottom-px sm:bottom-3 left-2/4 transform -translate-x-2/4 z-40 text-center'>
        A project by <a href="https://github.com/swaroopRajwal" target='_blank' className='underline text-center font-semibold'>Swaroop Rajwal</a>
      </p> */}
    </div>
  )
}
export default AppWrapper;