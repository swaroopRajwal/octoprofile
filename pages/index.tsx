import { NextPage } from 'next';
import Head from '../components/Head';
import React from 'react';
import Header from '../components/Header';
import Search from './search';

const HomePage: NextPage = () => {
  return(
    <>
      <Head
        showImage = {true}
      />
      <Header/>
      <Search/>
    </>
  )
}
export default HomePage;