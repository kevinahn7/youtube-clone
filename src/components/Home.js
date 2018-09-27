import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/results">Search</Link>
        <Link to="/video">Video</Link>
      </div>
    );
  }
}

export default Home;
