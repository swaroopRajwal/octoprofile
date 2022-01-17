import React from 'react';
import { IUserData } from '../../interfaces';

interface Props {
  data: IUserData | undefined;
}

interface BoxProps {
  label: string | undefined;
  value: number | undefined;
}

const Box = ({label, value}: BoxProps) => {
  return (
    <div className='bg-teal flex flex-col items-center h-20 w-20 sm:h-24 sm:w-24 rounded-sm justify-center'>
      <p className='sm:text-lg lg:text-xl text-white font-semibold'>{value}</p>
      <p className='text-sm sm:text-base font-light lg:font-normal text-white'>{label}</p>
    </div>
  )
}

const User = ({data}: Props) => {
  return(
    <div className='flex flex-col items-center gap-4'>
      <img src={(data || {}).avatar_url} alt="" className='h-36 w-36 rounded-full border-4 border-teal'/>
      <div className='flex flex-col items-center'>
        <a href={(data || {}).html_url} rel='noreferrer' target='_blank' className='title text-cream font-bold space tracking-wider underline underline-offset-4'>@{(data || {}).login}</a>
        <p className='sub-title text-teal font-light tracking-wider'>{(data || {}).name}</p>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <Box
          label='followers'
          value={(data || {}).followers}
        />
        <Box
          label='repos'
          value={(data || {}).public_repos}
        />
        <Box
          label='following'
          value={(data || {}).following}
        />
      </div>
    </div>
  )
}
export default User;