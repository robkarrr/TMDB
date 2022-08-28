import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const api_key = import.meta.env.VITE_TMDB_API_KEY


const getPopularMovies = async () => {
    const res = await axios.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`)

    return res.data
}

const getLatestMovies = async () => {
    const res = await axios.get(`movie/now_playing?api_key=${api_key}&language=en-US&page=1`)

    return res.data
}

const getTopRatedMovies = async () => {
    const res = await axios.get(`movie/top_rated?api_key=${api_key}&language=en-US&page=1`)

    return res.data
}

const getGenres = async () => {
    const res = await axios.get(`/genre/movie/list?api_key=${api_key}&language=en-US`)

    return res.data
}

const getMovieByGenre = async (genre, page) => {
    const res = await axios.get(`/discover/movie?api_key=${api_key}&with_genres=${genre}&page=${page}`)

    return res.data
}

export default {
    getPopularMovies,
    getTopRatedMovies,
    getLatestMovies,
    getGenres,
    getMovieByGenre,
}