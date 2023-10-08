import React from 'react';
import styled from 'styled-components';

import LinkedinIcon from '../assets/linkedin-hover.png';
import GithubIcon from '../assets/github-hover.png';
import EmailIcon from '../assets/emailicon.png';

const ContactIconsWrapper = styled.div`
display: flex;
justify-content: center;

margin-top: 1rem;

//tablet and larger
@media screen and (min-width: 668px) {
  display: flex;
  justify-content: space-evenly;
  background-color: #f1b7e35c;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
border-radius: 10px;
  margin: 2rem;
 


  

   
    
}
`
const Icon = styled.img`
  width: 2rem;
  margin: 1rem;
    flex-shrink: 0; 
&:hover {
    transform: scale(1.2); // Scale up the icon on hover
     transition: transform 0.2s ease; 
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