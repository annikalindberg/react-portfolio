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
            I'm a results-driven Frontend Developer with a competitive mindset and a team-focused attitude. I currently built most my web applications in the MERN stack, in which Im fairly comfortable, but Im also seeking to evolve my DevOps skills containerizing with Docker and Kubernetes. </OnLightText>
          <OnLightText style={{ paddingBottom: '20px' }} > Before transitioning to a career in frontend development, I spent over a decade working in the non-profit sector. The invaluable skills I acquired during that time include delivering high performance with limited resources, mastering effective communication techniques, and adapting my messaging to be accessible to diverse target audiences.
          </OnLightText>
          <OnLightText >
            In me, you'll find a dedicated and adaptive team player with a strong sense of responsibility, a deep-rooted passion for coding and a never ending appetite for learning. Im looking for a role that will nurture and evolve my skills and where I contribute with a positive attitude and a growth mindset.
          </OnLightText> 
          </PinkGradientWrapper>
                    <ContactLinks />

      </InnerWrapper>
    </PresentationWrapper>
    );

};

export default HeroSection;