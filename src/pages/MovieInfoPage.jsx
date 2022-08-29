import React from 'react'
import Container from 'react-bootstrap/Container'
import useGetSingelMovie from '../hooks/useGetSingleMovie'
import { useParams } from 'react-router-dom'
import MovieInfo from '../components/MovieInfo'
const MovieInfoPage = () => {

    const { id } = useParams()
    const {data, isLoading, isSuccess, isError, error} = useGetSingelMovie(id)


    console.log('data', data)
    return (
        <Container className="py-3">
            {isError && <h1>Something went wrong {error.message}</h1>}

            {isLoading && <h1>Loading Details...</h1>}

            {isSuccess && <MovieInfo movie={data}/>}
        </Container>
    )
}

export default MovieInfoPage