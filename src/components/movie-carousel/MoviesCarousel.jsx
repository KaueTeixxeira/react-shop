import React from 'react'
import Slider from 'react-slick';

import "./slick.css";
import "./slick-theme.css";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
};

const MoviesCarousel = () => {
    return (
        <Slider {...settings}>
           
        </Slider>
    )
}

export default MoviesCarousel