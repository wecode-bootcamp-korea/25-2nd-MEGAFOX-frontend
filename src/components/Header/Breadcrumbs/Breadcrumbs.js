import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
  render() {
    return (
      <ul className="Breadcrumbs">
        <li>
          <Link to="/main">Home</Link>
        </li>
      </ul>
    );
  }
}

export default Breadcrumbs;
