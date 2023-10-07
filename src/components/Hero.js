// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../reusables/FontStyles';
import { ProfileImage } from '../reusables/imagesStyles';
import annikaprofile from '../assets/profil-square.jpg';
import ContactLinks from '../reusables/ContactLinks';
import SVGAnimation from './BakcgroundAnimation';
import { BackgroundImage } from '../reusables/imagesStyles';

import { PinkGradientWrapper } from '../reusables/Wrappers';

// //////////// SECTION SPECIFIC STYLING ///////////// //

const PresentationWrapper = styled.section`
  background:radial-gradient(
      farthest-corner circle at 50% 50%, 
      #ffc2ff00 1% 1%, #ff58e880 100%
    )
  ;
  
  height: 100%;
border: 1px solid red;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
   padding: 24px;
 
  @media screen and (min-width: 668px) {
  display: flex;
  padding: 0 0 25px 0; 
  }

  @media screen and (min-width: 1024px) {
  display: flex;
/*   width: 100%;
 */  padding: 100px;
  }
  `;

const TabletPicture = styled.section`
  background: #EEEEEE;
  height: 100%;
  color: #FFD93D;
  text-align: left;
  flex-direction: column;
  justify-content: left;
  display: none;

  @media screen and (min-width: 668px) {
  display: block;
  }

  @media screen and (min-width: 1024px) {
  justify-content: flex-end;
  height: 60vh;
  }
  `;


const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
margin-top: 1rem;
margin-bottom: 1rem;

  @media screen and (min-width: 668px) {
  margin: 20px 0 30px 0;
  }
  `

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 

  @media screen and (min-width: 668px) {
  
  }
  `;

export const ProfileAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  

  @media screen and (min-width: 668px) {
  flex-direction: row;
  justify-content: center
  }
  `;

/* export const BigScreenWrapper = styled.div`
  @media screen and (min-width: 1024px) {
  display: flex;
  flex-direction: row-reverse;
  border: 1px solid blue;
  }
  `; */

const ProfileInfoParagraphTextStructure = styled.div`
  @media screen and (min-width: 668px) {
  flex-direction: column;

  border: 1px solid green;
  }

  @media screen and (min-width: 1024px) {
  margin-top: 1vh;
  }

  `;


const HeroSection = () => {
    return (
        <PresentationWrapper>
        {/*         <BigScreenWrapper>
 */}          {/*           <TabletPicture>
            <BackgroundImage bgImage='https://images.unsplash.com/photo-1615646549461-b9b9c118f300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' />
          </TabletPicture> */}
                <ProfileInfoParagraphTextStructure>
          <ProfileAndInfoWrapper>
            <ProfileImageWrapper>
              <ProfileImage
                src={annikaprofile} alt="Profile" />
            </ProfileImageWrapper>

            <InfoWrapper>
                            <NameStyling>Annika Lindberg</NameStyling>
                            <JobTitleStyling>Frontend Developer</JobTitleStyling>
              <PlusTextStyling>With fullstack dreams</PlusTextStyling>
            </InfoWrapper>
          </ProfileAndInfoWrapper>
          <PinkGradientWrapper>
                        <ParagraphText>
                            As a frontend developer, I bring a broad and user-oriented perspective, as well as a burning passion for code. Before switching careers to tech, I worked within social movement building and non-profit organizations, which helped me
                            develop excellent coordination, teamwork, and communication skills.
                            Now, I'm looking to join a team where I can continue to leverage my skills and grow my expertise in coding, working my way towards contributing to the creation of magical user experiences.
                        </ParagraphText>
          </PinkGradientWrapper>
                    <ContactLinks />
                </ProfileInfoParagraphTextStructure>
        {/*         </BigScreenWrapper>
 */}        </PresentationWrapper>
    );
};
export default HeroSection;