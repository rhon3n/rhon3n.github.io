import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class EducationTile extends Component {
  render() {
    return (
      <Tile kind="child" size={8} notification color="primary">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">EDUCATION</span>
        <br />
        <br />
        <li className="has-text-left is-size-5">Udacity - Grow with Google Challenge Course</li>
        <li className="has-text-left is-size-5">Codecademy - Intro to JS</li>
        <li className="has-text-left is-size-5">freecodecamp - Html 5, CSS, React, JS</li>
        <br />
        <p className="has-text-center is-size-5 has-text-weight-bold">
          {' '}
          Always a lifelong learner, dying to learn more and stay sharp
        </p>
      </Tile>
    );
  }
}
