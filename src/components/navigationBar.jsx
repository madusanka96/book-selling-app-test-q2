import React, { Component } from 'react';

class NavigationBar extends Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.nytimes.com/section/books">Book</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.nytimes.com/section/travel">Travel</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.nytimes.com/section/arts">Arts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://www.nytimes.com/section/style">Style</a>
      </li>
    </ul>
  </div>
</nav>
        );
    }
}
 
export default NavigationBar;