import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmbdAPI'

const useGetSingleMovie = (id) => {
    return useQuery(['single-movie', id],() => tmdbAPI.getSingleMovie(id))
}

export default useGetSingleMovie