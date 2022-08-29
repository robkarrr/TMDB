import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ActorInfo = ({ actor }) => {

  const img_prefix = 'https://image.tmdb.org/t/p/w500'

  return (
    <Container className="py-3">
        <h1>{actor.name}</h1>

        <Row>
            <Col>
                <Card>
                    {actor.profile_path && 
                        <Card.Img variant="top" src={img_prefix + actor.profile_path}/>
                    }
                </Card>
                {actor.hompage && 
                  <Card.Link className="mt-2" as={Button} variant="dark" href={actor.homepage}>Visit Website</Card.Link>
                }
            </Col>

            <Col>
                <Card>
                    <Card.Header>Info</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Date of Birth: {actor.birthday}</ListGroup.Item>
                        <ListGroup.Item>AKA: {actor.also_known_as[0]}, {actor.also_known_as[1]}, {actor.also_known_as[2]}</ListGroup.Item>
                        <ListGroup.Item>Birth Place: {actor.place_of_birth}</ListGroup.Item>
                        <ListGroup.Item>{actor.biography}</ListGroup.Item>
                    </ListGroup>
                </Card>

                <Table>
                    <thead>
                        <tr>
                            <th>Movie</th>
                            <th>Played</th>
                        </tr>
                    </thead>

                    <tbody>
                        {actor.movie_credits.cast.map((movie) => (
                            <tr key={movie.id}>
                                <td><Button variant="dark" as={Link} to={`/movie/${movie.id}`}>{movie.title}</Button></td>
                                <td>{movie.character}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
  )
}

export default ActorInfo