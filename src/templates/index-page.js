import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
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
                <span className="has-text-primary">{headingYellow}</span>
                &nbsp;{headingEnd}
              </h1>
              <h3 className="has-text-white subtitle">{subheading}</h3>
            </div>
            <div className="column is-hidden-touch" />
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-primary section-form">
      <div className="container">
        <div className="columns">
          <div className="column">
            <p>
              Nuestra razón de ser son los emprendimientos que buscan crecer y
              lograr tener un espacio único en el mercado. Como consultores,
              creemos que lo mínimo que podemos hacer es ayudarte a encontrar
              maneras de mitigar el impacto que esta crisis pueda tener sobre tu
              negocio.
              <br />
              <br /> Por lo anterior, decidimos ofrecer totalmente GRATIS 10
              talleres online a emprendedores que escogeremos dependiendo de los
              sectores y necesidades específicas. Estos talleres consisten en la
              capacitación e implementación de una herramienta de análisis de
              oportunidades y selección de ideas. Las soluciones que surjan de
              este taller equivalente a dos horas de consultoría, las estaremos
              compartiendo en nuestro blog para que todos los emprendedores
              tengan acceso a estas herramientas.
              <br />
              <br /> Inscríbete en el formulario a continuación y cuéntanos
              acerca de tu emprendimiento. Una vez inscrito, espera nuestro
              correo en los próximos días. Fecha límite de inscripción: 10 de
              abril del 2020.
            </p>
          </div>
          <div className="column form-column is-hidden-touch">
            <div class="card">
              <div class="card-content">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section is-hidden-desktop">
      <div className="container">
        <div className="columns">
          <div className="column">
            <ContactForm />
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
