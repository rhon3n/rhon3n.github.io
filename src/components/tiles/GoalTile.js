import React, { Component } from 'react';
import { Tile } from 'react-bulma-components/full';

export class GoalTile extends Component {
  render() {
    return (
      <Tile kind="child" size={4} notification>
        <span className="title has-background-grey-dark is-size-3 has-text-white highlight-title">MY GOAL</span>
        <br />
        <br />
        <p className="is-size-5">
          To collaborate with a great team to create quality, mobile-first software experiences that make people feel
          good.
          <br /> <br /> Ultimately, I want to make the world better every day.
          <br />
          <br />
          <span className="is-size-3" role="img" aria-label="world emoji">
            🌍
          </span>
        </p>
      </Tile>
    );
  }
}
