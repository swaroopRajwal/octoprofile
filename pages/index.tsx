import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Search from './search';

const HomePage: NextPage = () => {
  return(
    <>
      <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/octocat.svg" />
          
      </Head>
      <Search/>
    </>
  )
}
export default HomePage;