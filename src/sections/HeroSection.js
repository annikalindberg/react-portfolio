/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import profileSquare from '../assets/profil-square.jpg';
import { HeadlineWrapper, ProfileImageWrapper, TextWrapper, HeroWrapper } from '../styledComponents/Wrappers';
import ContactIconBar from '../styledComponents/ContactLinks';
import LetsScroll from '../styledComponents/ScrollIcon';
import HeroBackgroundImage from '../assets/rainbow.jpg';

// Use uppercase for styled component names
const ProfilePicture = styled.img`
  border-radius: 10.25rem; 
  width: 10.25rem; 
  height: 10.25rem;
  `;

const FirstHeader = styled.h1`
  color: #0B24F5;
  font-family: Satoshi;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SecondaryHeader = styled.h2`
  color: black;
  font-family: Satoshi;
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const Presentation = styled.p`
font-family: EB Garamond;
font-size: 1.3rem;
font-style: normal;
font-weight: 400;
line-height: 1.7rem;
`;

const HeroBackground = styled.img`
display: none;

// tablet and larger
@media screen and (min-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${HeroBackgroundImage});
background-size: cover;
width: 100%;
max-height: 412px;


  
}
  `

const Hero = () => {
  return (
    <>
      <HeroBackground src={HeroBackgroundImage} />
      <HeroWrapper>
        <HeadlineWrapper>
          <ProfileImageWrapper>
            <ProfilePicture src={profileSquare} alt="Annika profile picture" />
          </ProfileImageWrapper>
          <FirstHeader>Annika Lindberg</FirstHeader>
          <SecondaryHeader>Frontend Developer</SecondaryHeader>
          <TextWrapper>
            <Presentation>As a frontend developer, I bring a broad and user-oriented perspective, as well as a burning passion for code. Before switching careers to tech, I worked within social movement building and non-profit organizations, which helped me
            develop excellent coordination, teamwork, and communication skills.
            Now, I'm looking to join a team where I can continue to leverage my skills and grow my expertise in coding, working my way towards contributing to the creation of
            cutting-edge interfaces, cool  features, and effective code.
            </Presentation>
          </TextWrapper>
        </HeadlineWrapper>
        <ContactIconBar />
        <LetsScroll />
      </HeroWrapper>
    </>

  );
};
export default Hero;