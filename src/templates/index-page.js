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
              <h1 className="has-text-white title">
                {headingStart}
                <span className="has-text-primary">&nbsp;{headingYellow}</span>
                &nbsp;{headingEnd}
              </h1>
              <h3 className="has-text-white subtitle">{subheading}</h3>
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
  headingStart: PropTypes.string,
  headingYellow: PropTypes.string,
  headingEnd: PropTypes.string,
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
