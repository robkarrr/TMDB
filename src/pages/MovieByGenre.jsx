import React from 'react'
import Container from 'react-bootstrap/Container'
import useMovieByGenre from '../hooks/useMovieByGenre'
import {useParams, useSearchParams} from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const MovieByGenre = () => {
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page')
    const {data, isSuccess, isError, isLoading, error} = useMovieByGenre(id, page)



return (
    <Container className="py-3">
        {isLoading && <h1>Loading movies</h1>}

        {isError && error.message}

        {isSuccess && (
            <>
                <h1>Genre Movies</h1>
                <Row>
                    {data.results.map((movie,id) =>(
                        <Col key={id} lg={3} md={4} sm={6}>
                            <MovieCard movie={movie}/>
                        </Col>
                    ))}
                </Row>

                <Pagination
                    page={page}
                    totPages={data.total_pages}
                    onChangePage={setSearchParams}
                />
            </>
        )}

    </Container>
)
}

export default MovieByGenre