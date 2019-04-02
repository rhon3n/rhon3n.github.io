import React, { Component } from 'react';
import './App.css';
import './index.scss';
import { 
  Level,
  Tag,
  Box,
  Tile,
  Section,
  Heading,
  Container,
  Hero, } from "react-bulma-components/full";

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
                      <Tag>PROBLEM-SOLVER</Tag>
                      <Tag color="link">ENTREPRENEUR</Tag>
                    </Tag.Group>
                  </Level.Item>
                </Level>
              </Hero.Body>
            </Container>
          </Hero>
        </Section>
        <MainContent />
        <EmailForm />
      </div>      
    );
  }
}

// Creates an form for collecting email.
class EmailForm extends Component {
  render() {
    return (
      <Section class="is-flex-mobile">
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

class MainContent extends Component {
  render() {
    return (
      <Section>
          <TileBox />
      </Section>
    )
  }
}

class TileBox extends Component {
  render() {
    return (      
      <Tile kind="ancestor" vertical>
        <Tile size={12} kind="parent">
          <Tile>
              <GoalTile />
              <ExperienceTile />           
          </Tile>
        </Tile>
        <Tile size={12} kind="parent">
            <EducationTile />
        </Tile>
      </Tile>
    )
  }
}

class GoalTile extends Component {
  render() {
    return (
      <Tile kind="child" size={4} notification>
        <Heading>MY GOAL</Heading>
        <p>To collaborate with a great team to create quality, mobile-first software experiences that make people feel good.<br /> <br /> Ultimately, I want to make the world better every day.<br /><br /><span role="img" aria-label="rocketship emoji">🚀</span></p>
      </Tile>
    )
  }
}

class ExperienceTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="link">
        <Heading>DEV EXPERIENCE</Heading>
        <p><a href="http://www.dunecoffee.com">dunecoffee.com</a> -<strong> css style upkeep + animations + custom theming + wholesale portal</strong><br /><br /> portfolio - react website<br /><br /> hawaiicjc - js interactivity<br /><br /> github - demonstration of creativity, entrepreneurial spirit</p>
      </Tile>
    )
  }
}

class EducationTile extends Component {
  render() {
    return (
      <Tile kind="child"  size={12} notification color="primary">
        <Heading>EDUCATION</Heading>
        <p>Udacity - Grow with Google Codecademy - Intro to JS freecodecamp Always a lifelong learner, dying to learn more and stay sharp</p>
      </Tile>
    )
  }
}

export default App;
