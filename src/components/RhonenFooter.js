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
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//TODO: Refactor footer in App.js here...
export class RhonenFooter extends Component {
    render() {
        return (
          <Footer>
            <Container>
              <Level>
                <Level.Item>
                  <p>Made with <strike>love</strike> <span><FontAwesomeIcon icon={["fab", "react"]} size="2x" transform="down-3" /></span> by <strong>Joel Rhine</strong> aka <em>rhonen</em> <span role="img" aria-label="praying hands emoji">🙏</span></p>
                </Level.Item>
              </Level>
            </Container>
          </Footer>
        )
    }
}
