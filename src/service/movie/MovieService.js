import axios from "../AxiosConfig";

const MovieService = {

    getTopRatedMovies: async () => {
        const response = await axios.get('top_rated')
        return response.data
    }
}

export default MovieService