import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [])
  return(
    <>
      
    </>
  )
}
export default Redirect;