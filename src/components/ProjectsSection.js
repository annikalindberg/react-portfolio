import React, { useState } from 'react';
import projects from './ProjectsArray';
import styled from 'styled-components';
import { PrimaryButton } from '../reusables/Buttons';
import { ProjectImage } from 'reusables/imagesStyles';
import { SectionTitle, ProjectTitle, OnLightText } from 'reusables/FontStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import theme from 'theme';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


const ProjectContent = () => {
    const [selectedStack, setSelectedStack] = useState('all');
    const options = [
        { value: 'all', label: 'All projects' },
        { value: 'HTML', label: 'HTML' },
        { value: 'CSS', label: 'CSS' },
        { value: 'JavaScript', label: 'JavaScript' },
        { value: 'React', label: 'React' },
        { value: 'JSX', label: 'JSX' },
        { value: 'Redux', label: 'Redux' },
        { value: 'Pair-programming', label: 'Pair-programming' },
    ];

    const customStyles = {
        placeholder: (base) => ({
            ...base,
            color: "black",

        }),
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'black' : 'black',
            padding: 20,
            background: state.isFocused ? theme.colors.vibrantPinkPastel : theme.colors.lightPinkPastel,
            "&:hover": {
                // Overwrittes the different states of border
                borderColor: state.isFocused ? "" : "vibrantPink"
            }
        }),
        control: (base, state) => ({
            ...base,
            width: 300,
            background: theme.colors.lightPinkPastel,
            borderRadius: state.isFocused ? "3px 3px 0 0" : 3,

            boxShadow: state.isFocused ? null : null,
            "&:hover": {

                // Overwrittes the different states of border
                borderColor: state.isFocused ? "vibrantPink" : "vibrantPink"
            }
        }),
        menu: base => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,
            // kill the gap
            marginTop: 0
        }),
        menuList: base => ({
            ...base,


            // kill the white space on first and last option
            padding: 0

        })

    };




    const handleChange = (selectOption) => {
        setSelectedStack(selectOption.value);
    };

    const filteredProjects = projects.filter((project) =>
        selectedStack === 'all' || project.stack.includes(selectedStack)
    );


    const ProjectWrapper = styled.li`
background-color: ${({ theme }) => theme.colors.heroBackground};
 box-shadow: 0dvw 0.2dvh 0.5rem rgba(0, 0, 0, 0.5); 
box-sizing: border-box;
    @media screen and (min-width: 668px) {
  display: flex;

 
    }
    @media screen and (min-width: 1024px) {
        margin-right: 10%;
        margin-left: 10%;
        
    }
  
`;

    const ImageWrapper = styled.div`
     margin: 2rem 1rem 1rem 1rem;
    @media screen and (min-width: 668px) {
    display: flex;
    flex-direction: column;
    margin: 2rem 1rem 1rem 1rem;
    max-width: 30%;

    :hover {
        transform: scale(1.1);
        transition: transform 0.5s ease-in-out;
        cursor: pointer;

    
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
    
   
    `;


    const TechTag = styled.li`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: black;
  padding: 5px;
  font-size: 1rem;
  margin: 0.5rem 0rem 0rem 0.4rem;
  border-radius: 3px; 
  display: inline-block; // for horizontal layout 

 @media screen and (min-width: 668px) {
    margin: 0.5rem 0.3rem 0rem 0.5rem;
    font-size: 1.1rem;
 }
`;
    const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: 2rem 0.5rem 0.5rem 0.5rem;


    @media screen and (min-width: 668px) {
    flex-direction: row;
        
    }
    `
    // selectdropdownmenu style

    const DropdownWrapper = styled.div`
     margin: 2rem 3rem 2rem;
     border-radius: 8px;
     padding: 5px;
     display: flex;
     font-size: 1.3rem;
       justify-content: center;
        @media screen and (min-width: 668px) {
            margin-right: 10%;
             justify-content: flex-end;
             font-size: 1.2rem;
        }
   `;

    const StyledLink = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.primaryDark};

  }
`;

    return (
        <main
            style={{ backgroundColor: theme.colors.sectionsBackground }
            }
        >
            <SectionTitle>Featured Projects</SectionTitle>
            <DropdownWrapper>
                <Select
                    styles={customStyles}
                    options={options}
                    onChange={handleChange}
                    placeholder="Select a stack"
                />
            </DropdownWrapper>
            {/* <StyledFontAwesomeIcon icon={faArrowDown} /> */}

            <ul>
                {filteredProjects.map((project, index) => (
                    <ProjectWrapper key={index}>

                        <ImageWrapper>
                            <a href={project.LiveDemoLink}
                                target="_blank" rel="noopener noreferrer">

                            <ProjectImage src={project.image} alt={project.title} />
                            </a>
                        </ImageWrapper>
                        < InnerWrapper>
                            <StyledLink href={project.LiveDemoLink} target="_blank" rel="noopener noreferrer">
                                <ProjectTitle>{project.title}</ProjectTitle>
                            </StyledLink>
                            <ProjectTextWrapper>
                                <OnLightText>{project.description}</OnLightText>
                            </ProjectTextWrapper>
                            <ul>
                                {project.stack.map((lang, i) => (
                                    <TechTag key={i}>{lang}</TechTag>
                                ))}
                            </ul>
                            <ButtonWrapper>
                                <PrimaryButton
                                    variant="alternative"
                                    onClick={() => window.open(project.githubLink)}>
                                    <FontAwesomeIcon icon={faGithub}
                                        style={{ marginRight: '10px' }} /> View the code</PrimaryButton>
                                <PrimaryButton
                                    onClick={() => window.open(project.LiveDemoLink)}>
                                    <FontAwesomeIcon
                                        style={{ marginRight: '10px' }} icon={faGlobe} />
                                    Live demo</PrimaryButton>
                            </ButtonWrapper>
                        </InnerWrapper>
                    </ProjectWrapper>

                ))}
            </ul>
        </main >
    );
}

export default ProjectContent;
