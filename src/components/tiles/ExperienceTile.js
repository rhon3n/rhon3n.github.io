import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class ExperienceTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="link">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">DEV EXPERIENCE</span>
        <br />
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="http://www.dunecoffee.com">
            DUNECOFFEE.COM
          </a>{' '}
          - CSS Style Upkeep + CSS Animations + Custom Theming + Custom Wholesale Portal
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="https://github.com/rhon3n/rhon3n.github.io          ">
            RHONEN.DESIGN
          </a>{' '}
          - This website, built with React. <em>Check out my source on the dev branch!</em>
          <br />
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="http://www.hawaiicjc.org">
            HAWAIICJC.ORG
          </a>{' '}
          - JS Interactivity
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="http://www.github.com/rhon3n">
            GITHUB.COM
          </a>{' '}
          - Demonstration of creativity + Entrepreneurial Spirit + Project Management
        </li>
      </Tile>
    );
  }
}
