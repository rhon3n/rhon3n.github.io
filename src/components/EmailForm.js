import React, { Component } from 'react';
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

// Creates a form for collecting email.
export class EmailForm extends Component {
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