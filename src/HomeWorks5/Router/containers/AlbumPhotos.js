import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Slider from '../Slider/Slider';


export default function AlbumPhotos() {
  const { userId } = useParams();
  const [ album, setAlbum ] = useState([]);
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
      .then(response => response.json())
      .then(album => {
        setAlbum(album);
      }) 
  }, [userId]);
  

  return (
    <div>
      <h2>Album</h2>
      {
        album.length !== 0 ?
        <Slider config={{type:'slider',startAt: 0,perView: 1,}}>
          {
            album.map(item => 
              <img key={item.id} src={item.url} alt={item.id}/>
            )
          }
        </Slider>
        : null
      }
    </div>
  )
}
