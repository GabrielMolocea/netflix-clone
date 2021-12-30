import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/newsLetter';

export default function NewsLetter({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

NewsLetter.Input = function NewsLetterInput({ ...restProps }) {
  return <Input {...restProps} />;
};

NewsLetter.Button = function NewsLetterButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

NewsLetter.Text = function NewsLetterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

NewsLetter.Break = function NewsLetterBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
