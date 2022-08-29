import React from 'react'
import useGetActors from '../hooks/useGetActor'
import {useParams} from 'react-router-dom'
import ActorInfo from '../components/ActorInfo'

import Container from 'react-bootstrap/Container'


const ActorPage = () => {


    const { id } = useParams()
    const {data, isSuccess, isLoading, isError, error} = useGetActors(id)


    return (
        <Container>
            {isError && <h1>Something Went wrong... {error.message}</h1>}

            {isLoading && <h2>Loading Actor Detalis...</h2>}

            {isSuccess && (
                <ActorInfo actor={data}/>
            )}
        </Container>
    )
}

export default ActorPage