import React from 'react';
import { ChartWrapper } from './Charts/Helpers';

interface RepoWrapperProps {
  children: React.ReactNode;
}

const RepoWrapper: React.FC<RepoWrapperProps> = ({children}) => {
  return(
    <div className='bg-white p-5 rounded-md w-72'>
      {children}
    </div>
  )
}

const Repos = () => {
  return(
    <RepoWrapper>
      <p className='title text-black font-bold'>this is a repo container (:</p>
    </RepoWrapper>
  )
}
export default Repos;