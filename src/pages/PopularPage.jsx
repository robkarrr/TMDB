import React from 'react'
import Container from 'react-bootstrap/Container'
import usePopularMovies from '../hooks/usePopularMovies'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MovieCard from '../components/MovieCard'
const PopularPage = () => {

     const {data, isSuccess, isError, error} = usePopularMovies()

    return (
        <Container className="py-3">
            <div>
                <h2>Latest Movies</h2>
                <Row>
                    {isSuccess && data.results.map((movie,id) => (
                        <Col lg={3} md={4} sm={6}>
                            <MovieCard movie={movie} id={id} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
  )
}

export default PopularPage