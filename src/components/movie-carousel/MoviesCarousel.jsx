import { useEffect } from 'react'
import Slider from 'react-slick';
import MovieCard from '../movie-card/MovieCard';

import './MoviesCarousel.css'
import "./slick-theme.css";
import "./slick.css";


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipe: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

};



const MoviesCarousel = ({ movies, title }) => {




  return (
    <div className='carousel_container'>
      <div className='carousel_title'>
        <h2 className='tittle'>{title}</h2>
        <div className='line'></div>
      </div>
      <br></br>
      <div className='bg_carousel'>

      <Slider {...settings}>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            ))) :
            (
              <p>Não a itens na lista</p>
              )
            }
      </Slider>
            </div>
    </div>
  )
}

export default MoviesCarousel