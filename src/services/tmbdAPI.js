import axios from 'axios'

//base url for TMDB API
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

const api_key = import.meta.env.VITE_TMDB_API_KEY
const adult_false = `&include_adult=false`

//Gets the top 20 most popular movies
const getPopularMovies = async () => {
    const res = await axios.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1${adult_false}`)

    return res.data
}

//gets the 20 latest movies
const getLatestMovies = async () => {
    const res = await axios.get(`movie/now_playing?api_key=${api_key}&language=en-US&page=1${adult_false}`)

    return res.data
}

//gets the top Rated movies right now
const getTopRatedMovies = async () => {
    const res = await axios.get(`movie/top_rated?api_key=${api_key}&language=en-US&page=1${adult_false}`)

    return res.data
}

//gets genre list
const getGenres = async () => {
    const res = await axios.get(`/genre/movie/list?api_key=${api_key}&language=en-US`)

    return res.data
}

//gets movies from a specific genre
const getMovieByGenre = async (genre, page) => {
    const res = await axios.get(`/discover/movie?api_key=${api_key}&with_genres=${genre}&page=${page}${adult_false}`)

    return res.data
}

//gets single movie
const getSingleMovie = async (id) => {
    const res = await axios.get(`movie/${id}?api_key=${api_key}&language=en-US&append_to_response=credits`)

    return res.data
}

//gets single actor
const getActor = async (id) => {
    const res = await axios.get(`/person/${id}?api_key=${api_key}&language=en-US&append_to_response=movie_credits`)

    return res.data
}

export default {
    getPopularMovies,
    getTopRatedMovies,
    getLatestMovies,
    getGenres,
    getMovieByGenre,
    getSingleMovie,
    getActor,
}