// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components';

// ////////////// TEXT STYLING /////////////// //

// NAME STYLING
export const NameStyling = styled.h1`
    color: ${props => props.theme.colors.vibrantPink};
   
    font-weight: 700;
    font-size: 1.9rem; 
    line-height: 37.8px;
   margin-top: 1.7rem;
    @media screen and (min-width: 668px) {
    margin-top: 3rem;
    font-size: 2rem;
    }
    `;

// JOBTITLE STYLING
export const JobTitleStyling = styled.h3`
    color: #373833;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 43.2px;
margin-top: 0.7rem;

    @media screen and (min-width: 668px) {
    margin-top: 0.6rem;
    font-size: 1.8rem;
    }
    `;


// + TEXT STYLING
export const PlusTextStyling = styled.h4`
color: ${ props => props.theme.colors.primaryDark };
    font-weight: 500;
font-size: 1.4rem;
    line-height: 32.4px;

    `;

// SECTION TITLES
export const SectionTitle = styled.h2`
    color: ${props => props.theme.colors.vibrantPink};
    font-weight: 700;
    font-size: 80px;
    line-height: 108px;
    margin: 35px 0 35px 30px;
    @media screen and (min-width: 668px) {
        display: flex;
        justify-content: center;
        margin: 10, 0, 10, 0;
        
    }
    `;

// SECTION TITLES2
export const SectionTitle2 = styled.h2`
    color: #e63946;
    font-weight: 900;
    font-size: 52px;
    line-height: 78px;
    margin: 35px auto 20px auto;
    `;

// PARAGRAPH STYLING
export const ParagraphText = styled.p`
    color: #373833;
    font-weight: 400;
font-size: 22px; 
    line-height: 28.71px;
    `;

// BLUEBACKGROUND TEXT
export const BlueBackgroundText = styled.p`
    color: ${props => props.theme.colors.primaryDark};
    background-color: ${props => props.theme.colors.lightBlue};
    font-weight: 400;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    `;

// PINKBACKGROUND TEXT
export const PinkBackgroundText = styled.p`
    color: ${props => props.theme.colors.primaryDark};
    background-color: #cf81f06e;
    font-weight: 400;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    `;


export const LightBlueBackgroundText = styled.p`
    color: #9c137ac7;
    background-color: #4ffafac2;
    font-weight: 500;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    `;

// BLACKBACKGROUND TEXT
export const BlackBackgroundText = styled.p`
    color: #FFFFFF;
    background-color: #000000;
    font-weight: 400;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    `;

// GREENBACKGROUND TEXT
export const GreenBackgroundText = styled.p`
    color: #FFFFFF;
    background-color: #6DB486;
    font-weight: 400;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    `;

// PROJECT TITLES
export const ProjectTitle = styled.h2`
    color: #373833;
    font-weight: 900;
    font-size: 32px;
    line-height: 43.2px;
    margin: 20px 0 15px 0;

    @media screen and (min-width: 668px) {
    margin-top: 5px;
    }
    `;