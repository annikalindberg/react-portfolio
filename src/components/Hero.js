// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitleStyling, NameStyling, ParagraphText, PlusTextStyling } from '../reusables/FontStyles';
import { ProfileImage, Icons, BackgroundImage } from '../reusables/imagesStyles';
import annikaprofile from '../assets/profil-square.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import rainbow from '../assets/rainbow.jpg';
import Hero from './Hero';
import ContactLinks from '../reusables/ContactLinks';

// //////////// SECTION SPECIFIC STYLING ///////////// //

const Section1 = styled.section`
  background: #EEEEEE;
  height: 100%;
  color: #FFFFFF;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 24px;

  @media screen and (min-width: 668px) {
  display: flex;
  padding: 0 0 25px 0;
  }

  @media screen and (min-width: 1024px) {
  display: flex;
  width: 100%;
  padding: 0;
  }
  `;

const SectionTabletPicture = styled.section`
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
  height: 100vh;
  }
  `;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-evenly;
  margin: 25px 0 30px 0;

  @media screen and (min-width: 668px) {
  justify-content: flex-start;
  padding-left: 10%;
  gap: 40px;
  }
  `;

export const ProfileImageStructure = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 30px 0;

  @media screen and (min-width: 668px) {
  margin: 20px 0 30px 0;
  }
  `;

export const InfoStructure = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 668px) {
  margin: 50px 0 0 10px;
  }
  `;

const ParagraphTextStructure = styled.div`
  @media screen and (min-width: 668px) {
  padding: 0 10% 5% 10%;
  }
  `;

export const ProfileAndInfoStructure = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 668px) {
  flex-direction: row;
  justify-content: center
  }
  `;

export const BigScreenStructure = styled.div`
  @media screen and (min-width: 1024px) {
  display: flex;
  flex-direction: row-reverse;
  }
  `;

const ProfileInfoParagraphTextStructure = styled.div`
  @media screen and (min-width: 668px) {
  flex-direction: column;
  margin-top: 40px;
  }

  @media screen and (min-width: 1024px) {
  margin-top: 10vh;
  }

  @media screen and (min-width: 1250px) {
  margin-top: 22vh;
  }

  @media screen and (min-width: 2250px) {
  margin-top: 32vh;
  }
  `;

const HeroSection = () => {
    return (
        <Section1>
            <BigScreenStructure>
                <SectionTabletPicture>
                    <BackgroundImage src={rainbow} alt="background rainbow" />
                </SectionTabletPicture>
                <ProfileInfoParagraphTextStructure>
                    <ProfileAndInfoStructure>
                        <ProfileImageStructure>
                            <ProfileImage src={annikaprofile} alt="Profile" />
                        </ProfileImageStructure>
                        <InfoStructure>
                            <NameStyling>Annika Lindberg</NameStyling>
                            <JobTitleStyling>Frontend Developer</JobTitleStyling>
                            <PlusTextStyling>with fullstack dreams</PlusTextStyling>
                        </InfoStructure>
                    </ProfileAndInfoStructure>
                    <ParagraphTextStructure>
                        <ParagraphText>
                            As a frontend developer, I bring a broad and user-oriented perspective, as well as a burning passion for code. Before switching careers to tech, I worked within social movement building and non-profit organizations, which helped me
                            develop excellent coordination, teamwork, and communication skills.
                            Now, I'm looking to join a team where I can continue to leverage my skills and grow my expertise in coding, working my way towards contributing to the creation of magical user experiences.
                        </ParagraphText>
                    </ParagraphTextStructure>
                    <ContactLinks />
                </ProfileInfoParagraphTextStructure>
            </BigScreenStructure>
        </Section1>
    );
};
export default HeroSection;