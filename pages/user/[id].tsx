import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Profile from '../../components/Profile/Profile';
import { ILangStats } from '../../interfaces';
import {mockRepoData, mockUserData, mockLangData} from '../../utils/mockData';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserProfile: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const [repoData, setRepoData] = useState(mockRepoData.filter(item => !item.fork));
  const [userData, setUserData] = useState();
  const [langData, setLangData] = useState<ILangStats[]>(mockLangData);

  // todo get the user 
  const [gotUser, setGotUser] = useState<boolean>(false)
  const getUser = (id: string | string[] | undefined) => {
    toast.loading('getting user', {id: 'user'});
    axios.get(`https://api.github.com/users/${id}`)
      .then(res => {
        console.log(res.data);
        setUserData(res.data);
        toast.success('got user', {id: 'user'})
      }) .catch(err => {
        console.log(err.response.data.message);
        if(err.response.data.message === 'Not Found') {
          toast.error('user not found', {id: 'user'})
        } else {
          toast.error('something went wrong', {id: 'user'});
        }
      })
  }

  //todo get lang stats about the user
  const [gotLangStats, setGotLangStats] = useState<boolean>(true);
  const getLangStats = (id: string | string[] | undefined) => {
    
  } 

  useEffect(() => {
    // console.log(id);
    console.log('fetching the user');
    getUser(id);
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