import React, { useEffect, useState } from 'react';
import { ILangStats, IRepoData, IUserData } from '../../interfaces';
import Charts from './Charts';
import Repos from './Repos';
import User from './User';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import FlipMove from 'react-flip-move';

interface Props {
  langData: ILangStats[] | undefined;
  repoData: IRepoData[] | undefined;
  userData: IUserData | undefined;
}

interface DropDownProps {
  selection: string;
  setSelection: React.Dispatch<React.SetStateAction<string>>;
}

let selections = ['stars', 'forks']

const DropDown = ({selection, setSelection}: DropDownProps) => {
  return (
    <DropdownMenu.Root>
    <DropdownMenu.Trigger className='border-2 border-teal flex justify-between w-36 items-center px-2 rounded-md focus-within:outline-none'>
      <span className='text-white sub-title space hover:cursor-pointer'>{selection}</span>
      <img src="/arrowDown.svg" alt=" " />
    </DropdownMenu.Trigger>

    <DropdownMenu.Content className='border-2 border-teal mt-2 py bg-black w-36 items-center rounded-md'>
      {selections.map(item => {
        return (
          <DropdownMenu.Item
            onClick={() => setSelection(item)}
            key={item}
            className='text-white sub-title space text-center focus-within:outline-none focus-within:cursor-pointer'
          >
            {item}
          </DropdownMenu.Item>
        )
      })}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
  )
}

const property = (s: string) => {
  if(s === 'stars') return 'stargazers_count'
  else return 'forks_count'
}

const Profile = ({langData, repoData, userData}: Props) => {

  // let temp = repo
  const [showTheseRepos, setShowTheseRepos] = useState<IRepoData[] | undefined>((repoData || []).sort((a:IRepoData, b:IRepoData) => b.stargazers_count - a.stargazers_count).slice(0, 8));
  const [selection, setSelection] = useState<string>('stars');

  useEffect(() => {
    setShowTheseRepos((repoData || []).sort((a:IRepoData, b:IRepoData) => b[property(selection)] - a[property(selection)]).slice(0, 8))
  }, [selection])
  
  return(
    <div className='flex flex-col items-center gap-10'>
      <User
        data={userData}
      />
      <Charts
        langData={langData}
        repoData={repoData}
      />
      <div className='flex flex-col sm:flex-row justify-start items-center gap-2'>
        <p className='title text-teal font-bold'>Top Repositories <span className='text-white font-normal'>by</span></p>
        <DropDown
          selection={selection}
          setSelection={setSelection}
        />
      </div>
      <div>
        <FlipMove
          duration='400'
          delay='0'
          easing='ease-in-out'
          staggerDurationBy='0'
          staggerDelayBy='300'
          typeName='ul'
          className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-stretch'
        >
          {/* <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'> */}
            {(showTheseRepos || []).map((item: any) => {
              return(
                <div
                  key={item.id}
                  className=''
                >
                  <Repos
                    name={item.name}
                    description={item.description}
                    forks={item.forks_count}
                    stars={item.stargazers_count}
                    language={item.language}
                    url={item.html_url}
                  />
                </div>
              )
            })}
          {/* </div> */}
        </FlipMove>
      </div>
    </div>
  )
}
export default Profile;