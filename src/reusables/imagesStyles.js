// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components';

// PROFILEIMAGE
export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 164px; 
    height: 164px;
    object-fit: cover;
    border: solid black 1px;
    `;

// PROJECTIMAGES
export const ProjectImage = styled.img`
    width: 100%; 
    height: auto;
    object-fit: cover;
    margin: auto;

    @media screen and (min-width: 668px) {
    width: 190px; 
    object-fit: cover;  
    }
    `;

// ICONS FOR SOCIAL MEDIA
export const Icons = styled.img`
    width: 32px;
    height: 32px;
    filter: invert(97%) sepia(1%) saturate(2529%) hue-rotate(235deg) brightness(70%) contrast(63%);

    &:hover {
    filter: invert(0%) sepia(8%) saturate(7500%) hue-rotate(355deg) brightness(103%) contrast(110%);
    }
    `;

// BACKGROUNDIMAGE TABLET/BIGSCREENS
export const BackgroundImage = styled.img`
    width: 100%; 
    height: 412px; 
    object-fit: cover;

    @media screen and (min-width: 1024px) {
    width: 50vw; 
    height: 100vh;
    object-fit: cover;  
    }
    `;