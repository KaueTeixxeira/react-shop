import axios from "../AxiosConfig";

const MovieService = {

    getTopRatedMovies: async () => {
        const response = await axios.get('top_rated')
        console.log(response)
        return response.data
    }
}

export default MovieService