import React from 'react'
import useTopMovies from '../hooks/useTopMovies'
import MovieCard from '../components/MovieCard'

//bootstrap imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TopPage = () => {

     const {data, isSuccess, isError, isLoading} = useTopMovies()

return (
    <Container className="py-3">
        
        {isError && (
            <>
                <p>Oops... Something went wrong!</p>
            </>
        )}

        {isLoading && (
            <p>Loading Movies...</p>
        )}

        <div>
            <h2>Top Rated Movies</h2>
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

export default TopPage