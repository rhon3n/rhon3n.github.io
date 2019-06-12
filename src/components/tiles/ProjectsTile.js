import React, { Component } from 'react';
import { Tile, Box } from 'react-bulma-components/full';
import { TileTitle } from './tileitems/TileTitle';
import { TileBody } from './tileitems/TileBody';

export class ProjectsTile extends Component {
  state = {
    title: 'RECENT PROJECTS',
    todoTitle: 'React Todo App',
    todoURL: 'https://github.com/rhon3n/react-todo-list',
    todoBody:
      'A simple react application that gets a list of dummy todos from JSONplaceholder. This app allows you to add or remove todos from the list. Since this app is used to demonstrate my ability to control state among components in React without using Redux, it does not have a working backend—any changes made will not persist after a page reload.',
    cliTitle: 'Command Line Resume',
    cliURL: 'https://www.npmjs.com/package/rhonen-dev',
    cliBody:
      'Built a command line resume using Node. Run npm i -g rhonen-dev to install, then rhonen-dev to start the program.',
  };

  render() {
    const { title, todoBody, todoTitle, todoURL, cliBody, cliTitle, cliURL } = this.state;
    return (
      <Box className="has-background-light">
        <TileTitle title={title} />
        <Tile kind="parent" size={12}>
          <Tile kind="child" notification>
            <TileBody url={todoURL} title={todoTitle} body={todoBody} />
          </Tile>
          <Tile kind="child" notification> <TileBody url={cliURL} title={cliTitle} body={cliBody} /></Tile>
         
        </Tile>
      </Box>
    );
  }
}

export default ProjectsTile;
