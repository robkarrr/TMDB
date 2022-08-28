import React from 'react'
import Container from 'react-bootstrap/Container'
import useMovieByGenre from '../hooks/useMovieByGenre'
import {useParams, useSearchParams} from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const MovieByGenre = () => {
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page')
    const {data, isSuccess, isError, error} = useMovieByGenre(id, page)



    return (
     <Container className="py-3">
            <div>
                {isError && (
                    <h1>Something went wrong</h1>
                )}
                <div>
                    <h2>Genre Movies!</h2>
                    <Row lg={3} md={4} sm={6}>
                        {isSuccess && data.results.map((movie,id) => (
                            <Col key={id}>
                                <MovieCard movie={movie} id={id} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Container>
  )
}

export default MovieByGenre