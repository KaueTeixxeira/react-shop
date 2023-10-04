import { Grid, Pagination } from '@mui/material'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import MovieCard from '../../components/movie-card/MovieCard'
import Title from '../../components/title/Title'
import MovieService from '../../service/movie/MovieService'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import "./Search.css"

const Search = () => {

  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchPage, setSearchPage] = useState(1)
  const [pageNumber, setPageNumber] = useState(0)

  const [query, setQuery] = useState('');

  const getPesquisa = async (value) => {
    const page = await MovieService.searchMovie(query, value)
    setCurrentPage(page.page)
    setPageNumber(page.total_pages)
    setMovies(page.results)
    console.log("Carregando filmes")
  }

  const handleChange = (e, value) => {
    if (value != searchPage) {
      setSearchPage(value)
      getPesquisa(value)
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    }
  }
  const title_p = <p>Resultado para: <strong className='strong_search'>{query}</strong></p>

  useEffect(() => {
    const queryFromURL = searchParams.get('q');
    if (queryFromURL) {
      setQuery(queryFromURL);
      getPesquisa(1);
    }
  }, [searchParams]);

  useEffect(() => {
    // Este useEffect será acionado sempre que 'query' mudar.
    if (query) {
      getPesquisa(1);
    }
  }, [query]);

  return (
    <div className='container_search'>
      <Title title={title_p} />
      {movies.length > 0 ? (
  <>
    <Grid container spacing={2} columns={16} sx={{ marginBottom: 1, marginTop: 1 }}>
      {movies && movies.map((movie) =>
        <Grid key={movie.id} item xs={4}>
          <MovieCard movie={movie} />
        </Grid>
      )}
    </Grid>
    {pageNumber > 1 && (
      <Pagination
        count={pageNumber}
        page={currentPage}
        color="primary"
        size="large"
        sx={{ display: 'flex', justifyContent: 'center' }}
        onChange={handleChange}
      />
    )}
  </>
) : (
  <div className="error-div">
    <ErrorOutlineIcon sx={{marginRight: 2}}/>
    <h2>Não foi possível encontrar um título</h2>
  </div>
)}

    </div>
  )
}

export default Search