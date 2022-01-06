import React from 'react';
import { ILangStats } from '../../interfaces';
import Charts from './Charts';
import Repos from './Repos';
import User from './User';


interface Props {
  langData: ILangStats[];
  repoData: any;
  userData: any;
}

const Profile = ({langData, repoData, userData}: Props) => {
  return(
    <div className='flex flex-col items-center gap-10'>
      <User
        data={userData}
      />
      <Charts
        langData={langData}
        repoData={repoData}
      />
      <Repos/>
    </div>
  )
}
export default Profile;