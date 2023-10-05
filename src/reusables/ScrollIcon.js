import React, { useState } from 'react';
import styled from 'styled-components';
import letsScroll from '../assets/buttons/letsScroll.png';

const LetsScroll = () => {
  const [visable, setVisable] = useState(false);

  // this means that the button will only be visable when the user has scrolled 300px down the page
  const toggleVisable = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisable(true);
    } else if (scrolled <= 300) {
      setVisable(false);
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  window.addEventListener('scroll', toggleVisable);

  const ScrollButton = styled.button`
width: 8rem;

flex-shrink: 0;
stroke: #0b24f5;
stroke-width: 3px;
`
  const ScrollWrapper = styled.div`

flex-shrink: 0;
display: flex;
flex-direction: column;
align-items: center;
gap: 0.5rem;

`

  return (
    <ScrollWrapper>
      <ScrollButton
        type="button"
        onClick={scrollToTop}
        src={letsScroll}
        style={{ display: visable ? 'inline' : 'none' }}
        alt="scroll icon" />
    </ScrollWrapper>
  )
}

export default LetsScroll;

