import styled from 'styled-components';

export const HeadlineWrapper = styled.div`
  display: flex;
width: 20.5rem; 
flex-direction: column;
align-items: flex-start;
gap: 1.8125rem; // this is the space between the elements in the flexbox
margin-left: 24px;


    //tablet and larger
    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
    }
`
export const ProfileImageWrapper = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
margin: 24px; 
`;

export const ContactIconsWrapper = styled.div`
display: flex;
width: 20.4375rem;
justify-content: space-between;
align-items: flex-end;
`

