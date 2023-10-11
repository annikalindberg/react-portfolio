// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { JobTitle, Name, SectionTitle, } from '../reusables/FontStyles';
import { ProfileImage } from '../reusables/imagesStyles';
import annikaprofile from '../assets/profil-square.jpg';
/* import SVGAnimation from './BakcgroundAnimation';
 */
import { ProfileImageWrapper, PinkGradientWrapper, ProfileAndInfoWrapper, InfoWrapper } from '../reusables/Wrappers';
import ContactLinks from '../reusables/ContactLinks';
import { FaArrowUp, FaEnvelope, FaPhone } from 'react-icons/fa';  // Import icons

export const FooterWrapper = styled.section`
  background: #F8E5E5;
  
  height: 100%;
  box-shadow: 0dvw 0.2dvh 0.5rem rgba(0, 0, 0, 0.5);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
   padding: 10px 20px 10px 20px; 
   
 
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

const EmailLink = styled.a`
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.primaryDark};
    text-decoration: none;
    font-size: 1.2rem;

    svg {
        margin-right: 10px;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const TopButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: #007bff;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 1000;

    &:hover {
        transform: scale(1.1);
    }

    &:focus {
        outline: none;
    }
`;
const PhoneLink = styled.a`
    display: flex;
    align-items: center;
      color: ${props => props.theme.colors.primaryDark};
    text-decoration: underline;
    margin-bottom: 2rem;
font-size: 1.2rem;
text-decoration: none;

    svg {
        margin-right: 10px;
    }
    :hover {
    
        color: #fff;
        border-radius: 8px;
text-decoration: underline;
    }

`;
const ContactWrapper = styled.div`
 width: 100%;
    display: flex;
    flex-direction: column;
   max-width: 700px;
   margin: 0 auto;

    @media screen and (min-width: 668px) {
margin: 0 auto;

    }
`;

const NewFooter = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    };

    return (
        <FooterWrapper>
            <SectionTitle> Time to talk! </SectionTitle>
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
            {/*  <PinkGradientWrapper> */}
                <ContactWrapper >
                    <PhoneLink href="tel:+46707533568">
                        <FaPhone /> {/* Phone Icon */}
                        +46(0) 707 53 35 68
                    </PhoneLink>
                    <EmailLink href="mailto:annika.edit.lindberg@gmail.com">
                        <FaEnvelope />  {/* Email Icon */}
                        annika.edit.lindberg@gmail.com
                    </EmailLink>

                </ContactWrapper>
            {/*   </PinkGradientWrapper> */}
            <ContactLinks />
            <TopButton onClick={scrollToTop} id="top-button" title="Scroll to top">
                <FaArrowUp />
            </TopButton>
        </FooterWrapper>
    );
};
export default NewFooter;