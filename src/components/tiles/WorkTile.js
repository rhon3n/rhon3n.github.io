import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class WorkTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="primary">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">WORK EXPERIENCE</span>
        <br />
        <br />
        <li className="has-text-left is-size-5">measure.coffee - Founder &amp; Founding Engineer</li>
        <li className="has-text-left is-size-5">ZeroClick.ai - Software Engineer, Automations Team</li>
        <li className="has-text-left is-size-5">PayPal Honey - Store Integration Specialist, then Technical Solutions Engineer</li>
        <li className="has-text-left is-size-5">Dune Coffee Roasters - Barista, then Cafe, Roastery, and Wholesale Manager</li>
        <p className="has-text-left is-size-5" style={{ whiteSpace: 'pre' }}>    +   Earlier work in service, logistics, and field leadership</p>
      </Tile>
    );
  }
}
