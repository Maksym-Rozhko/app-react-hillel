import React, { useEffect, useState } from 'react';
import { useParams, Redirect, NavLink } from 'react-router-dom';
import { Loader, Button } from "semantic-ui-react";

function UserPosts() {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState(null);
  
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
          setUserDetails(user);
        })
    }, [userId]);
  
    if (userDetails === null) return <Loader size='small' active />;
  
    if (!userDetails.id) {
      return <Redirect to='/'/>
    }
 
    return (
        <Button>
            <NavLink to={`/posts/${userId}`}>Posts</NavLink>
        </Button>
    );
  }
  
  export default UserPosts;