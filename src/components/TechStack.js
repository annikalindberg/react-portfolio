// /////////////// IMPORTS //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { OnLightText, SectionTitle, BlueBackgroundText, LightBlueBackgroundText, PinkBackgroundText } from '../reusables/FontStyles';
import { InnerWrapper, SectionWrapper } from '../reusables/Wrappers';


const TechStack = () => {
    return (
      <SectionWrapper>
        <InnerWrapper>
            <SectionTitle>Tech Stack</SectionTitle>
            <div>
          <OnLightText>
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
            </OnLightText>
          </div>
        </InnerWrapper>
      </SectionWrapper>
    );
};
export default TechStack;