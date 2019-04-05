import React, { Component } from 'react';
import './App.css';
import './mystyles.scss';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
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
          <Hero color="primary" gradient size="medium">
            <Container fluid>
              <Hero.Body>
                <h1 className="title">Hi, I'm Joel <span role="img" aria-label="waving hand emoji">👋</span></h1>
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
        <p className="has-text-weight-bold is-size-4">Thank you for looking! 👀</p>
        </Section>
        <Footer>
          <Container>
            <Level>
              <Level.Item>
                <p>Made with <strike>love</strike> React by <strong>Joel Rhine</strong> aka <em>rhonen</em> <span role="img" aria-label="praying hands emoji">🙏</span></p>
              </Level.Item>
            </Level>
          </Container>
        </Footer>
      </div>      
    );
  }
}

export default App;
