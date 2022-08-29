import React from 'react'
import MovieCard from '../components/MovieCard'
import usePopularMovies from '../hooks/usePopularMovies'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const PopularPage = () => {

     const {data, isSuccess, isLoading, isError, error} = usePopularMovies()

    return (
        <Container className="py-3">

            {isError && <h1>Something went wrong... {error.message}</h1>}

            {isLoading && <div>Loading Genres...</div>}
            
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