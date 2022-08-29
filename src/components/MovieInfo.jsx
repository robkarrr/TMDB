import React from 'react'
import Container from 'react-bootstrap/Container'

const MovieInfo = ({ movie }) => {
    return (
        <Container className="py-3">
            <h1>{movie.title}</h1>

            
        </Container>
    )
}

export default MovieInfo