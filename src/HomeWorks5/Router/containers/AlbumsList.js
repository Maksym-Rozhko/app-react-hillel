import React, { useEffect, useState } from 'react';
import { useParams, Redirect, NavLink, Link } from 'react-router-dom';
import { Card, Header, Button } from 'semantic-ui-react';

export default function AlbumsList() {
  const [albums,setAlbums] = useState([]);
  const { userId} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then(response => response.json())
      .then(albums => {
        setAlbums(albums);
      })
  }, [userId]);

  if(!albums){
    return <Redirect to='/users'></Redirect>
  }

  return (
    <div>
      <Header as='h2'>
        Albums:
      </Header>
      <Button>
        <Link to={`/users/`}>Back User</Link>
      </Button>
          {
            albums.map(album => (
              <NavLink to={`/albums/${userId}/${album.id}`} marginbottom='20'>
                <Card
                key={album.id}
                link
                header={
                  album.title
                }
                description={album.body}
                />
              </NavLink>
            ))
          }
    </div>
  )
}
