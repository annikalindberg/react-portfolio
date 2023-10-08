
import styled from 'styled-components';


export const PrimaryButton = styled.button`
    display: flex;
   
    align-items: center;
    padding: 17px;
    background: ${({ theme, variant }) => variant === 'alternative' ? theme.colors.lightGreenPastel : theme.colors.lightBlue};
    border-radius: 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    border: none;
    font-family: Futura;
    text-decoration: none;
    max-width: 200px;
    margin: 15px 30px 0;
    
    border-top: 1px solid black;

    &:hover {
    background: ${({ theme }) => theme.colors.lightBluePastel};
    color: black;
    border-bottom: 1px solid black;
    }
    @media screen and (min-width: 668px) {
        margin: 1.25rem 1.25rem 1.875rem 0;
        
    }
    `;



export const YellowButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 12px 12px 12px;
    background: #F5F5F5;
    border-radius: 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;
    border: none;
    font-family: Futura;
    text-decoration: none;
    margin: 20px 0 30px 0;

    &:hover {
    background: #FFD338;
    color: #000000;
    }
    `;
