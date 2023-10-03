// src/components/LandingPage.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const GetStarted = () => <div>Get Started Content</div>;
const Contact = () => <div>Contact Content</div>;
const Login = () => <div>Login Content</div>;

const LandingPage = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/get-started">Get Started</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/get-started" component={GetStarted} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
};

export default LandingPage;
