import React from 'react';
import styled from 'styled-components';

import LinkedinIcon from '../assets/linkedin-hover.png';
import GithubIcon from '../assets/github-hover.png';
import EmailIcon from '../assets/emailicon.png';

const ContactIconsWrapper = styled.div`
display: flex;

justify-content: flex-start;
margin-left: 6rem;

//tablet and larger
@media screen and (min-width: 768px) {
   // align vertically with the headline
  

   
    
}
`
const Icon = styled.img`
  width: 2rem;
  margin: 1rem;
    transition: transform 0.2s ease; // Add a smooth transition for the hover effect
    flex-shrink: 0; // Prevent the icon from shrinking when the window is too small
&:hover {
    transform: scale(1.2); // Scale up the icon on hover
  }
 
`;

const ContactIconBar = () => {
  return (
    <ContactIconsWrapper>
      <a
        href="https://www.linkedin.com/in/annika-lindberg-1b1b1b1b1/"
        target="_blank"
        rel="noreferrer">

        <Icon
          src={LinkedinIcon}
          alt="linkedin icon" />
      </a>
      <a
        href="https://github.com/annikalindberg"
        target="_blank"
        rel="noreferrer">
        <Icon
          src={GithubIcon}
          alt="github icon" />
      </a>
      <a
        href="mailto:annika.edit.lindberg@gmail.com"
        target="_blank"
        rel="noreferrer">
        <Icon
          src={EmailIcon}
          alt="email icon" />
      </a>

    </ContactIconsWrapper>
  );
};
export default ContactIconBar;