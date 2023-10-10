// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components';

// ////////////// TEXT STYLING /////////////// //

// NAME STYLING
export const Name = styled.h1`
    color: ${props => props.theme.colors.vibrantPink};
   
    font-weight: 700;
    font-size: 1.6rem; 
    line-height: 37.8px;
   margin-top: 1.7rem;
    @media screen and (min-width: 668px) {
    margin-top: 3rem;
    font-size: 1%.9;
    }
    `;

// JOBTITLE STYLING
export const JobTitle = styled.h3`
    color: #373833;
    font-weight: 900;
    font-size: 1.8rem;
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
export const SectionTitle = styled.p`
    color: ${props => props.theme.colors.vibrantPink};
    font-weight: 700;
    font-size: 64px;
    line-height: 108px;
    margin: 30px 0 35px 30px;
    text-decoration: none;

    :hover {
         transform: scale(1.1);
        transition: transform 0.5s ease-in-out;
        cursor: pointer;
        
    }

    @media screen and (min-width: 668px) {
        display: flex;
        justify-content: center;
        margin: 5, 0, 10, 0;
        font-size: 80px;
        
    }
    `;


export const OnDarkText = styled.p`
    color: white;
    font-weight: 400;
font-size: 20px; 
    line-height: 28.71px;
    `;

export const OnLightText = styled.p`
color: ${props => props.theme.colors.primaryDark};
font-weight: 400;
font-size: 20px;
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
    font-size: 30px;
    line-height: 43.2px;
    margin: 20px 0 15px 0;

    @media screen and (min-width: 668px) {
    margin-top: 5px;
    font-size: 32px;
    }
    `;