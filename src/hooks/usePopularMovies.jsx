import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmbdAPI'

const usePopularMovies = () => {
    return useQuery('popular-movies', tmdbAPI.getPopularMovies)
}

export default usePopularMovies