import axios from "../AxiosConfig";

const MovieService = {

    getTopRatedMovies: async () => {
        const response = await axios.get('movie/top_rated')
        return response.data
    },
    getPopular: async () => {
        const response = await axios.get('movie/popular')
        return response.data
    },
    getNowPlaying: async () => {
        const response = await axios.get('movie/now_playing')
        return response.data
    },
    getUpComing: async () => {
        const response = await axios.get('movie/upcoming')
        return response.data
    },
    searchMovie: async (search, currentPage) => {
        const response = await axios.get('search/movie?query=' + search + "&page=" + currentPage)
        return response.data
    },
    getMovie: async (movieId) => {
        const response = await axios.get('movie/' + movieId)
        return response.data
    }
}

export default MovieService