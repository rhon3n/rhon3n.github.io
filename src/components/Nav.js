import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Icon,
  Navbar, } from "react-bulma-components/full";

  export class Nav extends Component {
    render() {
      return (
        <Navbar className="is-block" fixed="top">
          <Icon size="large">
              <FontAwesomeIcon icon={["fas", "handshake"]} size="2x" className="is-primary has-text-centered has-text-grey-dark" />
          </Icon>
        </Navbar>
      )
    }
  }