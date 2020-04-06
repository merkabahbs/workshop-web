import React from 'react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      company: '',
      webpage: '',
      employees: '',
      sector: '',
      time: '',
      message: '',
    }
  }

  clearState = () => {
    this.setState({
      name: '',
      email: '',
      company: '',
      webpage: '',
      employees: '',
      sector: '',
      time: '',
      message: '',
    })
  }

  sendInformation = () => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        alert('Success!')
        this.clearState()
      })
      .catch(error => alert(error))
  }

  handleSubmit = e => {
    this.sendInformation()
    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div className="form">
        <h1 className="title has-text-link">Inscríbete ahora</h1>
        <form
          onSubmit={this.handleSubmit}
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="field">
            <label class="label">Nombre y apellido</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                required
                maxlength="50"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Correo electrónico</label>
            <div class="control">
              <input
                class="input"
                type="email"
                name="email"
                onChange={this.handleChange}
                required
                maxlength="50"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Nombre de la empresa</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="company"
                onChange={this.handleChange}
                required
                maxlength="25"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Sitio web</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="webpage"
                onChange={this.handleChange}
                required
                maxlength="50"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Número de empleados</label>
            <div class="control">
              <div class="select">
                <select name="employees" onChange={this.handleChange} required>
                  <option selected>1</option>
                  <option>2 a 5</option>
                  <option>6 a 10</option>
                  <option>11 a 25</option>
                  <option>26 a 50</option>
                  <option>51 a 200</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Sector</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="sector"
                onChange={this.handleChange}
                required
                maxlength="25"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Tiempo en el mercado</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="time"
                onChange={this.handleChange}
                required
                maxlength="25"
              />
            </div>
          </div>

          <div class="field vertical-margin">
            <div class="control">
              <textarea
                class="textarea"
                name="message"
                onChange={this.handleChange}
                placeholder="En un párrafo corto: Cuéntanos, ¿Cómo crees que podemos ayudarte? (100 palabras máx)."
                required
                maxlength="100"
              />
            </div>
          </div>

          <input class="button is-primary" type="submit" value="Enviar" />
        </form>
      </div>
    )
  }
}

export default ContactForm
