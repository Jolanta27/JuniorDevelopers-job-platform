import React from 'react';
import { useRouter } from 'next/router';


const SignedUserPage: React.FC = () => {
  const router = useRouter();
  const { name } = (router.query as any);

  return (
    <div>
       <h1>Hello {name || 'User'}!</h1>
    </div>
  )
}

export default SignedUserPage;