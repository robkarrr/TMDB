import React from 'react'
import Container from 'react-bootstrap/Container'
import useLatestMovies from '../hooks/useLatestMovies'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const HomePage = () => {

     const {data, isSuccess, isError, error} = useLatestMovies()

    return (
        <Container className="py-3">
            <div>
                <h2>Latest Movies</h2>
                <Row lg={3} md={4} sm={6}>
                    {isSuccess && data.results.map((movie,id) => (
                        <Col>
                            <MovieCard movie={movie} id={id} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
  )
}

export default HomePage