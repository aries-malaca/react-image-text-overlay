import React from 'react';

// Delete me
export const ReactImageText: React.FC<Props> = ({ backgroundImage, textSet }) => {
  const fillText = textSet.concat(" ").repeat(5000);

  const componentStyle = {
    backgroundImage: `url(${ backgroundImage })`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
    fontWeight: 600,
    backgroundColor: 'black',
    fontFamily: 'arial'
  }

  return (
    <section style={ componentStyle }>
      <div style={{ mixBlendMode: 'overlay', color: '#ffffff8c' }}>{ fillText }</div>
    </section>
  );
};


interface Props {
  backgroundImage?: any;
  textSet: string;
}