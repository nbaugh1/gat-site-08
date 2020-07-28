import React from 'react'
import { Document } from 'react-pdf'
import Container from 'react-bootstrap/Container'


const ResumePdf = () => {
    return (
        <Container>
            <Document file="/Users/Nick/Development/gat-site-08/static/resumeJSON.pdf" />
        </Container>
    )
}
export default ResumePdf