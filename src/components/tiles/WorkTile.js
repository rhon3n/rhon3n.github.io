import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class WorkTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="primary">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">WORK EXPERIENCE</span>
        <br />
        <br />
        <li className="has-text-left is-size-5">PayPal Honey (formerly Honey) - Technical Solutions Engineer</li>
        <li className="has-text-left is-size-5">SBIT Group LLC - Network Technician</li>
        <li className="has-text-left is-size-5">Dune Coffee Roasters - Lead Technician</li>
        <p className="has-text-left is-size-5">+&#8195;&#8195; Many, many other things in various fields...</p>
      </Tile>
    );
  }
}
