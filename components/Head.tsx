import NHead from 'next/head';
import React from 'react';

interface Props {
  showImage: boolean;
  showUsername: boolean;
  showDescription: boolean;
  showTitle: boolean;
  changeUrl: boolean;
  userName?: string;
  following?: number;
  followers?: number;
  repos?: number;
}

const defaultDescription = "Have a nicer look at your github profile, this is an app made on top of github users api, biult with nextjs, typescript and chartjs.";
const defaultUrl = "https://0ctoprofile.vercel.app/"
const defaultTitle = "OctoProfile";

const buildDescription = (username?: string, following?: number, followers?: number, repos?: number) => {
  return `Have a look at the github profile of ${username} who has ${followers} followers, is following ${following} users and has ${repos} public repositories.`
}

const buildUrl = (username?: string) => {
  return `https://0ctoprofile.vercel.app/user/${username}`; 
}

const Head = (props: Props) => {
  return(
    <NHead>
      <link rel="icon" href="/octocat.svg" />
      <title>
        {props.userName || defaultTitle} 
      </title>
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content={props.userName || defaultTitle}/>
      <meta name="description" content={buildDescription(props.userName, props.following, props.followers, props.repos) || defaultDescription}/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={buildUrl(props.userName) || defaultUrl}/>
      <meta property="og:title" content={props.userName || defaultTitle}/>
      <meta property="og:description" name="description" content={buildDescription(props.userName, props.following, props.followers, props.repos) || defaultDescription}/>
      {props.showImage && <meta property="og:image" content="/not_search_page.png"/>}

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content={buildUrl(props.userName) || defaultUrl}/>
      <meta property="twitter:title" content={props.userName || defaultTitle}/>
      <meta property="twitter:description" name="description" content={buildDescription(props.userName, props.following, props.followers, props.repos) || defaultDescription}/>
      {props.showImage && <meta property="twitter:image" content="/not_search_page.png"/>}
    </NHead>
  )
}
export default Head;