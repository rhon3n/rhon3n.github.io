import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class WorkTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="primary">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">WORK EXPERIENCE</span>
        <br />
        <br />
        <li className="has-text-left is-size-5">Good Coffee LLC</li>
        <li className="has-text-left is-size-5">Dune Coffee Roasters</li>
      </Tile>
    );
  }
}
