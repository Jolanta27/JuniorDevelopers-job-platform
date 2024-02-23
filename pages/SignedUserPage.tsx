import React from 'react';

interface SignedUserPageProps {
  firstName: string;
}
const SignedUserPage: React.FC<SignedUserPageProps> = ({ firstName }) => {
  return (
    <div>
       <h1>Hello {firstName}</h1>
    </div>
  )
}

export default SignedUserPage;