import React, { Component } from 'react';

// This component returns a string that is passed in as a property.
// Add the string as a value on the parent component's state object.

export class TileBody extends Component {
  render() {
    const { body, title, url } = this.props;
    return (
      <React.Fragment>
        <a className="title has-background-primary is-size-4 has-text-white highlight-title" href={url}>
          {title}
        </a>
        <p className="is-size-5">{body}</p>
      </React.Fragment>
    );
  }
}

export default TileBody;
