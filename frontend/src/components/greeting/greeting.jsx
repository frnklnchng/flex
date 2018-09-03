import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
    </nav>
  );
  const personalGreeting = ({ email }) => (
    <hgroup className="greeting-main">
      <h2 className="greeting-email">{email}</h2>
      <button className="greeting-button" onClick={() => logout()}>Log Out</button>
    </hgroup>
  );

  return currentUser.handle ? sessionLinks() : personalGreeting(currentUser);
};

export default Greeting;