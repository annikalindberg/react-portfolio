// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitle, Name, OnLightText, PlusTextStyling } from '../reusables/FontStyles';
import { ProfileImage } from '../reusables/imagesStyles';
import annikaprofile from '../assets/profil-square.jpg';
import ContactLinks from '../reusables/ContactLinks';
import SVGAnimation from './BakcgroundAnimation';
import { ProfileImageWrapper, PinkGradientWrapper, ProfileAndInfoWrapper, PresentationWrapper, InfoWrapper } from '../reusables/Wrappers';


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
        <PresentationWrapper>

        {/* <ProfileInfoParagraphTextStructure> */}
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
          <OnLightText >
                            As a frontend developer, I bring a broad and user-oriented perspective, as well as a burning passion for code. Before switching careers to tech, I worked within social movement building and non-profit organizations, which helped me
                            develop excellent coordination, teamwork, and communication skills.
                            Now, I'm looking to join a team where I can continue to leverage my skills and grow my expertise in coding, working my way towards contributing to the creation of magical user experiences.
          </OnLightText>
          </PinkGradientWrapper>
                    <ContactLinks />
        {/* </ProfileInfoParagraphTextStructure> */}
        {/*         </BigScreenWrapper>
 */}        </PresentationWrapper>
    );
};
export default HeroSection;