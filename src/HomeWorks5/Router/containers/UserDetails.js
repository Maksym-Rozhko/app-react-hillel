import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Card, Loader } from "semantic-ui-react";

function UserDetails() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(user => {
        setUserDetails(user);
      })
  }, [userId]);

  if (userDetails === null) return <Loader size='massive' active />;

  if (!userDetails.id) {
    return <Redirect to='/'/>
  }

  return (
    <div className='user-details-page'>
      <Card
        image='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        header={userDetails.name}
        meta={userDetails.company.name}
      />
    </div>
    
  );
}

export default UserDetails;
