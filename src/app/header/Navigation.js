import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">Holocs</Link>
          </div>

          <div className="collapse navbar-collapse" id="main-nav">
            <ul className="nav navbar-nav">
              <li><Link activeClassName="active" to="/circles">Circles <span className="sr-only">(current)</span></Link></li>
              <li><Link activeClassName="active" to="/meetings">Meetings</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link activeClassName="active" to="/users/sign-up">Sign up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
