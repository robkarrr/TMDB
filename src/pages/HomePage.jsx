import React from 'react'
import Container from 'react-bootstrap/Container'
import tmdbAPI from '../services/tmbdAPI'
import { useQuery } from 'react-query'
import usePopularMovies from '../hooks/usePopularMovies'

const HomePage = () => {

     const {data, isSuccess, isError, error} = usePopularMovies()

    return (
        <Container>
            <h1>Welcome to TMDB</h1>

            <div>
                <h2>Movies</h2>
                {isSuccess && data.results.map((movie,id) => (
                    <ul>
                        <li key={id}>{movie.title}</li>
                    </ul>
                ))}
            </div>
        </Container>
  )
}

export default HomePage