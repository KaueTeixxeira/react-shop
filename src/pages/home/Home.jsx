import { useState, useEffect } from 'react'
import MovieService from '../../service/movie/MovieService'
import MoviesCarousel from '../../components/movie-carousel/MoviesCarousel'
import MovieCard from '../../components/movie-card/MovieCard'

import './Home.css'
import Slider from 'react-slick'

const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])

  const [imageUrls, setImageUrls] = useState(["/fafbg.jpg", "/elementosbg.jpg","/lokibg.jpg", "/barbiebg.jpg","/openbg.jpg"])

  const getTopRatedMovies = async () => {
    const movies = await MovieService.getTopRatedMovies()
    setTimeout(async () => {
      setTopMovies(movies.results)
    }, 1000)
  }

  const getPopular = async () => {
    const movies = await MovieService.getPopular()
    // console.log(movies.results)
    // const movieImages = movies.results.map((movie) => {
    //   return `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
    // });
    // setImageUrls(movieImages)
    setPopular(movies.results)
  }

  const getUpComing = async () => {
    const movies = await MovieService.getUpComing()
    setUpcoming(movies.results)
  }


  const getNowPlaying = async () => {
    const movies = await MovieService.getNowPlaying()
    setNowPlaying(movies.results)
  }

  useEffect(() => {

    setTimeout(async () => {
    getTopRatedMovies()
    getPopular()
    getUpComing()
    getNowPlaying()
    }, 1500);
  }, [])



  const configAdd = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    arrows: false,
    fade: true
  }

  return (
    <>
      <MoviesCarousel movies={topMovies} title={"Top Movies"}/>
      <MoviesCarousel movies={popular} title={"Popular"}/>

      <Slider {...configAdd}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="image-container">
            <img src={imageUrl} alt={`Imagem ${index}`} />
          </div>
        ))}
      </Slider>
      
      <MoviesCarousel movies={upcoming} title={"Up Coming"}/>
      <MoviesCarousel movies={nowPlaying} title={"Now Playing"}/>


    </>

  )
}

export default Home