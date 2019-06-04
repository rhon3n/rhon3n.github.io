import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Icon,
  Navbar, } from "react-bulma-components/full";

  export class Nav extends Component {
    render() {
      return (
        <div className="is-block" >
          <Navbar fixed="top">
            <Icon size="large">
                <FontAwesomeIcon icon={["fas", "handshake"]} size="2x" className="is-primary has-text-centered has-text-grey-dark" />
            </Icon>
            <div className="buttons has-addons is-pulled-right">
              <span className="button is-outlined">dark</span>
              <span className="button is-outlined">light</span>
            </div>
          </Navbar>
          
        </div>
      )
    }
  }