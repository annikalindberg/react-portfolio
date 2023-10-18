// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { OnLightText, SectionTitle, ProjectTitle } from 'reusables/FontStyles';
import { ArticleButton } from 'reusables/Buttons';
import articleImage from '../assets/mediumarticle.jpg';
import { ArticleImage } from 'reusables/imagesStyles';
import { InnerWrapper } from 'reusables/Wrappers';
// //////////// SECTION SPECIFIC STYLING ///////////// //

export const Section = styled.section`
  background: #FCEDEA;
  height: 100%;
 
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 0 24px 24px 24px;
  

  @media screen and (min-width: 668px) {
    padding: 0 20px 24px 20px;
   

  }

  @media screen and (min-width: 1024px) {
    padding: 0 25% 24px 25%;
  }
  `;

const DateParagraph = styled.p`
color: #513b3b; 
font-size: 1.25;
font-weight: 400;
`;
const StyledLink = styled.a`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 1rem 0 0 0;
`;



const MyWords = () => {
    return (

        <Section id='my-words'>
            <InnerWrapper>
                <SectionTitle>My Words</SectionTitle>

                <ArticleImage src={articleImage} alt="Article image" />
                <DateParagraph>September 2023</DateParagraph>
                <ProjectTitle>
                    The Code Whisperer: My Grandmother’s Lasting Impact
                </ProjectTitle>
                <OnLightText>
                    From a young age, I possessed an uncanny ability to memorize song lyrics and lengthy passages of text. In a somewhat extraordinary twist of fate, I had memorized the entire monologue from Hamlet by the age of three. While there might be a scientific term to describe this aptitude, I couldn’t find much use for it within the confines of the Swedish educational system. That system struggled to make learning accessible to everyone, including me. As a neurodivergent individual who had difficulty sitting still, meeting the system’s expectations felt like an uphill battle.
                </OnLightText>

                <StyledLink href="https://medium.com/@annika.edit.lindberg/the-code-whisperer-my-grandmothers-lasting-impact-e4d9e8ea5a6" target="_blank" title="Link to Annikas article on Medium" rel="noreferrer">
                    <ArticleButton type="button">
                        <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 22.0609C0 24.655 1.29446 26 3.7901 26H16.2099C18.7056 26 20 24.655 20 22.0609V3.93902C20 1.35704 18.7056 0 16.2099 0H3.7901C1.29446 0 0 1.35704 0 3.93902V22.0609ZM2.28572 21.9168V4.08314C2.28572 2.96628 2.84549 2.35381 3.97669 2.35381H16.0117C17.1428 2.35381 17.7144 2.96628 17.7144 4.08314V21.9168C17.7144 23.0337 17.1428 23.6462 16.0117 23.6462H3.97669C2.84549 23.6462 2.28572 23.0337 2.28572 21.9168ZM5.73762 7.2896H14.274C14.6939 7.2896 15.0204 6.95334 15.0204 6.52101C15.0204 6.10069 14.6939 5.77643 14.274 5.77643H5.73762C5.30613 5.77643 4.9796 6.10069 4.9796 6.52101C4.9796 6.95334 5.30613 7.2896 5.73762 7.2896ZM5.73762 11.3968H14.274C14.6939 11.3968 15.0204 11.0605 15.0204 10.6282C15.0204 10.2078 14.6939 9.88358 14.274 9.88358H5.73762C5.30613 9.88358 4.9796 10.2078 4.9796 10.6282C4.9796 11.0605 5.30613 11.3968 5.73762 11.3968ZM5.73762 15.5039H9.86586C10.2857 15.5039 10.6006 15.1797 10.6006 14.7593C10.6006 14.327 10.2857 13.9787 9.86586 13.9787H5.73762C5.30613 13.9787 4.9796 14.327 4.9796 14.7593C4.9796 15.1797 5.30613 15.5039 5.73762 15.5039Z" fill="#333333" />
                        </svg>
                        Read article
                    </ArticleButton>
                </StyledLink>
            </InnerWrapper>

        </Section>

    );
};
export default MyWords;