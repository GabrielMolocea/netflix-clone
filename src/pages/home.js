import React from 'react';
// Temp
import { NewsLetter, Feature } from '../components';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footer';
import { JumbotronContainer } from '../containers/jumbotron';
import { HeaderContainer } from '../containers/heder';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Wath anywhere. Cancel at any time.
          </Feature.SubTitle>
          <NewsLetter>
            <NewsLetter.Input placeholder="Email address" />
            <NewsLetter.Button>Try it now</NewsLetter.Button>
            <NewsLetter.Break />
            <NewsLetter.Text>
              Ready to watch? Enter your email to create or restart your
              membership.
            </NewsLetter.Text>
          </NewsLetter>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
