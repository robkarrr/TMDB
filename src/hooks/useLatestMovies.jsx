import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmbdAPI'

const useLatestMovies = () => {
    return useQuery('latest-movies', tmdbAPI.getLatestMovies)
}

export default useLatestMovies