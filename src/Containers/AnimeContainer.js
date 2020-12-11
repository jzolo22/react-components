import { render } from '@testing-library/react'
import React from 'react'
import Instructor from '../Components/Instructor'



function AnimeContainer(props) {

    // let instructors = props.instructors.map(instructorObj => <Instructor instructor={instructorObj}/>)

    return (
        <>
        <h1>{props.instructor.name}</h1>
        </>
    )

}

export default AnimeContainer