import React, { Component } from 'react';
import './App.css';
import './dopestyles.scss';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  Image,
  Navbar,
  Columns,
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
import { WelcomeModal } from './components/WelcomeModal';
import { TileBox } from './components/Tiles';
import './helpers/fontawesome';
import { CenteredColumn } from './components/CenteredColumn'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <Navbar fixed="top">
          <Icon size="large">
              <FontAwesomeIcon icon={["fas", "handshake"]} size="2x" className="is-primary has-text-centered has-text-grey-dark" />
          </Icon>
          </Navbar>
          <Hero color="primary" gradient size="medium">
            <Container fluid>
              <Hero.Body>
                <a className="title has-background-grey-dark is-size-2"> Hi! I'm Joel </a><span className="is-size-2" role="img" aria-label="waving hand emoji">👋</span><br />
                <h2 className="subtitle is-italic">I believe software should address human needs to achieve healthy results.</h2>
                <Level>
                  <Level.Item>
                    <Tag.Group gapless>
                      <Tag color="primary">COLLABORATOR</Tag>
                      <Tag>LEADER</Tag>
                      <Tag color="link">INNOVATOR</Tag>
                    </Tag.Group>
                  </Level.Item>
                </Level>
                <Level>
                    <Level.Item>
                      <Icon size="large">
                        <span>
                          <a href="https://www.linkedin.com/in/joel-t-rhine/"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a>
                        </span>
                      </Icon>
                      <Icon size="large">
                        <span>
                          <a href="https://github.com/rhon3n"><FontAwesomeIcon icon={["fab", "github-square"]} size="2x" /></a>
                        </span>
                      </Icon>
                      <Icon size="large">
                        <span>
                          <a href="https://www.freecodecamp.org/rhon3n"><FontAwesomeIcon icon={["fab", "free-code-camp"]} size="2x" /></a>
                        </span>
                      </Icon>
                    </Level.Item>
                </Level>
              </Hero.Body>
            </Container>
          </Hero>
        </Section>
        <CenteredColumn />
        <Section>
          <TileBox />
        </Section>
        <Section>
        <span className="title has-background-grey-dark is-size-2 has-text-white">Interested in working together?</span><br/><br /><p className="is-size-4 is-italic"> Start a chat so we can open up the conversation!</p>
        </Section>
        <Footer>
          <Container>
            <Level>
              <Level.Item>
                <p>Made with <strike>love</strike> <span><FontAwesomeIcon icon={["fab", "react"]} size="2x" transform="down-3" /></span> by <strong>Joel Rhine</strong> aka <em>rhonen</em> <span role="img" aria-label="praying hands emoji">🙏</span></p>
              </Level.Item>
            </Level>
          </Container>
        </Footer>
      </div>      
    );
  }
}

export default App;
