import React, { Component } from 'react';
import { Tile, Box } from 'react-bulma-components/full';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TileTitle } from './tileitems/TileTitle';
import { TileBody } from './tileitems/TileBody';

export class ProjectsTile extends Component {
  state = {
    title: 'RECENT PROJECTS',
    todoTitle: 'Todo App',
    todoURL: 'https://github.com/rhon3n/react-todo-list',
    todoBody:
      'A simple react application that gets a list of dummy todos from JSONplaceholder. This app allows you to add or remove todos from the list. Since this app is used to demonstrate my ability to control state among components in React without using Redux, it does not have a working backend—any changes made will not persist after a page reload.',
    cliTitle: 'Command Line Resume',
    cliURL: 'https://www.npmjs.com/package/rhonen-dev',
    cliBody:
      'A command line resume built using Node and the chalk.js library for an improved user experience. This application walks you through various aspects of my experience as a developer and person in general.',
  };

  render() {
    const { title, todoBody, todoTitle, todoURL, cliBody, cliTitle, cliURL } = this.state;
    const todoIcon = (
      <FontAwesomeIcon icon={['fab', 'react']} size="3x" transform="down-3" className="has-text-grey" />
    );
    const npmIcon = <FontAwesomeIcon icon={['fab', 'npm']} size="3x" transform="down-3" className="has-text-grey" />;

    return (
      <Box className="has-background-light">
        <TileTitle title={title} />
        <Tile kind="parent" size={12}>
          <Tile kind="child" notification>
            <TileBody url={todoURL} title={todoTitle} body={todoBody} icon={todoIcon} />
          </Tile>
          <Tile kind="child" notification>
            {' '}
            <TileBody url={cliURL} title={cliTitle} body={cliBody} icon={npmIcon} />
          </Tile>
        </Tile>
      </Box>
    );
  }
}

export default ProjectsTile;
