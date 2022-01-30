import NHead from 'next/head';
import React from 'react';

const Head = () => {
  return(
    <NHead>
      <link rel="icon" href="/octocat.svg" />
      <title>
        OctoProfile
      </title>
      {/* <!-- Primary Meta Tags --> */}
      
      <meta name="title" content="OctoProfile"/>
      <meta name="description" content="have a nicer look at your github profile, this is an app made on top of github users api, biult with nextjs, typescript and chartjs."/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://0ctoprofile.vercel.app/"/>
      <meta property="og:title" content="OctoProfile"/>
      <meta property="og:description" content="have a nicer look at your github profile, this is an app made on top of github users api, biult with nextjs, typescript and chartjs."/>
      <meta property="og:image" content="/not_search_page.png"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://0ctoprofile.vercel.app/"/>
      <meta property="twitter:title" content="OctoProfile"/>
      <meta property="twitter:description" content="have a nicer look at your github profile, this is an app made on top of github users api, biult with nextjs, typescript and chartjs."/>
      <meta property="twitter:image" content="/not_search_page.png"/>
    </NHead>
  )
}
export default Head;