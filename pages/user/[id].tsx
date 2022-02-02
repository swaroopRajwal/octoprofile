import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Profile from '../../components/Profile/Profile';
import { ILangStats, IRepoData, IUserData } from '../../interfaces';
import {mockRepoData, mockUserData, mockLangData} from '../../utils/mockData';
import axios from 'axios';
import toast from 'react-hot-toast';
import GhPolyglot from 'gh-polyglot';
import Head from '../../components/Head';

const UserProfile: NextPage = () => {
  const router = useRouter();
  const id = router.query?.id as string;
  const [repoData, setRepoData] = useState<IRepoData[] | undefined>();
  const [userData, setUserData] = useState<IUserData | undefined>();
  const [langData, setLangData] = useState<ILangStats[] | undefined>();
  // const [repoData, setRepoData] = useState(mockRepoData)
  // const [userData, setUserData] = useState(mockUserData);
  // const [langData, setLangData] = useState(mockLangData);

  // todo get the user 
  const [gotUser, setGotUser] = useState<boolean>(false)
  const getUser = (id: string) => {
    toast.loading('getting user', {id: 'user'});
    axios.get(`https://api.github.com/users/${id}`)
      .then((res) => {
        setUserData(res.data);
        if(res.data.public_repos === 0) {
          toast.error('user has no repositories', {id: 'user'})
          router.push('/')
          // return;
        } else {
          setGotUser(true);
          toast.success('got user', {id: 'user'})
          getRepoData(id);
        }
      }) .catch(err => {
        if(err.response.data.message === 'Not Found') {
          toast.error('user not found', {id: 'user'})
        } else {
          toast.error('something went wrong', {id: 'user'});
        }
        router.push('/')
      })
  }

  //todo get lang stats about the user
  const [gotLangStats, setGotLangStats] = useState<boolean>(false);
  const getLangStats = (id: string) => {
    toast.loading('getting language stats', {id: 'lang'})
    let user = new GhPolyglot(id);
    user.userStats((err: any, stats: ILangStats[]) => {
      if(err) {
        toast.error('something went wrong', {id: 'lang'});
        router.push('/')
        return;
      }
      setLangData(stats)
      setGotLangStats(true);
      toast.success('got language stats', {id: 'lang'});
    })
  } 

  //todo get the repo data
  const [gotRepoData, setGotRepoData] = useState<boolean>(false);
  const getRepoData = (id: string) => {
    toast.loading('getting repos', {id: 'repo'});
    axios.get(`https://api.github.com/users/${id}/repos?per_page=100`)
      .then(res => {
        // console.log(res.data.filter((item: IRepoData) => !item.fork));
        if(res.data.filter((item: IRepoData) => !item.fork).length === 0) {
          console.log();
          toast.error('user has no repositories', {id: 'repo'});
          router.push('/');
        } else {
          getLangStats(id);
          setRepoData(res.data);
          setGotRepoData(true);
          toast.success('got repos', {id: 'repo'})
        }
      }). catch(err => {
        toast.error('something went wrong', {id: 'repo'});
        router.push('/')
      })
  }

  //todo get the rate limit :')
  const [rateLimit, setRateLimit] = useState<string>('');
  const [showRateLimit, setShowRateLimit] = useState<boolean>(false);
  const getRateLimit = () => {
    axios.get('https://api.github.com/rate_limit')
      .then(res => {
        if(res.data.rate.remaining === 0) {
          toast.error('ping rate exhausted, please check back later');
          router.push('/');
          return;
        }
        setRateLimit(`${res.data.rate.remaining}/${res.data.rate.limit}`);
        setShowRateLimit(true);
      }) .catch(err => {
        setShowRateLimit(false)
      })
  }

  useEffect(() => {
    if(!id) return;
    getRateLimit();
    getUser(id);
    // getLangStats(id);
    // getRepoData(id);
  }, [id])
  return(
    <div className='relative'>
      <Head
        showImage = {false}
        userName = {id} 
      />
      {showRateLimit && gotUser && gotLangStats && gotRepoData && <p className='title font-bold text-white absolute left-3 top-0'>{rateLimit}</p>}
      {gotUser && gotLangStats && gotRepoData &&
        <Profile
          langData={langData}
          repoData={(repoData || []).filter((item: any) => !item.fork)}
          userData={userData}
        />
      } 
      {gotUser && gotLangStats && gotRepoData &&
        <p className='text-cream mt-10 text-lg text-center'>
          A project by <a href="https://github.com/swaroopRajwal" target='_blank' rel="noreferrer" className='underline text-center font-semibold'>Swaroop Rajwal</a>
        </p>
      } 
    </div>
  )
}
export default UserProfile;