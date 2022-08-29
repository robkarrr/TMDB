import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const MovieInfo = ({ movie }) => {

    const img_prefix = 'https://image.tmdb.org/t/p/w500'

    return (
        <Container className="py-3">
            <h1>{movie.title}</h1>

            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img_prefix + movie.poster_path}/>
                    </Card>
                    <Card.Link className="mt-2" as={Button} variant="dark" href={movie.homepage}>Visit Webiste</Card.Link>
                </Col>

                <Col>
                    <Card>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Time: {movie.runtime}</ListGroup.Item>
                            <ListGroup.Item>Release Date: {movie.release_date}</ListGroup.Item>
                            <ListGroup.Item>Budget: ${movie.budget}</ListGroup.Item>
                            <ListGroup.Item>{movie.overview}</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Table>
                        <thead>
                            <tr>
                                <th>Actor</th>
                                <th>Played</th>
                            </tr>
                        </thead>

                        <tbody>
                            {movie.credits.cast.map((actor) =>(
                                <tr key={actor.id}>
                                    <td><a as={Link} href={`/actor/${actor.id}`}>{actor.name}</a></td>
                                    <td>{actor.character}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default MovieInfo