import { useState, useEffect } from 'react'
import MovieService from '../service/movie/MovieService'
import Slider from 'react-slick';

const Home = () => {
  const [topMovies, setTopMovies] = useState([])

  const getTopRatedMovies= async () => {
    const movies = await MovieService.getTopRatedMovies()
    console.log(movies)
    setTopMovies(movies.results)
  }


  useEffect(() => {
    console.log(topMovies)
  }, [topMovies])

  useEffect(() => {
    getTopRatedMovies()
  }, [])


  const settingsDesk = {
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 6,
                slidesToScroll: 1,
                swipeToSlide: true,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 2,
                slidesToScroll: 2,
                swipeToSlide: true,
                arrows: false,
            }
        }
    ]
};

  return (
    <>
    <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
    <div><h3>5</h3></div>
    <div><h3>6</h3></div>
  </div>
    </>
  )
}

export default Home