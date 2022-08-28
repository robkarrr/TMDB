import React from 'react'
import Container from 'react-bootstrap/Container'
import useGetGenres from '../hooks/useGetGenres'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'



const DiscoverPage = () => {
    const {data, isSuccess, isLoading, isError, error} = useGetGenres()

    return (
        <Container>
            <h1>Discover differnet genres</h1>

            <div>
                <ul>
                    {isSuccess && data.genres.map((genre, _key) => (
                        <li className="py-3" key={genre.id}><Button as={Link} to={`/discover/${genre.id}`} variant='dark'>{genre.name}</Button></li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default DiscoverPage