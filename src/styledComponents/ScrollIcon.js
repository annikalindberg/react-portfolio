import React from 'react';
import styled from 'styled-components';
import letsScroll from '../assets/buttons/letsScroll.png';

const ScrollIcon = styled.img`
width: 8rem;

flex-shrink: 0;
stroke: #0b24f5;
stroke-width: 3px;
`
const ScrollWrapper = styled.div`
max-width: 8.5rem;
flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;
`
const LetsScroll = () => {
  return (
    <ScrollWrapper>
      <ScrollIcon src={letsScroll} alt="scroll icon" />
    </ScrollWrapper>
  )
}

export default LetsScroll;

