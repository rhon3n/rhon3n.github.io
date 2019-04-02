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
                  </Tag.Group></Level.Item>
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
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="email" placeholder="you@arecool.io 😎" />
            </div>
            <a class="button has-background-info has-text-white">Stay in touch</a>
          </div>
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
      <Tile kind="ancestor">
        <Tile size={4}>
          <Tile>
            <Tile kind="parent" >
              <GoalTile />
            </Tile>               
          </Tile>
        </Tile>
        <Tile size={8}>
        <Tile>
            <Tile kind="parent" color="purple" >
              <ResumeTile />
            </Tile>               
        </Tile>
        </Tile>
      </Tile>
    )
  }
}

class GoalTile extends Component {
  render() {
    return (
      <Tile kind="child" notification>
        <Heading>MY GOAL</Heading>
        <p>To collaborate with a great team to create quality, mobile-first software experiences that make people feel good.<br /> <br /> Ultimately, I want to make the world better every day.<br /><br />🚀</p>
      </Tile>
    )
  }
}

class ResumeTile extends Component {
  render() {
    return (
      <Tile kind="child" notification color="link">
        <Heading>DEV EXPERIENCE</Heading>
        <p><a href="http://www.dunecoffee.com">dune</a> - css style upkeep + animations + custom theming + wholesale portal<br /><br /> portfolio - react website<br /><br /> hawaiicjc - js interactivity<br /><br /> github - demonstration of creativity, entrepreneurial spirit</p>
      </Tile>
    )
  }
}

export default App;
