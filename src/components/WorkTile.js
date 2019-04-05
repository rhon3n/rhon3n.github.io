import React, { Component } from 'react';
import { 
    OpenModal,
    Image,
    Media,
    Button,
    Content,
    Modal,
    Card,
    Icon,
    Footer,
    Level,
    Tag,
    Tile,
    Section,
    Heading,
    Container,
    Hero, } from "react-bulma-components/full";

    export class WorkTile extends Component {
      render() {
        return (
          <Tile kind="child" notification>
            <Heading>WORK EXPERIENCE</Heading>
            <p>Good Coffee<br />Dune Coffee Roasters</p>
          </Tile>
        )
      }
    }
