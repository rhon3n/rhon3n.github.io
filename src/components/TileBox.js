import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';
import { SkillsTile, ExperienceTile, GoalTile, WorkTile, EducationTile, ProjectsTile } from './componentIndex';

// This is a layout composition component for any components that are bulma tiles.
export class TileBox extends Component {
  render() {
    return (
      <Tile kind="ancestor" vertical>
        <SkillsTile />
        <ProjectsTile />
        <Tile size={12} kind="parent">
          <ExperienceTile />
          <GoalTile />
        </Tile>
        <Tile size={12} kind="parent">
          <WorkTile />
          <EducationTile />
        </Tile>
      </Tile>
    );
  }
}
