import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class SkillsTile extends Component {
  render() {
    return (
      <Tile kind="child" notification>
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">SKILLS</span>
        <br />
        <br />
        <div className="has-text-left is-size-5">
          <li>Node</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Heroku</li>
          <li>HTML/CSS</li>
          <li>Git</li>
          <li>Vue</li>
          <li>Responsive Web Dev</li>
        </div>
      </Tile>
    );
  }
}

export default SkillsTile;
