import React from 'react';
import { ChartWrapper } from './Charts/Helpers';
import langColor from '../../utils/langColors';
interface RepoWrapperProps {
  children: React.ReactNode;
}

interface Props {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string
}

const RepoWrapper: React.FC<RepoWrapperProps> = ({children}) => {
  return(
    <div className='bg-white p-5 rounded-md w-72 h-36 grid grid-cols-1'>
      {children}
    </div>
  )
}

const Repos = ({name, description, language, stars, forks, url}: Props) => {
  return(
    <RepoWrapper>
      <div className='flex justify-start items-center gap-2 mb-4'>
        <img src="/repoIcon.svg" alt=" " />
        <p className='sub-title space truncate'>{name}</p>
      </div>
      <p className='mb-4 sub-title text-[#6C606C] truncate'>{description}</p>
      <div className='flex justify-between items-center'> 
        <div className='flex gap-3 items-center'>
          {language && 
          <div className='flex items-center gap-1'>
            <div className='rounded-full h-3 w-3' style={{backgroundColor: langColor[language]}}/>
            <p className='repo-stat text-[#6C606C]'>{language}</p>
          </div>}
          <div className='flex items-center gap-1'>
            <img src="/star.svg" alt=" " />
            <p className='repo-stat text-[#6C606C]'>{stars}</p>
          </div>
          <div className='flex items-center gap-1'>
            <img src="/fork.svg" alt=" " />
            <p className='repo-stat text-[#6C606C]'>{forks}</p>
          </div>
        </div>
        <a href={url} target='_blank' rel='noreferrer'>
          <img src="/goto.svg" alt=" " />
        </a>
      </div>
    </RepoWrapper>
  )
}
export default Repos;