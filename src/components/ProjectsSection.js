import React, { useState } from 'react';
import projects from './ProjectsArray';
import styled from 'styled-components';
import { LiveDemoButton, ViewCodeButton } from '../reusables/Buttons';
import { ProjectImage } from 'reusables/imagesStyles';
import { SectionTitle, ProjectTitle, ParagraphText } from 'reusables/FontStyles';

const ProjectContent = () => {
    const [selectedStack, setSelectedStack] = useState('all');

    const handleChange = (event) => {
        setSelectedStack(event.target.value);
    };

    const filteredProjects = projects.filter((project) =>
        selectedStack === 'all' || project.stack.includes(selectedStack)
    );


    const ProjectWrapper = styled.li`

    @media screen and (min-width: 668px) {
    
  display: flex;
    }
    @media screen and (min-width: 1024px) {
        margin-right: 15%;
        margin-left: 15%;
    }
  
`;

    const ImageWrapper = styled.div`
     margin: 2rem 1rem 1rem 1rem;
    @media screen and (min-width: 668px) {
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 1rem 1rem;
    max-width: 30%;
    }`


    const ProjectTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align:left;


`;

    const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 1rem 1rem;
   
    `


    const TechTag = styled.li`
  background-color: black;
  color: white;
  padding: 5px;
  margin: 2px;
  border-radius: 3px; // optional, for rounded corners
  display: inline-block; // for horizontal layout

  
`;
    const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media screen and (min-width: 668px) {
    flex-direction: row;
        
    }
    `

    return (
        <div>
            <SectionTitle>Featured Projects</SectionTitle>
            <select value={selectedStack} onChange={handleChange}>
                <option value="all">All projects</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="React">React</option>
                <option value="JSX">JSX</option>
                <option value="Redux">Redux</option>
                <option value="Pair-programming">Pair-programming</option>
            </select>
            <ul>
                {filteredProjects.map((project, index) => (
                    <ProjectWrapper key={index}>

                        <ImageWrapper>
                            <ProjectImage src={project.image} alt={project.title} />
                        </ImageWrapper>
                        < InnerWrapper>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectTextWrapper>
                                <ParagraphText>{project.description}</ParagraphText>
                            </ProjectTextWrapper>
                            <ul>
                                {project.stack.map((lang, i) => (
                                    <TechTag key={i}>{lang}</TechTag>
                                ))}
                            </ul>
                            <ButtonWrapper>
                                <ViewCodeButton onClick={() => window.open(project.githubLink)}>View the code</ViewCodeButton>
                                <LiveDemoButton onClick={() => window.open(project.liveDemoLink)}>Live demo</LiveDemoButton>
                            </ButtonWrapper>
                        </InnerWrapper>
                    </ProjectWrapper>

                ))}
            </ul>
        </div>
    );
}

export default ProjectContent;
