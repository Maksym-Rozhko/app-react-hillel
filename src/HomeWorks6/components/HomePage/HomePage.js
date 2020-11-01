import React from 'react';
// import { Container } from 'semantic-ui-react';
import './homePage.css';

export default function Home() {

  function controlsVide(e) {
    e.preventDefault();
    //TODO
  }


  return (
    <div onClick={controlsVide} className="video-box">
      <video id="video" className="video-main" src='https://content.rolex.com/dam/watches/find-your-rolex/thematic-grids/man/watches-find-your-rolex-men-cover.mp4' controls="controls" autoPlay="autoplay" loop></video>
      <audio id="audio" className="audio-main" controls autoPlay="autoplay" loop preload="true">
        <source src="../../../../audio/audioRolex.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

// class Home extends Component {
//   render() {
//     return (
//       <Container className="video-box">
//         <video className="video-main" src='https://content.rolex.com/dam/watches/find-your-rolex/thematic-grids/man/watches-find-your-rolex-men-cover.mp4' controls="controls" autoPlay loop></video>
//       </Container>
//     )
//   }
// }

// export default Home;