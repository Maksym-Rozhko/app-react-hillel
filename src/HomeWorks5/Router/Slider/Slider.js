import React, { Component, useEffect, useState } from 'react';
// import s from './Slider.module.css';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
// import PropTypes from 'prop-types';

class Slider extends Component {
    // constructor(props) {
    //     super(props);
    //     this.myRef = React.createRef()
    // }

    componentDidMount = () => {
        this.glide = new Glide('.glide',this.props.config).mount()
      }
    
    componentDidUpdate = () => {
        this.glide.update(this.props.config);
    }
    
    componentWillUnmount = () => {
        this.glide.destroy();
    }

    render = () => {
        const images = this.props.children

        return (
            <>
                <Button>
                    <Link to={`/users/`}>Back Users</Link>
                </Button>
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <div className="glide__slides">
                            {images.map((slide, index) => {
                                return <div className="glide__slide" alt="Marvel images" key={index} >{slide}</div>
                            })}
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

// Slider.propTypes = {
//     options: PropTypes.object.isRequired,
//     images: PropTypes.array.isRequired, 
// } 


export default Slider;