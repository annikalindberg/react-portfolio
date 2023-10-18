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
            I'm a results-driven Frontend Developer with a competitive mindset and a team-focused attitude. I blend a deep-rooted passion for coding with a diverse background in community building and the non-profit sector. My prior experiences have equipped me with the skills to deliver high performance while utilizing minimal resources. I excel in crafting accessible communication strategies that adapt to a variety of target audiences.
          </OnLightText>
          <OnLightText >
            n me, you'll discover a dedicated team player endowed with a strong sense of responsibility and an insatiable appetite for learning. I am in search of a role where I can not only elevate my development skills but also contribute meaningfully to a team that is driving impactful change.
          </OnLightText> 
          </PinkGradientWrapper>
                    <ContactLinks />

      </InnerWrapper>
    </PresentationWrapper>
    );

};

export default HeroSection;