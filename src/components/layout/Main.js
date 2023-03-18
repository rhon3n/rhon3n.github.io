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
              I am a driven Software Developer looking to leverage years of industry experience to build products I'm proud of with people that I respect.
            </p>
            <br />

            <p className="has-text-left is-size-5">
              I'm a lifelong learner with an entrepreneurial spirit who rises to a challenge and loves to collaborate
              with my team.
            </p>
            <br />

            <p className="has-text-left is-size-5">
              I find common ground with nearly every person I've ever met and am passionate about making the world a
              better place for those who come after me.
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
              have to say—<strong>drop a line!</strong>
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
