import React, { Component } from 'react';
import s from './Slider.module.css';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';
import PropTypes from 'prop-types';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    componentDidMount = () => {
        this.prevGlide = new Glide(
            this.myRef.current, this.props.options
        )
        this.prevGlide.mount()
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.options !== this.props.options) {
            this.prevGlide.update(this.props.options)
        }
    }

    componentWillUnmount = () => {
        this.prevGlide.destroy()
    }

    render = () => {
        return (
            <div ref={this.myRef} className="glide">
                <div className="glide__track" data-glide-el="track">
                    <div className="glide__slides">
                        {this.props.images.map((slide, index) => {
                            return <img className={s.glide__slide} src={slide} alt="Marvel images" key={index} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    options: PropTypes.object.isRequired,
    images: PropTypes.array.isRequired, 
} 


export default Slider;