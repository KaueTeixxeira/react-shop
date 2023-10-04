import { useState, useEffect } from 'react'
import MovieService from '../../service/movie/MovieService'
import MoviesCarousel from '../../components/movie-carousel/MoviesCarousel'
import MovieCard from '../../components/movie-card/MovieCard'

import './Home.css'

const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])

  const getTopRatedMovies = async () => {
    const movies = await MovieService.getTopRatedMovies()
    setTopMovies(movies.results)
  }

  const getPopular = async () => {
    const movies = await MovieService.getPopular()
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
    getTopRatedMovies()
    getPopular()
    getUpComing()
    getNowPlaying()
  }, [])




  return (
    <>
      {topMovies.length > 0 && <MoviesCarousel movies={topMovies} title={"Top Movies"}></MoviesCarousel>}
      {topMovies.length > 0 && <MoviesCarousel movies={popular} title={"Popular"}></MoviesCarousel>}

      <div className='middle_div'>
</div>

      {topMovies.length > 0 && <MoviesCarousel movies={upcoming} title={"Up Coming"}></MoviesCarousel>}
      {topMovies.length > 0 && <MoviesCarousel movies={nowPlaying} title={"Now Playing"}></MoviesCarousel>}


    </>

  )
}

export default Home