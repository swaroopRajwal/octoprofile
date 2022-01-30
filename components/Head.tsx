import NHead from 'next/head';
import React from 'react';

const Head = () => {
  return(
    <NHead>
      <link rel="icon" href="/octocat.svg" />
      <title>
        OctoProfile
      </title>

      {/* Primary Meta Tags */}
      <meta name="title" content="OctoProfile" />
      <meta 
        name="description"
        content="A nicer look at your github profile."
      />
      <meta name="author" content="Swaroop Rajwal" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://octoprofile-self.vercel.app/" />
      <meta property="og:title" content="OctoProfile" />
      <meta property="og:image" content="/not_search_page.png" />
      <meta 
        property="og:description"
        content="A nicer look at your github profile"
      />
      <meta property="og:site_name" content="OctoProfile" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:url" content="https://octoprofile-self.vercel.app/" />
      <meta property="twitter:title" content="OctoProfile" />
      <meta 
        property="twitter:description"
        content="A nicer look at your github profile"
      />  
      <meta property="twitter:image" content="/not_search_page.png" />
      <link rel="apple-touch-icon" href="/octocat.svg" />
      <link rel="canonical" href="https://octoprofile-self.vercel.app/" />
    </NHead>
  )
}
export default Head;