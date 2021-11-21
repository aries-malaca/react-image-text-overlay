import React from 'react';
import { Container } from './styles';

// Delete me
export const ReactImageText: React.FC<Props> = ({ backgroundImage, textSet }) => {
  const fillText = textSet.concat(" ").repeat(5000);

  return (
    <Container backgroundImage={ backgroundImage }>
      <div>{ fillText }</div>
    </Container>
  );
};

interface Props {
  backgroundImage?: any;
  textSet: string;
}