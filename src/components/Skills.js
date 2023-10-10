import React from 'react';
import styled from 'styled-components';
import { OnLightText, SectionTitle, BlueBackgroundText, PinkBackgroundText, LightBlueBackgroundText } from '../reusables/FontStyles';

export const Section = styled.section`
  background: #FDF2E4;
  height: 100%;
  color: #333;  // Changed to improve contrast
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin: 18px 0 30px 0;
`;

export const SkillFrameStructure = styled.div`
  @media screen and (min-width: 668px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr; 
    gap: 90px;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0fr; 
    gap: 90px;
    margin-bottom: 50px;
  }
`;

export const SkillFrame = styled.div.attrs({
    'aria-label': 'Skill Frame'
})`
  text-align: center;

  @media screen and (min-width: 668px) {
    text-align: left;
  }
`;

const BackgroundText = styled.div.attrs(props => ({
    role: 'heading',
    'aria-label': `Category: ${props.category}`
}))`
  // Common styles for background text
`;



export const Skills = () => {
    return (
        <Section aria-labelledby="skills-section">
            <SectionTitle id="skills-section">Skills</SectionTitle>
            <SkillFrameStructure>
                <SkillFrame aria-label="Code Skills">
                    <LightBlueBackgroundText category="Code Skills">Code
                    </LightBlueBackgroundText>
                    <OnLightText>
                        <List>
                            <li>React</li>
                            <li>HTML5</li>
                            <li>Javascript ES6</li>
                            <li>Redux</li>
                            <li>CSS3</li>
                            <li>SASS/LESS</li>
                            <li>RESTful APIs</li>
                            <li>JSX</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>


                        </List>
                    </OnLightText>
                </SkillFrame>
                <SkillFrame>
                    <BlueBackgroundText>Toolbox</BlueBackgroundText>
                    <OnLightText>
                        <List>
                            <li>Adobe Photoshop</li>
                            <li>Responsive Design</li>
                            <li>Web Accessibly</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Visual Studio Code</li>
                            <li>Figma</li>
                            <li>Code Reviews</li>
                            <li>Postman</li>
                        </List>
                    </OnLightText>
                </SkillFrame>
                <SkillFrame>
                    <PinkBackgroundText>More</PinkBackgroundText>
                    <OnLightText>
                        <List>
                            <li>Agile Methdology</li>
                            <li>Pair-Programming</li>
                            <li>Team Collaboration</li>
                            <li>CI/CD</li>
                        </List>
                    </OnLightText>
                </SkillFrame>
                <SkillFrame>
                    <LightBlueBackgroundText>Upcomming</LightBlueBackgroundText>
                    <OnLightText>
                        <List>
                            <li>TypeScript</li>
                            <li>React Native</li>
                        </List>
                    </OnLightText>
                </SkillFrame>
            </SkillFrameStructure>

        </Section>
    );
};
export default Skills;
