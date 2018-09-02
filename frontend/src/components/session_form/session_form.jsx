import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.capitalize = this.capitalize.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {Object.values(this.props.errors).map((error, i) => (
          <li className="errors" key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    if (localStorage.jwtToken) this.closeModal();
    // const extendedForm = () => {
    //   return (
    //     <div className="login-form-container">
    //       <br />
    //       <input className="login-firstname"
    //         type="text"
    //         placeholder="First Name"
    //         value={this.state.first_name}
    //         onChange={this.update('first_name')}
    //       />
    //       <input className="login-lastname"
    //         type="text"
    //         placeholder="Last Name"
    //         value={this.state.last_name}
    //         onChange={this.update('last_name')}
    //       />
    //       <input className="login-email"
    //         type="text"
    //         placeholder="Email"
    //         value={this.state.email}
    //         onChange={this.update('email')}
    //       />
    //     </div>
    //   );
    // };

    // let formtype = this.props.formType === "signup" ? "Sign up" : "Log in";
    let bttntype = this.props.formType === "signup" ? "Sign Up" : "Log In";

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form-greeting-1">Welcome to Grouple!</div>
          <div className="login-form-greeting-2">We're so excited to have you!</div>
          {/* {" " + formtype + " now!"} */}
          <div className="login-form">
            {/* {this.props.formType === "signup" ? extendedForm() : <br />} */}
            <input className="login-email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')}
            />
            <input className="login-password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            { this.renderErrors() }
            <button className="submit-bttn" onClick={this.handleSubmit}>{bttntype}</button>
            <div className="session-form-ending-tag">{this.props.navLink}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);