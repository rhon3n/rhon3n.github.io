import React, { Component } from 'react';

// This component returns a string that is passed in as a property.
// Add the string as a value on the parent component's state object.

export class TileTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">{title}</span>
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default TileTitle;
