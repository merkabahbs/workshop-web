import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import linkedin from '../img/social/linkedin.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-white has-text-link">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title has-text-link">
                Encontremos lo que te hará grande
              </h1>
            </div>
            <div className="column is-hidden-touch" />
          </div>
          <div className="columns">
            <div className="column is-flex">
              <a
                title="facebook"
                target="_blank"
                href="https://www.facebook.com/Merkabahbs"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                title="instagram"
                target="_blank"
                href="https://www.instagram.com/merkabahbs/"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                title="linkedin"
                target="_blank"
                href="https://www.linkedin.com/company/merkabah-business-solutions/"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <h4 className="subtitle is-inline is-hidden-touch">
                <a href="https://merkabahbs.com">www.merkabahbs.com</a>
              </h4>
            </div>
            <div className="column is-hidden-desktop">
              <h4 className="subtitle">
                <a href="https://merkabahbs.com">www.merkabahbs.com</a>
              </h4>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
