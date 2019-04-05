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
            <p>To collaborate with a great team to create quality, mobile-first software experiences that make people feel good.<br /> <br /> Ultimately, I want to make the world better every day.<br /><br /><span role="img" aria-label="rocketship emoji">🚀</span></p>
        </Tile>
        )
    }
}
  
export class ExperienceTile extends Component {
    render() {
        return (
        <Tile kind="child" notification>
            <Heading>DEV EXPERIENCE</Heading>
            <p><a href="http://www.dunecoffee.com">dunecoffee.com</a> -<strong> css style upkeep + animations + custom theming + wholesale portal</strong><br /><br /> portfolio - react website<br /><br /> hawaiicjc - js interactivity<br /><br /> github - demonstration of creativity, entrepreneurial spirit</p>
        </Tile>
        )
    }
}

export class EducationTile extends Component {
    render() {
        return (
        <Tile kind="child"  size={8} notification color="primary">
            <Heading>EDUCATION</Heading>
            <p>Udacity - Grow with Google Codecademy - Intro to JS freecodecamp Always a lifelong learner, dying to learn more and stay sharp</p>
        </Tile>
        )
    }
}

export class WorkTile extends Component {
    render() {
        return (
        <Tile kind="child" notification>
            <Heading>WORK EXPERIENCE</Heading>
            <p>Good Coffee<br />Dune Coffee Roasters</p>
        </Tile>
        )
    }
}