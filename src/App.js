import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import { Hero } from "react-bulma-components/full";
import { Section } from "react-bulma-components/full";

class App extends Component {
  render() {
    return (
      <Section>
        <Hero color="primary" gradient>
          <Hero.Body>
            <h1 className="title">Hello 👋</h1>
            <h2 className="subtitle">Thanks for stopping by!</h2>
          </Hero.Body>
        </Hero>
      </Section>
      
    );
  }
}

class River extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="test-button" className="card">
        <div className="card-content">TEST</div>
      </div>
    )
  }
}

export default App;
