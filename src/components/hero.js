import React, { useState } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from '../components/image'
import { useTrail, animated } from 'react-spring'


const words = ['Nick Baughman', 'Software Engineer', 'Ruby', 'JavaScript']
const config = { mass: 100, tension: 5000, friction: 2000 }

const Hero = () => {
    const [toggle, setToggle] = useState(true)
    const trail = useTrail(words.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 }
    })
    return (
        <Jumbotron fluid className="bg-dark">
            <div className="trails-main" onClick={() => setToggle(state => !state)}>
                <div>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={words[index]}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
                            <animated.div style={{ height }}>{words[index]}</animated.div>
                        </animated.div>
                    ))}
                </div>
            </div>
        </Jumbotron>
    )
}

export default Hero