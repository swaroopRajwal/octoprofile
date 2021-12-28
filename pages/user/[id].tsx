import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const UserProfile: NextPage = () => {
  const router = useRouter();
  const {id} = router.query;

  useEffect(() => {
    console.log(id);
  }, [id])
  return(
    <div>
      <p>the user you searched for is (:</p>
      <p>{id}</p>:
    </div>
  )
}
export default UserProfile;