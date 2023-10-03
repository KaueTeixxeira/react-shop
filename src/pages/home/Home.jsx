import { useState, useEffect } from 'react'
import MovieService from '../../service/movie/MovieService'
import MoviesCarousel from '../../components/movie-carousel/MoviesCarousel'
import MovieCard from '../../components/movie-card/MovieCard'
import Data from '../../top-movies.json'
import './Home.css'
const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  const [popular, setPopular] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [nowPlaying, setNowPlaying] = useState([])

  const getTopRatedMovies = async () => {
    const movies = await MovieService.getTopRatedMovies()
    console.log(JSON.stringify(movies.results))
    // setTopMovies(movies.results)
  }

  useEffect(() => {
    setTopMovies(Data.top_movies)
    setPopular(Data.popular)
    setUpcoming(Data.upcoming)
    setNowPlaying(Data.now_playing)
  }, [])




  return (
    <>
      {topMovies.length > 0 && <MoviesCarousel movies={topMovies} title={"Top Movies"}></MoviesCarousel>}
      {topMovies.length > 0 && <MoviesCarousel movies={popular} title={"Popular"}></MoviesCarousel>}
      <div className='middle_div'>
      </div>
      {topMovies.length > 0 && <MoviesCarousel movies={upcoming} title={"Up Coming"}></MoviesCarousel>}
      {topMovies.length > 0 && <MoviesCarousel movies={nowPlaying} title={"Now Playing"}></MoviesCarousel>}

      {/* {topMovies.length > 0 && <MovieCard movie={topMovies[0]}></MovieCard>} */}

    </>

  )
}

export default Home