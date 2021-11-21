import styled from 'styled-components';

interface ContainerProps {
  backgroundImage?: any;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${props=> props.backgroundImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  word-break: break-all;
  overflow: hidden;
  font-weight: 600;
  background-color: black;
  font-family: arial;

  div{
    mix-blend-mode: overlay;
    color: #ffffff8c;
  }
`;