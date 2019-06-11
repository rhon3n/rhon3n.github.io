import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';
import { SkillsTile } from './tiles/SkillsTile';

export class TileBox extends Component {
  render() {
    return (
      <Tile kind="ancestor" vertical>
        <SkillsTile />
        <Tile size={12} kind="parent">
          <GoalTile />
          <ExperienceTile />
        </Tile>
        <Tile size={12} kind="parent">
          <EducationTile />
          <WorkTile />
        </Tile>
      </Tile>
    );
  }
}

export class GoalTile extends Component {
  render() {
    return (
      <Tile kind="child" size={4} notification color="link">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">MY GOAL</span>
        <br />
        <br />
        <p className="is-size-5">
          To collaborate with a great team to create quality, mobile-first software experiences that make people feel
          good.
          <br /> <br /> Ultimately, I want to make the world better every day.
          <br />
          <br />
          <span className="is-size-3" role="img" aria-label="world emoji">
            🌍
          </span>
        </p>
      </Tile>
    );
  }
}

export class ExperienceTile extends Component {
  render() {
    return (
      <Tile kind="child" notification>
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

export class WorkTile extends Component {
  render() {
    return (
      <Tile kind="child" notification>
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">WORK EXPERIENCE</span>
        <br />
        <br />
        <li className="has-text-left is-size-5">Good Coffee LLC</li>
        <li className="has-text-left is-size-5">Dune Coffee Roasters</li>
      </Tile>
    );
  }
}
