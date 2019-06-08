import React, { Component } from 'react';
import './App.css';
import './dopestyles.scss';
import './index.scss';
import { Section } from "react-bulma-components/full";
import { CenteredColumn, TileBox, RhonenFooter, ContactInfo, MainHero, Nav } from './components/componentIndex';
import { Footer } from './components/layout/Footer';
import { Main } from './components/layout/Main';
import { Hero } from './components/layout/Hero';
import { Nav } from './components/layout/Nav';
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
