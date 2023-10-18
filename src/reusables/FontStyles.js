import styled, { css } from 'styled-components';

// Base Text Style
const BaseTextStyle = css`
  line-height: 28.71px;
  font-weight: 400;
  font-family: 'Satoshi', sans-serif;
`;

// Base Title Style
const BaseTitleStyle = css`
  font-weight: 900;
  line-height: 43.2px;
  font-family: 'Open Sans', sans-serif;
`;

export const Name = styled.h1`
  ${() => css`
    color: ${props => props.theme.colors.vibrantPink};
    font-weight: 700;
    font-size: 1.6rem;
    margin-top: 1.7rem;
    line-height: 37.8px;
   

    @media screen and (min-width: 668px) {
      margin-top: 3rem;
      font-size: 1.9rem;
    }
  `}
`;

export const JobTitle = styled.h3`
  ${() => css`
    color: #373833;
    ${BaseTitleStyle};
    font-size: 1.8rem;
    margin-top: 0.7rem;

    @media screen and (min-width: 668px) {
      margin-top: 0.6rem;
    }
  `}
`;

export const PlusTextStyling = styled.h4`
  ${() => css`
    color: ${props => props.theme.colors.primaryDark};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 32.4px;
    font-family: 'Open Sans', sans-serif;
  `}
`;

export const SectionTitle = styled.p`
  ${() => css`
    color: ${props => props.theme.colors.vibrantPink};
    font-weight: 700;
    font-size: 64px;
    margin: 5px 0 35px 30px;
    padding-top: 15px;
    line-height: 108px;

    :hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
      cursor: pointer;
    }

    @media screen and (min-width: 668px) {
      display: flex;
      justify-content: center;
      margin: 5px 0 10px 0;
      font-size: 80px;
    }
  `}
`;

const TextWithBackgroundColor = backgroundColor => styled.p`
  ${() => css`
    ${BaseTextStyle};
    color: ${props => props.theme.colors.primaryDark};
    background-color: ${backgroundColor};
    font-size: 22px;
    display: inline;
  `}
`;

export const BlueBackgroundText = TextWithBackgroundColor(props => props.theme.colors.lightBlue);
export const PinkBackgroundText = TextWithBackgroundColor('#cf81f06e');
export const LightBlueBackgroundText = TextWithBackgroundColor('#4ffafac2');
export const BlackBackgroundText = TextWithBackgroundColor('#000000');
export const GreenBackgroundText = TextWithBackgroundColor('#6DB486');

export const ProjectTitle = styled.h2`
  ${() => css`
    color: #373833;
    ${BaseTitleStyle};
    font-size: 30px;
    margin: 20px 0 15px 0;

    @media screen and (min-width: 668px) {
      margin-top: 5px;
      font-size: 32px;
    }
  `}
`;

export const OnDarkText = styled.p`
  ${() => css`
    ${BaseTextStyle};
    color: white;
    font-size: 20px;
  `}
`;

export const OnLightText = styled.p`
  ${() => css`
    ${BaseTextStyle};
    color: ${props => props.theme.colors.primaryDark};
    font-size: 20px;

  `}
`;
