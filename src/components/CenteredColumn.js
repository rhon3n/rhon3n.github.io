import React, { Component } from 'react';
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

export class CenteredColumn extends Component {
    render() {
        return (
            <Section>
            <Columns>
                <Columns.Column size={8} offset={2} >
                    <Heading>Welcome Friend!</Heading>
                    <p className="has-text-justified is-size-5">After 15 years in the coffee industry, I’ve mastered nearly every position that your average coffee roasting company has to offer. If there is one thing I've learned in that time, it's that working together to solve problems is something that I am great at and truly enjoy.</p><br />

                    <p className="has-text-justified is-size-5">With my natural curiosity and savvy for all things tech, it dawned on me that I should leverage the power of the internet to assist in a career pivot. I began devouring course after course of content to learn to code and am here, today ready to open the door to a new domain. I look forward to every moment of it.</p><br />

                    <p className="is-size-4 has-text-weight-bold">Let’s make the world better, every day. </p>
                </Columns.Column>
            </Columns>
            </Section>
        )
    }
}