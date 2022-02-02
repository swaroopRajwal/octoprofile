import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AppWrapper from '../components/AppWrapper';

const ErrorPage = () => {

  const [count, setCount] = useState(5)
  const router = useRouter();

  setInterval(() => {setCount(count-1)}, 1000)

  useEffect(() => {
    if(count === 0) router.push('/'); 
  }, [count])


  return(
    <AppWrapper>
      <p className='title text-white ml-3'>
        Page not found 
        Redirecting you to the home page....
      </p> 
    </AppWrapper>
  )
}
export default ErrorPage;