// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components';

// ////////////// TEXT STYLING /////////////// //

// NAME STYLING
export const NameStyling = styled.h1`
    color: ${props => props.theme.colors.vibrantPink};
   
    font-weight: 700;
    font-size: 28px;
    line-height: 37.8px;
    margin: 0;
    `;

// JOBTITLE STYLING
export const JobTitleStyling = styled.h3`
    color: #373833;
    font-weight: 900;
    font-size: 28px;
    line-height: 43.2px;
    margin: 0;
    `;

// + TEXT STYLING
export const PlusTextStyling = styled.h4`
    color: grey;
    font-weight: 500;
    font-size: 24px;
    line-height: 32.4px;
    margin-bottom: 40px;
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
    color: #FFFFFF;
    background-color: #0B24F5;
    font-weight: 400;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    `;

// PINKBACKGROUND TEXT
export const PinkBackgroundText = styled.p`
    color: #FFFFFF;
    background-color: #cb133e;
    font-weight: 400;
    font-size: 22px;
    line-height: 28.71px;
    display: inline;
    `;

// DARKBLUEBACKGROUND TEXT
export const DarkBlueBackgroundText = styled.p`
    color: #FFFFFF;
    background-color: #06427d;
    font-weight: 400;
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