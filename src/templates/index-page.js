import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import logo from '../img/logo.svg'

export const IndexPageTemplate = ({
  image,
  headingStart,
  headingYellow,
  headingEnd,
  subheading,
}) => (
  <div>
    <section className="hero">
      <div
        className="full-width-image-container hero-body is-flex"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div className="container">
          <div className="columns">
            <div className="column">
              <img
                className="logo"
                src={logo}
                alt="Merkabah Business Solutions"
              />
              <h1 className="has-text-white title has-text-weight-light">
                {headingStart}
                <span className="has-text-primary">&nbsp;{headingYellow}</span>
                &nbsp;{headingEnd}
              </h1>
              <h2 className="has-text-white subtitle has-text-weight-light">
                {subheading}
              </h2>
            </div>
            <div className="column is-hidden-mobile" />
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        headingStart={frontmatter.headingStart}
        headingYellow={frontmatter.headingYellow}
        headingEnd={frontmatter.headingEnd}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headingStart
        headingYellow
        headingEnd
        subheading
      }
    }
  }
`
