import styled from 'styled-components';
import { ProfileImageWrapper, InfoWrapper, ProfileAndInfoWrapper, PresentationWrapper, SectionWrapper } from 'reusables/Wrappers';
import { JobTitle, Name, OnLightText, PlusTextStyling, SectionTitle } from '../reusables/FontStyles';
import { ProfileImage } from '../reusables/imagesStyles';
import annikaprofile from '../assets/profil-square.jpg';
import ContactLinks from '../reusables/ContactLinks';
import { FaArrowUp, FaEnvelope, FaPhone } from 'react-icons/fa';  // Import icons


const FooterStyled = styled.footer`
  display: flex;
    flex-direction: column;
    align-items: center;

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    align-items: center;
    margin: 62px 0;
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: 24px;
  }
`;

const EmailLink = styled.a`
    display: flex;
    align-items: center;
    color: #007bff;
    text-decoration: none;

    svg {
        margin-right: 8px;
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
      color: #007bff;
    text-decoration: underline;

    svg {
        margin-right: 8px;
    }
    :hover {
        background-color: #007bff;
        color: #fff;
        border-radius: 8px;

    }

`;

const FooterNameAndTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    `;


const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <>
            <SectionWrapper>
                <FooterStyled>
                    <SectionTitle>Time to talk</SectionTitle>
                    <FooterNameAndTitle >
                        <OnLightText>Let's get in touch!</OnLightText>

                        <ProfileImage
                            style={{ width: '7rem' }}
                            src={annikaprofile} alt="Profile of Annika" />

                        <Name>Annika Lindberg</Name>
                        <JobTitle>Frontend Developer</JobTitle>

                    </FooterNameAndTitle>
                    <PhoneLink href="tel:+46707533568">
                        <FaPhone /> {/* Phone Icon */}
                        +46(0) 707 53 35 68
                    </PhoneLink>
                    <EmailLink href="mailto:annika.edit.lindberg@gmail.com">
                        <FaEnvelope />  {/* Email Icon */}
                        annika.edit.lindberg@gmail.com
                    </EmailLink>


                    <ContactLinks />

                </FooterStyled >

                <TopButton onClick={scrollToTop} id="top-button" title="Scroll to top">
                    <FaArrowUp />
                </TopButton>
            </SectionWrapper >
        </>
    );


};


export default Footer;
