// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { ParagraphText, SectionTitle, BlueBackgroundText, LightBlueBackgroundText, PinkBackgroundText } from '../reusables/FontStyles';

// //////////// SECTION SPECIFIC STYLING ///////////// //

const Section = styled.section`
  background: #F8E5E5;
  height: 100%;
  color: yellow;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0px 24px 90px 24px;

  @media screen and (min-width: 668px) {
    padding: 0 10% 90px 10%;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 25% 90px 25%;
  }
  `;

// /////////////// COMPONENT //////////////////////// //

const TechStack = () => {
    return (
        <Section>
            <SectionTitle>Tech Stack</SectionTitle>
            <div>
                <ParagraphText>
                    React.js, JavaScript,
                    <BlueBackgroundText> Node.js,
                    </BlueBackgroundText>
                    Redux,
                    <PinkBackgroundText>
                    </PinkBackgroundText> Git, GitHub, Visual Studio Code,

                    <PinkBackgroundText>Express.js, MongoDB, </PinkBackgroundText>Styled-components, React Router,<LightBlueBackgroundText> Mongoose </LightBlueBackgroundText>
                    RESTful APIs, CSS3, <BlueBackgroundText>HTML5, ES6, </BlueBackgroundText>SASS, NPM/Yarn, Webpack,
                    <PinkBackgroundText> Agile Methodologies, </PinkBackgroundText>
                    MongoDB, <LightBlueBackgroundText>Postman, Jest, CI/CD,   </LightBlueBackgroundText> Web Accessibly, Responsive Design, <BlueBackgroundText>Pair-Programming,</BlueBackgroundText> Code Reviews
                    , Team Collaboration,
                </ParagraphText>
            </div>
        </Section>
    );
};
export default TechStack;