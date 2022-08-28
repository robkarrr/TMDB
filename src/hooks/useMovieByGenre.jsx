import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmbdAPI'

const useMovieByGenre = (id,page) => {
    return useQuery(['movies-by-genre', {id, page}], () => tmdbAPI.getMovieByGenre(id,page))
}

export default useMovieByGenre