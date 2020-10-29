import React, {useEffect, useState} from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import {Card, Header, Button } from 'semantic-ui-react';


export default function PostsList() {
  const [ posts,setPosts ] = useState([]);
  const { userId } = useParams();
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => response.json())
      .then(posts => {
        setPosts(posts);
      })
  }, [userId]);

  if(!posts){
    return <Redirect to='/users'></Redirect>
  }

  return (
    <div>
      <Header as='h2'>
        Posts:
      </Header>
      <Button>
        <Link to={`/users/`}>Back User</Link>
      </Button>
      {
        posts.map(post => (
          <Card
            key={post.id}
            link
            header={post.title}
            meta='Scientist'
            description={post.body}

          />
        ))
      }
    </div>
  )
}
