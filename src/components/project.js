import React from 'react'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Project = () => {
    return (
        <Container fluid style={{ marginTop: 100 }}>
            <CardDeck>
                <Card border="light">
                    <Card.Header>
                        ReOrder
                    </Card.Header>
                    <Card.Body>
                        Application description goes here
                    </Card.Body>
                    <Button variant="outline-secondary" style={{ margin: 8 }}>
                        Demo
                    </Button>
                    <Button variant="outline-secondary" style={{ margin: 8 }}>
                        Source
                    </Button>
                </Card>
                <Card border="light">
                    <Card.Header>
                        Where Did You Eat?
                    </Card.Header>
                    <Card.Body>
                        Application description goes here
                    </Card.Body>
                    <Button variant="outline-secondary" style={{ margin: 8 }}>
                        Demo
                    </Button>
                    <Button variant="outline-secondary" style={{ margin: 8 }}>
                        Source
                    </Button>
                </Card>
                <Card border="light">
                    <Card.Header>
                        PhotoBook
                    </Card.Header>
                    <Card.Body>
                        Application description goes here
                    </Card.Body>
                    <Button variant="outline-secondary" style={{ margin: 8 }}>
                        Demo
                    </Button>
                    <Button variant="outline-secondary" style={{ margin: 8 }}>
                        Source
                    </Button>
                </Card>
            </CardDeck>
        </Container>
    )
}
export default Project