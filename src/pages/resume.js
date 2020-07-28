import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ResumePdf from '../components/resumePdf'

const Resume = () => {
    return (
        <Layout>
            <SEO title="resume" />
            <ResumePdf />

        </Layout>
    )
}
export default Resume