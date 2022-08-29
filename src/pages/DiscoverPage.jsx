import React from 'react'
import useGetGenres from '../hooks/useGetGenres'
import { Link } from 'react-router-dom'

//bootstrap imports
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


// PAGE FOR ALL THE GENRES

const DiscoverPage = () => {
    const {data, isSuccess, isLoading, isError, error} = useGetGenres()

    return (
        <Container>

            {isError && <h1>Something went wrong... {error.message}</h1>}

            {isLoading && <div>Loading Genres...</div>}

            {isSuccess && (
                <>
                    <h1>Discover Different Genres</h1>

                    <Row>
                        {data.genres.map((genre) => (
                            <Col key={genre.id} className="py-2" lg={3} md={4} sm={6}>
                                <Button variant="dark" as={ Link } to={`/discover/${genre.id}`}>{genre.name}</Button>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </Container>
    )
}

export default DiscoverPage