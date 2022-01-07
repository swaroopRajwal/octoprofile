import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router])
  return(
    <>
      
    </>
  )
}
export default Redirect;