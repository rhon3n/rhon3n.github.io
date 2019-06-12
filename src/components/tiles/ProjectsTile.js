import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';
import { TileTitle } from './tileitems/TileTitle';

export class ProjectsTile extends Component {
  state = {
    title: 'RECENT PROJECTS',
  };

  render() {
    const { title } = this.state;
    return (
      <Tile kind="child" size={12}>
        <TileTitle title={title} />
      </Tile>
    );
  }
}

export default ProjectsTile;
