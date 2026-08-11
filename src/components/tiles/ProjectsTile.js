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
    shaderStudioTitle: 'Shader Studio',
    shaderStudioURL: 'https://rhonen.design/shader-studio/',
    shaderStudioSourceURL: 'https://github.com/rhon3n/shader-studio',
    shaderStudioBody:
      'Shader Studio turns uploaded images and video into animated visual treatments through a configurable stack of shader and media-processing layers. It pairs a live WebGL2 preview with Lumen, Liquid Shape, ASCII, Particular Drift, and Media Prep modules, then exports stills, animations, or reusable project settings without sending source media off-device.',
  };

  render() {
    const {
      title,
      measureBody,
      measureTitle,
      measureURL,
      shaderStudioBody,
      shaderStudioSourceURL,
      shaderStudioTitle,
      shaderStudioURL,
    } = this.state;
    const measureIcon = <FontAwesomeIcon icon={['fab', 'react']} size="3x" transform="down-3" className="has-text-grey" />;
    const shaderStudioIcon = (
      <FontAwesomeIcon icon={['fas', 'code']} size="3x" transform="down-3" className="has-text-grey" />
    );

    return (
      <Box className="has-background-light">
        <TileTitle title={title} />
        <Tile kind="parent" size={12}>
          <Tile kind="child" notification>
            <TileBody url={measureURL} title={measureTitle} body={measureBody} icon={measureIcon} />
          </Tile>
          <Tile kind="child" notification>
            <TileBody
              url={shaderStudioURL}
              sourceUrl={shaderStudioSourceURL}
              title={shaderStudioTitle}
              body={shaderStudioBody}
              icon={shaderStudioIcon}
            />
          </Tile>
        </Tile>
      </Box>
    );
  }
}

export default ProjectsTile;
