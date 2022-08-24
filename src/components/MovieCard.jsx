import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const img_prefix = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({movie}) => {
  return (
    <Card className="mb-4">
        <Card.Img className="img-fluid" variant="top" src={img_prefix+movie.poster_path}/>
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>Release Date: {movie.release_date}</Card.Text>
            <Card.Text>Rating: {movie.vote_average} / 10</Card.Text>
            <Card.Text></Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>   
  )
}

export default MovieCard