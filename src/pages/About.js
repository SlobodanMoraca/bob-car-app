import React from 'react'
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div>
            <h1>This is about page nice a
                <Link to='/addNewCar' className='sec'>
                    ?
                </Link>
                </h1>
        </div>
    )
}

export default AboutPage
