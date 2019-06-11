import React, { Component } from 'react';
import { Box, Tile } from 'react-bulma-components/full';

export class SkillsTile extends Component {
  render() {
    return (
      <Box className="has-background-light">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">SKILLS</span>
        <Tile kind="parent" className="is-center">
          <Tile kind="child" className="has-text-left is-size-5 has-text-weight-bold">
            <li>Node</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Heroku</li>
          </Tile>
          <Tile kind="child" className="has-text-left is-size-5 has-text-weight-bold">
            <li>HTML/CSS</li>
            <li>Git</li>
            <li>Vue</li>
            <li>Responsive Web Dev</li>
          </Tile>
        </Tile>
      </Box>
    );
  }
}
