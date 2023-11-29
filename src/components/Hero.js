// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitle, Name, OnLightText, PlusTextStyling } from '../reusables/FontStyles';
import { ProfileImage } from '../reusables/imagesStyles';
import annikaprofile from '../assets/profil-square.jpg';
import ContactLinks from '../reusables/ContactLinks';
import SVGAnimation from './BakcgroundAnimation';
import { ProfileImageWrapper, PinkGradientWrapper, ProfileAndInfoWrapper, PresentationWrapper, InfoWrapper, InnerWrapper } from '../reusables/Wrappers';


/* const ProfileInfoParagraphTextStructure = styled.div`
  @media screen and (min-width: 668px) {
  flex-direction: column;

  border: 1px solid green;
  }

  @media screen and (min-width: 1024px) {
  margin-top: 1vh;
  }

  `; */


const HeroSection = () => {
  return (
    <PresentationWrapper id="home">

      <InnerWrapper>
          <ProfileAndInfoWrapper>
            <ProfileImageWrapper>
              <ProfileImage

                src={annikaprofile} alt="Profile" />
            </ProfileImageWrapper>

            <InfoWrapper>
            <Name>Annika Lindberg</Name>
            <JobTitle>Frontend Developer</JobTitle>

            </InfoWrapper>
          </ProfileAndInfoWrapper>
          <PinkGradientWrapper>
          <OnLightText style={{ paddingBottom: '20px' }} >
          I'm a solution-driven, highly motivated Frontend Developer with a success focused mindset and a team-focused attitude. My deep-rooted passion for coding, combined with a never-ending appetite for learning, drives me to code each day and actively seek opportunities to secure my first developer position. </OnLightText>
          <OnLightText style={{ paddingBottom: '20px' }} > Before transitioning career into the tech arena I worked with purpose driven non profits and startups within the field of DEIB (Diversity, Inclusion, Equity sand Belonging). I know how to make large impact with very limited resources, adapting quickly to various situations and how to work in a fast paced environment without compromising on quality.
          </OnLightText>
          <OnLightText >
            In me, you'll find a dedicated and adaptive team player with a strong sense of responsibility, a deep-rooted passion for coding and a never ending appetite for learning. I carry a unique blend of skills and brings just the kinds of holistic talent that the tech industry needs. 
          </OnLightText> 
          </PinkGradientWrapper>
                    <ContactLinks />

      </InnerWrapper>
    </PresentationWrapper>
    );

};

export default HeroSection;