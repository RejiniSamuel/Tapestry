import styled, { keyframes } from 'styled-components';
 
const coolBoxKeyframes = keyframes`
  0% {
    height: 0px;
    width: 0px;
    background: white;

  }
  100% {
    height: 350px;
    width: 200px;
    background: blue;
    border-radius: 20px;
    z-index:210;
  }
`
 
export const CoolBox = styled.div`
  display: inline-block;
  background: green;
  width: 100px;
  position: absolute;
  z-index:200;
  left:10%;
  top:10%;
  pointer-events:none;
  animation-name: ${coolBoxKeyframes};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: -1s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`


export default CoolBox