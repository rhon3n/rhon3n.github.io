import React, { Component } from 'react';
import { Footer, Level, Container } from 'react-bulma-components/full';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class FooterSection extends Component {
  render() {
    return (
      <Footer>
        <Container>
          <Level>
            <Level.Item className="has-text-grey">
              <p>
                Made with <strike>love</strike>{' '}
                <span>
                  <FontAwesomeIcon icon={['fab', 'react']} size="2x" transform="down-3" />
                </span>{' '}
                by <strong className="has-text-grey">Joel Rhine</strong> aka <em>rhonen</em>{' '}
                <span role="img" aria-label="praying hands emoji">
                  🙏
                </span>
              </p>
            </Level.Item>
          </Level>
        </Container>
      </Footer>
    );
  }
}
