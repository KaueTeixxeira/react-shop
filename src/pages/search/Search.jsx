import { Grid, Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../../components/movie-card/MovieCard'
import MovieService from '../../service/movie/MovieService'


const Search = () => {

  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchPage, setSearchPage] = useState(1)
  const [pageNumber, setPageNumber] = useState(0)

  const query = searchParams.get('q')


  const getPesquisa = async (value) => {
    const page = await MovieService.searchMovie(query,value)
    setCurrentPage(page.page)
    setPageNumber(page.total_pages)
    setMovies(page.results)
  }

  const handleChange = (e, value) => {
    if (value != searchPage) {
      setSearchPage(value)
      getPesquisa(value)
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Adiciona um efeito de rolagem suave
      });
    }
  }


  useEffect(() => {
    getPesquisa(1)
  }, [])

  return (
    <>
     
      <Grid container spacing={2} columns={16} sx={{marginBottom: 1, marginTop: 1}}>
        {movies && movies.map((movie) =>
          <Grid key={movie.id} item xs={4}>
            <MovieCard movie={movie} />

          </Grid>
        )}
      </Grid>
      {pageNumber > 1 &&
        <Pagination  count={pageNumber} page={currentPage} color="primary"
          sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3}} onChange={handleChange}
        />
      }
    </>
  )
}

export default Search