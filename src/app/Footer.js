import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <nav className="navbar navbar-default navbar-fixed-bottom">
          <div className="container">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li><Link activeClassName="active" to="/circles">Circles <span className="sr-only">(current)</span></Link></li>
                <li><Link activeClassName="active" to="/meetings">Meetings</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
