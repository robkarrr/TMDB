import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmbdAPI'

const useGetGenres = () => {
    return useQuery('genres', tmdbAPI.getGenres )
}

export default useGetGenres