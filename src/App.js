import React, { Component } from 'react';
import './App.css';
import './dopestyles.scss';
import './index.scss';
import { Section } from 'react-bulma-components/full';
import { TileBox, ContactInfo, HeroSection, Nav, Main, FooterSection } from './components/componentIndex';
import './helpers/fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <Nav />
          <HeroSection />
        </Section>
        <Section>
          <TileBox />
        </Section>
        <Main />
        <Section>
          <ContactInfo />
        </Section>
        <FooterSection />
      </div>
    );
  }
}

export default App;
