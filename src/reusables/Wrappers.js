import styled from 'styled-components';

export const SectionWrapper = styled.section`
  background: #F8E5E5;
  height: 100%;
  
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 24px 90px 24px;
    box-shadow: 0dvw 0.2dvh 0.5rem rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 668px) {
    padding: 0 10% 90px 10%;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 25% 90px 25%;
  }
  `;

export const PinkGradientWrapper = styled.div`
background-color: ${props => props.theme.colors.sectionsBackground};
border-radius: 16px;
box-shadow: -4px -4px 62px 27px rgba(226, 12, 238, 0.4);

padding: 1rem;
border: 1px solid rgba(249, 194, 249, 0.39);


 @media screen and (min-width: 668px) {
  padding: 4rem 5rem;
  box-shadow: inset -4px -4px 62px 27px rgba(226, 12, 238, 0.2);
  margin: 1rem;

  }
  `;
export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
margin-top: 1rem;
margin-bottom: 1rem;

  @media screen and (min-width: 668px) {
  margin: 20px 0 30px 0;
  }
  `
export const PresentationWrapper = styled.section`
  background: #d1ecef80;
  
  height: 100%;
  box-shadow: 0dvw 0.2dvh 0.5rem rgba(0, 0, 0, 0.5);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
   padding: 10px 20px 10px 20px; 
   
 
  @media screen and (min-width: 668px) {
  display: flex;
  padding: 0 0 25px 0; 
  }

  @media screen and (min-width: 1024px) {
  display: flex;
/*   width: 100%;
 */  padding: 100px;
  }
  `;


export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
 

  @media screen and (min-width: 668px) {
  
  }
  `;

export const ProfileAndInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  

  @media screen and (min-width: 668px) {
  flex-direction: row;
  justify-content: center
  }
  `;
