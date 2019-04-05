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
            <Columns>
                <Columns.Column size="half" offset="one-quarter">
                    <p className="heading is-size-3" >This is a freaking test<br />Please don't be angry.</p>
                </Columns.Column>
            </Columns>
        )
    }
}