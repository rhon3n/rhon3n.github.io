import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class ExperienceTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="link">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">DEV EXPERIENCE</span>
        <br />
        <br /> <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="https://measure.coffee">
            measure.coffee
          </a>{' '}
          - Founder and founding engineer of a context-aware coffee product that brings equipment, brew details, recipes,
          and agent guidance into one workflow.
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="https://www.zeroclick.ai">
            ZeroClick.ai
          </a>{' '}
          - Software Engineer on the Automations Team, building retailer integrations, experiments, and internal workflows.
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="https://www.joinhoney.com">
            PayPal Honey
          </a>{' '}
          - Store Integration Specialist, then Technical Solutions Engineer, working on browser-extension and merchant-integration platforms.
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="http://www.github.com/rhon3n">
            GitHub
          </a>{' '}
          - Explore selected contributions and smaller projects.
          <br />
        </li>
      </Tile>
    );
  }
}
