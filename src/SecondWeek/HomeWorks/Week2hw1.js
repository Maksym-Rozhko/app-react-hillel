import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import '../../App.css';
import Slider from './Slider/Slider';
import { Button, Icon } from 'semantic-ui-react';


class Week2hw1 extends Component {
  state = {
    imagesSprite: [
      'https://www.zastavki.com/pictures/originals/2013/Fantasy__038466_.jpg',
      'https://www.iosmode.com/wp-content/uploads/2016/05/Black-Panther-Civil-War-Costume.jpg',
      'https://images.hdqwalls.com/download/captain-america-angry-xj-1920x1080.jpg',
      'https://i.pinimg.com/originals/c4/78/64/c47864bd913ce80a3cd5269057060ba3.jpg',
      'https://cdn.britannica.com/64/182864-050-8975B127/Scene-The-Incredible-Hulk-Louis-Leterrier.jpg',
      'https://images.hdqwalls.com/download/thor-new-hammer-4k-qu-1920x1080.jpg',
      'https://million-wallpapers.ru/wallpapers/5/61/491948526046310/udivitelno-chelovek-pauk.jpg'
    ],
    options: {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 1000
    },
    isDisabled: false,
    isAbled: true
  }

  pauseSlider = () => {
    if(this.state.options.autoplay){
      this.setState({
        options: {
          autoplay: false
        },
        isDisabled: true,
        isAbled: false
      })
    } else {
      this.setState({
        options: {
          autoplay: true
        },
        isDisabled: !this.state.isDisabled,
        isAbled: !this.state.isAbled
      })
    }
  }

  render = () => {
    return (
      <>
        <Slider options={this.state.options} images={this.state.imagesSprite} />
          <Button disabled={this.state.isDisabled} className="btn" type="submit" icon labelPosition='left' onClick={this.pauseSlider}>
            <Icon name="pause" />
            Pause
          </Button>
          <Button disabled={this.state.isAbled} className="btn" type="submit" icon labelPosition='right' onClick={this.pauseSlider}>
            <Icon name="play" />
            Play
          </Button>
      </>
    )
  }
}

export default Week2hw1;