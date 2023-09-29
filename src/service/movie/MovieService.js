import axios from "../AxiosConfig";

const MovieService = {

    getTopRatedMovies: async () => {
        const response = await axios.get('upcoming')
        return response.data
    }
}

export default MovieService