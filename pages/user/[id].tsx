import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Profile from '../../components/Profile/Profile';
import { ILangStats } from '../../interfaces';
import {mockRepoData, mockUserData, mockLangData} from '../../utils/mockData';

const UserProfile: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const [repoData, setRepoData] = useState(mockRepoData.filter(item => !item.fork));
  const [userData, setUserData] = useState(mockUserData);
  const [langData, setLangData] = useState<ILangStats[]>(mockLangData);

  useEffect(() => {
    console.log(id);
  }, [id])
  return(
    <div>
      <Profile
        langData={langData}
        repoData={repoData}
        userData={userData}
      />
    </div>
  )
}
export default UserProfile;