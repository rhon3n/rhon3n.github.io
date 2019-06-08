import React, { Component } from 'react';
import { Icon } from 'react-bulma-components/full';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ContactInfo extends Component {
  state = {
    phone: '805-636-6997',
    email: 'joel@rhonen.design',
  };

  render() {
    return (
      <div>
        <span className="title has-background-grey-dark is-2 has-text-white highlight-title">
          Interested in working together?
        </span>
        <br />
        <br />
        <p className="is-size-4 is-italic"> Start a chat or give me a call so we can open up the conversation!</p>
        <br />

        <span className="title has-background-grey-dark is-3 has-text-white highlight-title">{this.state.phone}</span>
        <br />
        <br />
        <span className="title has-background-grey-dark is-3 has-text-white highlight-title">{this.state.email}</span>
        <br />
        <br />
        <span>
          <Icon size="extra-large">
            <FontAwesomeIcon
              icon={['fas', 'comments']}
              size="2x"
              className="is-primary has-text-centered has-text-grey-dark is-size-2"
            />
          </Icon>
        </span>
      </div>
    );
  }
}
