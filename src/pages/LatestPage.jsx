import React from 'react'
import Container from 'react-bootstrap/Container'
import useLatestMovies from '../hooks/useLatestMovies'

const HomePage = () => {

     const {data, isSuccess, isError, error} = useLatestMovies()

    return (
        <Container>
            <div>
                <h2>Latest Movies</h2>
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