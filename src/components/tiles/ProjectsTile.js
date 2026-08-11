import React, { Component } from 'react';
import { Tile, Box } from 'react-bulma-components/full';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TileTitle } from './tileitems/TileTitle';
import { TileBody } from './tileitems/TileBody';

export class ProjectsTile extends Component {
  state = {
    title: 'RECENT PROJECTS',
    measureTitle: 'measure.coffee',
    measureURL: 'https://measure.coffee',
    measureBody:
      'A context-aware coffee product that connects equipment, brew details, recipes, and agent guidance. I am its founder and founding engineer, shaping the product and its full-stack implementation.',
  };

  render() {
    const { title, measureBody, measureTitle, measureURL } = this.state;
    const measureIcon = <FontAwesomeIcon icon={['fab', 'react']} size="3x" transform="down-3" className="has-text-grey" />;

    return (
      <Box className="has-background-light">
        <TileTitle title={title} />
        <Tile kind="parent" size={12}>
          <Tile kind="child" notification>
            <TileBody url={measureURL} title={measureTitle} body={measureBody} icon={measureIcon} />
          </Tile>
        </Tile>
      </Box>
    );
  }
}

export default ProjectsTile;
