// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components';

// PROFILEIMAGE
export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 10rem; 
    object-fit: cover;
   
   

    @media screen and (min-width: 668px) {
        width: 11rem;
         margin-right: 3em;
         margin-top: 1rem;
    }
    @media screen and (min-width: 1024px) {
        width: 10rem;
        
    }
    `;

// PROJECTIMAGES
export const ProjectImage = styled.img`
    width: 100%; 
    object-fit: cover;
    margin: 1rem 0 1rem 0;
    border-radius: 10%;

box-shadow: -1px 4px 53px 10px rgba(50, 38, 38, 0.5);
    @media screen and (min-width: 668px) {
    width: 190px; 
    object-fit: cover;  
   
    @media screen and (min-width: 1024px) {
        
        
    }
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
export const BackgroundImage = styled.div`
    width: 100%; 
background-size: cover;
background-position: center;
    height: 100%;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url(${props => props.bgImage});
    

    @media screen and (min-width: 1024px) {
    width: 50vw; 
    height: 60vh;
    object-fit: cover;  
   
    }
    `;

export const ArticleImage = styled.img`
    width: 100%; 
    object-fit: cover;
    margin: 1rem 0 1rem 0;
    box-shadow: -1px 4px 53px 10px rgba(50, 38, 38, 0.5);
    @media screen and (min-width: 668px) {
    
   
    }
    `;