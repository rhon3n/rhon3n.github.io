import React, { Component } from 'react';
import { Box, Tile } from 'react-bulma-components/full';

export class SkillsTile extends Component {
  render() {
    return (
      <Box className="has-background-light">
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">SKILLS</span>
        <Tile kind="parent" className="is-center">
          <Tile kind="child" className="has-text-left is-size-5 has-text-weight-bold">
            <li>NodeJS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Jira</li>
          </Tile>
          <Tile kind="child" className="has-text-left is-size-5 has-text-weight-bold">
            <li>Agile</li>
            <li>Git</li>
            <li>New Engineer Onboarding</li>
            <li>People Management</li>
          </Tile>
        </Tile>
      </Box>
    );
  }
}
