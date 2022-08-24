import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmbdAPI'

const useTopMovies = () => {
    return useQuery('latest-movies', tmdbAPI.getTopRatedMovies)
}

export default useTopMovies