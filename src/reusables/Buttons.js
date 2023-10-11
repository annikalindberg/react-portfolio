
import styled from 'styled-components';


export const PrimaryButton = styled.button`
   
   
    align-items: center;
   flex-grow: 1;
  
    padding: 10px;
    background: ${({ theme, variant }) => variant === 'alternative' ? theme.colors.lightGreenPastel : theme.colors.lightBlue};
    border-radius: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    border: none;
    font-family: Futura;
    text-decoration: none;

    margin: 8px 30px 15px 30px; 
    max-width: 12rem;
    border-top: 1px solid black;
    max-height: 50px;


    &:hover {
    background: ${({ theme }) => theme.colors.lightBluePastel};
    color: black;
    border-bottom: 2px solid black;

    }
    @media screen and (min-width: 668px) {
        margin: 1.25rem 3rem 1.875rem 0;
       
    }
    `;
export const ArticleButton = styled.button`
   
   
    align-items: center;
   flex-grow: 1;
  text-align: center; // optional, to center the text
    padding: 13px;
    background: ${({ theme }) => theme.colors.lightGreenPastel};
    border-radius: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    border: none;
    font-family: Futura;
    text-decoration: none;
   
    margin: 10px 30px 15px 30px; 
    max-width: 12rem;
    border-top: 1px solid black;
    
      svg {
        margin-right: 10px;
    }

    &:hover {
    background: ${({ theme }) => theme.colors.lightBluePastel};
    color: black;
    border-bottom: 2px solid black;

    }
    @media screen and (min-width: 668px) {
        margin: 1.25rem 3rem 1.875rem 0;
       
    }
    `;




