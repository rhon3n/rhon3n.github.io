import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class ExperienceTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="link">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">DEV EXPERIENCE</span>
        <br />
        <br /> <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="https://www.joinhoney.com">
            PayPal Honey (formerly Honey)
          </a>{' '}
          - Triage, configure and maintain complex integrations for some of the largest retailers in the world.
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="http://www.github.com/rhon3n">
            Github
          </a>{' '}
          - Check out my Github for some of my contributions and small projects.
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="http://www.dunecoffee.com">
            dunecoffee.com
          </a>{' '}
          - CSS Style Upkeep + CSS Animations + Custom Theming + Custom Wholesale Portal
        </li>
        <br />
        <li className="has-text-left is-size-5">
          <a className="is-size-5 has-text-weight-bold" href="https://github.com/rhon3n/rhon3n.github.io/tree/dev">
            rhonen.design
          </a>{' '}
          - This website, built with React. <em>Check out my source on the dev branch!</em>
          <br />
        </li>
      </Tile>
    );
  }
}
