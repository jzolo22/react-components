import { render } from '@testing-library/react'
import React from 'react'
import Instructor from '../Components/Instructor'



function InstructorContainer(props) {
    const instructor_names = [{id: 1, name: "steven"}, {id: 2, name: "caryn"}, {id: 1, name: "greg"}]

    let instructors = instructor_names.map(instructorObj => <Instructor instructor={instructorObj} appClickHandler={props.appClickHandler} />)

    return (
        <>
            {instructors}
        </>
    )

}

export default InstructorContainer