import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';
import { TileTitle } from './tileitems/TileTitle';
import { TileBody } from './tileitems/TileBody';

export class ProjectsTile extends Component {
  state = {
    title: 'RECENT PROJECTS',
    subtitle: 'React Todo App',
    todoUrl: 'https://github.com/rhon3n/react-todo-list',
    body:
      'A simple react application that gets a list of dummy todos from JSONplaceholder. This app allows you to add or remove todos from the list. Since this app is used to demonstrate my ability to control state among components in React without using Redux, it does not have a working backend—any changes made will not persist after a page reload.',
  };

  render() {
    const { title, body, subtitle, todoUrl } = this.state;
    return (
      <Tile kind="parent" size={12}>
        <Tile kind="child" notification>
          {' '}
          <TileTitle title={title} />
          <TileBody url={todoUrl} title={subtitle} body={body} />
        </Tile>
      </Tile>
    );
  }
}

export default ProjectsTile;
