import React, { useState } from 'react';
import projects from './ProjectsArray';
import styled from 'styled-components';
import { PrimaryButton } from '../reusables/Buttons';
import { ProjectImage } from 'reusables/imagesStyles';
import { SectionTitle, ProjectTitle, OnLightText } from 'reusables/FontStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Select from 'react-select';
import theme from 'theme';

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
background-color: ${({ theme }) => theme.colors.vibrantPinkPastel};
    @media screen and (min-width: 668px) {
  display: flex;
  box-shadow: 0dvw 0.2dvh 0.5rem rgba(0, 0, 0, 0.5); 
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
  background-color: ${({ theme }) => theme.colors.lightGreen};
  color: black;
  padding: 5px;
  margin: 2px;
  border-radius: 3px; 
  display: inline-block; // for horizontal layout 

  
`;
    const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
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
        justify-content: flex-end;
        @media screen and (min-width: 668px) {
            justify-content: center;
            
        }
   `;

    /*  const StyledSelect = styled.select`
   width: 100%;
   height: 40px;
  background-color: ${({ theme }) => theme.colors.vibrantPinkPastel};
   color: #000;
   
   font-size: 0.9rem;
   border: none;
   border-radius: 8px;
   padding: 10px;
   appearance: none; /* Remove default appearance */

    /* &:focus {
      outline: none;
      border-color: #007bff; /* Change border color on focus */
    /*   }
    `;
    
        const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
      margin-right: 50px; 
      margin-top: 6px;
    `;   */



    return (
        <div>
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
                            <ProjectImage src={project.image} alt={project.title} />
                        </ImageWrapper>
                        < InnerWrapper>
                            <ProjectTitle>{project.title}</ProjectTitle>
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
                                    onClick={() => window.open(project.githubLink)}>View the code</PrimaryButton>
                                <PrimaryButton onClick={() => window.open(project.LiveDemoLink)}>Live demo</PrimaryButton>
                            </ButtonWrapper>
                        </InnerWrapper>
                    </ProjectWrapper>

                ))}
            </ul>
        </div>
    );
}

export default ProjectContent;
