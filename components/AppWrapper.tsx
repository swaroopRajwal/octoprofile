import { NextPage } from 'next';
import React from 'react';
import NavBar from './NavBar';
import Head from './Head';
let env = process.env.NODE_ENV || "development";

const AppWrapper: NextPage = (props) => {
  return(
    <div className={`bg-black min-h-screen pt-12 sm:pt-16 flex flex-col justify-center overflow-auto pb-10 ${env === "development" ? ' debug-screens ' : ' '}`}>
      <NavBar/>
      {props.children}
    </div>
  )
}
export default AppWrapper;