import React, { Component } from 'react';
import './App.css';
import './dopestyles.scss';
import './index.scss';
import { Section } from "react-bulma-components/full";
import { CenteredColumn, EmailForm, TileBox, RhonenFooter, ContactInfo, MainHero, Nav } from './components/componentIndex';
import './helpers/fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section>
          <Nav />
          <MainHero />
        </Section>
        <CenteredColumn />
        <Section>
          <TileBox />
        </Section>
        <Section>
          <ContactInfo />
        </Section>
        <RhonenFooter />
      </div>      
    );
  }
}

export default App;
