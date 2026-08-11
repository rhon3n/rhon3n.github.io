import React, { Component } from 'react';
import { Columns, Section } from 'react-bulma-components/full';

export class Main extends Component {
  render() {
    return (
      <Section>
        <Columns>
          <Columns.Column size={8} offset={2}>
            <span className="title has-background-grey-dark is-size-2 has-text-white highlight-title">
              A little about me
            </span>
            <br />
            <br />
            <p className="is-size-5 has-text-left">
              I build useful software from a background in coffee, operations, and hands-on problem solving. That path has
              taught me to listen closely, make complex work clearer, and keep the people using a product in view.
            </p>
            <br />

            <p className="has-text-left is-size-5">
              Before moving into software, I worked across coffee service, wholesale, logistics, and field leadership. I
              brought that operational perspective into engineering work on integrations, automation, and product systems.
            </p>
            <br />

            <p className="has-text-left is-size-5">
              Today, I pair that experience with an entrepreneurial approach to building products. I care about thoughtful
              collaboration, durable systems, and work that solves a real problem for someone.
            </p>
            <br />

            <p className="has-text-left is-size-5">
              I love to dream, theorize and strategize, and I love to <em>do</em> even more.
            </p>
            <br />

            <p className="has-text-left is-size-5">
              I'd love to hear what{' '}
              <em>
                <strong>you</strong>
              </em>{' '}
              have to say. <strong>Drop a line!</strong>
            </p>
            <br />

            <span className="title has-background-grey-dark is-size-4 has-text-white highlight-title">
              Let’s make the world better, every day.{' '}
            </span>
          </Columns.Column>
        </Columns>
      </Section>
    );
  }
}
