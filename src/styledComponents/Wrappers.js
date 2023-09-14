import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  //tablet and larger
  @media screen and (min-width: 768px) {
    width: 100%; // 50% width on tablet screens
    margin: 0 24px;
  }
`
export const HeadlineWrapper = styled.div`
  display: flex;
max-width: 95%;/* 20.5rem; */ 
flex-direction: column;
align-items: flex-start;
gap: 1.8125rem; // this is the space between the elements in the flexbox
margin-left: 24px 0;


    //tablet and larger
    @media screen and (min-width: 768px) {
       display: inline-flex;
align-items: center;
gap: 1.8125rem;
        
    }
`
export const ProfileImageWrapper = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
margin: 24px; 
`;
export const TextWrapper = styled.div`
max-width: 95%;

// tablet and larger
@media screen and (min-width: 768px) {
  max-width: 30rem;
}
`;
