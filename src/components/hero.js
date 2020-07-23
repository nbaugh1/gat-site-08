import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from '../components/image'

const Hero = () => {
    return (
        <Jumbotron fluid className="bg-dark">
            <h1>
                Nick Baughman
            </h1>
            <h6>Software Engineer</h6>
            <i>Ruby - JavaScript</i>
        </Jumbotron>
    )
}

export default Hero