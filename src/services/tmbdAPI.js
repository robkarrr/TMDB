import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const api_key = import.meta.env.VITE_TMDB_API_KEY

const getPopularMovies = async () => {
    const res = await axios.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`)

    return res.data
}

export default {
    getPopularMovies,
}