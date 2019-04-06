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

export class TileBox extends Component {
    render() {
        return (      
        <Tile kind="ancestor" vertical>
            <Tile size={12} kind="parent">
                <GoalTile />
                <ExperienceTile />
            </Tile>
            <Tile size={12} kind="parent">
                <EducationTile />
                <WorkTile/>
            </Tile>
        </Tile>
        )
    }
}

export class GoalTile extends Component {
    render() {
        return (
        <Tile kind="child" size={4} notification color="link">
            <Heading>MY GOAL</Heading>
            <p className="is-size-5">To collaborate with a great team to create quality, mobile-first software experiences that make people feel good.<br /> <br /> Ultimately, I want to make the world better every day.<br /><br /><span role="img" aria-label="rocketship emoji">🚀</span></p>
        </Tile>
        )
    }
}
  
export class ExperienceTile extends Component {
    render() {
        return (
        <Tile kind="child" notification>
            <Heading>DEV EXPERIENCE</Heading>
            <li className="has-text-left is-size-5">
                <a className="is-size-5 has-text-weight-bold" href="http://www.dunecoffee.com">DUNECOFFEE.COM</a> - css style upkeep + animations + custom theming + wholesale portal
            </li>
            <br />
            <li className="has-text-left is-size-5">
                <a className="is-size-5 has-text-weight-bold" href="https://github.com/rhon3n/rhon3n.github.io          ">RHONEN.DESIGN</a> - This website, built with React. <em>Check out my source on the dev branch!</em>
                <br />
            </li>
            <br />
            <li className="has-text-left is-size-5">
                <a className="is-size-5 has-text-weight-bold" href="http://www.hawaiicjc.org">HAWAIICJC.ORG</a> - js interactivity
            </li>
            <br />
            <li className="has-text-left is-size-5">
                <a className="is-size-5 has-text-weight-bold" href="http://www.github.com/rhon3n">GITHUB.COM</a> - demonstration of creativity, entrepreneurial spirit
            </li>
        </Tile>
        )
    }
}

export class EducationTile extends Component {
    render() {
        return (
        <Tile kind="child"  size={8} notification color="primary">
            <Heading>EDUCATION</Heading>
            <li className="has-text-left is-size-5">Udacity - Grow with Google Challenge Course</li>
            <li className="has-text-left is-size-5">Codecademy - Intro to JS</li> 
            <li className="has-text-left is-size-5">freecodecamp - Html 5, CSS, React, JS</li>
            <br />
            <p className="has-text-center is-size-5 has-text-weight-bold"> Always a lifelong learner, dying to learn more and stay sharp</p>
        </Tile>
        )
    }
}

export class WorkTile extends Component {
    render() {
        return (
        <Tile kind="child" notification>
            <Heading>WORK EXPERIENCE</Heading>
            <li className="has-text-left is-size-5">Good Coffee LLC</li>
            <li className="has-text-left is-size-5">Dune Coffee Roasters</li>
        </Tile>
        )
    }
}