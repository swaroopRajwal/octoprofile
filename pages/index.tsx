import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Search from './search';

const HomePage: NextPage = () => {
  return(
    <>
      <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/octocat.svg" />
      </Head>
      <Header/>
      <Search/>
    </>
  )
}
export default HomePage;