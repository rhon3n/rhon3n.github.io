import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class EducationTile extends Component {
  render() {
    return (
      <Tile kind="child" size={8} notification>
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">EDUCATION</span>
        <br />
        <br />
        <li className="has-text-center is-size-5">Udacity - Grow with Google Challenge Course</li>
        <br />
        <p className="has-text-center is-size-5 has-text-weight-bold">
          {' '}
          Always a lifelong learner, willing to learn more and stay sharp
        </p>
      </Tile>
    );
  }
}
