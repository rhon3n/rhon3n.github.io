import React, { Component } from 'react';
import './App.css';
import './index.scss';
import './mystyles.scss';
import { 
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
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { 
    faPaperPlane,
    faStar,
    faWater,
    faEnvelope,
   } from '@fortawesome/free-solid-svg-icons'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import { 
    faLinkedin,
    faGithubSquare,
    faGitSquare,
    faReact,
    faJsSquare,
    faNodeJs,
    faCss3,
    faHtml5,
    faEthereum,
    faWix,
    faFreeCodeCamp,
  } from '@fortawesome/free-brands-svg-icons'
  import { WelcomeModal } from './components/WelcomeModal';
  import { TileBox } from './components/Tiles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <Hero color="primary" gradient size="medium">
            <Container fluid>
              <Hero.Body>
                <h1 className="title">Hi, I'm Joel <span role="img" aria-label="waving hand emoji">👋</span></h1>
                <h2 className="subtitle">Thanks for stopping by!</h2>
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
        <WelcomeModal />
        </Section>
        <Section>
          <TileBox />
        </Section>
        <EmailForm />
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

// Creates a form for collecting email.
class EmailForm extends Component {
  render() {
    return (
      <Section>
        <Container>
          <Level>
            <Level.Item>
              <div class="field has-addons">
                <div class="control">
                  <input class="input" type="email" placeholder="you@arecool.io 😎" />
                </div>
                <a class="button has-background-info has-text-white">Stay in touch</a>
              </div>
            </Level.Item>
          </Level>
        </Container>
      </Section>
    )
  }
}

library.add(
  faLinkedin,
  faGithubSquare,
  faGitSquare,
  faReact,
  faJsSquare,
  faNodeJs,
  faCss3,
  faHtml5,
  faEthereum,
  faWix,
  faEnvelope
  )

export default App;
