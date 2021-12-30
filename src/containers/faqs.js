import React from 'react';
import { Accordion } from '../components';
import NewsLetter from '../components/newsLetter';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <NewsLetter>
        <NewsLetter.Input placeholder="Email address" />
        <NewsLetter.Button>Try it now</NewsLetter.Button>
        <NewsLetter.Break />
        <NewsLetter.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </NewsLetter.Text>
      </NewsLetter>
    </Accordion>
  );
}
