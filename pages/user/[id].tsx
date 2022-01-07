import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Profile from '../../components/Profile/Profile';
import { ILangStats } from '../../interfaces';
import {mockRepoData, mockUserData, mockLangData} from '../../utils/mockData';
import axios from 'axios';
import toast from 'react-hot-toast';
import GhPolyglot from 'gh-polyglot';

const UserProfile: NextPage = () => {
  const router = useRouter();
  const id = router.query?.id as string;
  const [repoData, setRepoData] = useState(mockRepoData.filter(item => !item.fork));
  const [userData, setUserData] = useState(mockUserData);
  const [langData, setLangData] = useState<ILangStats[]>(mockLangData);

  // todo get the user 
  const [gotUser, setGotUser] = useState<boolean>(false)
  const getUser = (id: string) => {
    toast.loading('getting user', {id: 'user'});
    axios.get(`https://api.github.com/users/${id}`)
      .then(res => {
        console.log(res.data);
        setUserData(res.data);
        setGotUser(true);
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
  const [gotLangStats, setGotLangStats] = useState<boolean>(false);
  const getLangStats = (id: string) => {
    toast.loading('getting language stats', {id: 'lang'})
    let user = new GhPolyglot(id);
    user.userStats((err: any, stats: any) => {
      if(err) {
        toast.error('something went wrong', {id: 'lang'});
        return;
      }
      setLangData(stats)
      setGotLangStats(true);
      toast.success('got language stats', {id: 'lang'});
    })
  } 

  useEffect(() => {
    getUser(id);
    getLangStats(id);
  }, [id])
  return(
    <div>
      {gotUser && gotLangStats &&
      <Profile
        langData={langData}
        repoData={repoData}
        userData={userData}
      />
      }
    </div>
  )
}
export default UserProfile;