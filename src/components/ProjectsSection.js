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
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import Accordion from './Accordation';

const ProjectContent = () => {
  const [selectedStack, setSelectedStack] = useState('all');
  const options = [
    { value: 'all', label: 'All projects' },
    { value: 'Axios', label: 'Axios' },
    { value: 'React Router', label: 'React Router' },
    { value: 'React Hooks', label: 'React Hooks' },
    { value: 'Postman', label: 'Postman' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'JSX', label: 'JSX' },
    { value: 'Styled Components', label: 'Styled Components' },
    { value: 'Material UI', label: 'Material UI' },
    { value: 'API', label: 'API' },
    { value: 'Express', label: 'Express' },
    { value: 'Mongo DB', label: 'Mongo DB' },
    { value: 'CSS', label: 'CSS' },
    { value: 'HTML', label: 'HTML' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Redux', label: 'Redux' },
    { value: 'Pair-programming', label: 'Pair-programming' },
    { value: 'Backend', label: 'Backend' },
  ];

  // state variable for accordion
  const [openProject, setOpenProject] = useState(null);

  const toggleAccordion = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  const customStyles = {
    placeholder: (base) => ({
      ...base,
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'black' : 'black',
      padding: 20,
      background: state.isFocused
        ? theme.colors.vibrantPinkPastel
        : theme.colors.lightPinkPastel,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? '' : 'vibrantPink',
      },
    }),
    control: (base, state) => ({
      ...base,
      width: 300,
      background: theme.colors.lightPinkPastel,
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,

      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused ? 'vibrantPink' : 'vibrantPink',
      },
    }),
    menu: (base) => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,

      // kill the white space on first and last option
      padding: 0,
    }),
  };

  const handleChange = (selectOption) => {
    setSelectedStack(selectOption.value);
  };

  const filteredProjects = projects.filter(
    (project) =>
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
     margin: 2rem 2rem 1rem 2rem;

    @media screen and (min-width: 668px) {
      width: 300px;
    height: auto;
    background-image: url(${(props) => props.imgSrc});
background-size: cover;
background-position: center;


    :hover 
        transform: scale(1.1);
        transition: transform 0.5s ease-in-out;
        cursor: pointer;

    }`;

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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem 0.5rem 0.5rem 0.5rem;

    @media screen and (min-width: 668px) {
    }
  `;

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
  const StyledFigure = styled.figure`
    display: block;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;

    @media screen and (min-width: 668px) {
      display: inline-block;
    }
  `;

  const ImageCaption = styled.figcaption`
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.9em;
    color: grey;
  `;

  return (
    <main
      id='projects'
      style={{ backgroundColor: theme.colors.sectionsBackground }}
    >
      <SectionTitle>Featured Projects</SectionTitle>
      <InnerWrapper
        style={{
          textAlign: 'center',
        }}
      >
        <OnLightText>
          Here I listed some of my projects. Head over to my GitHub to check out
          more of my work
          <StyledLink
            label='GitHub' //
            title='GitHub'
            href='https://github.com/annikalindberg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub style={{ margin: '0.7rem 0rem 0rem 1rem' }}></FaGithub>
          </StyledLink>
        </OnLightText>
      </InnerWrapper>
      <DropdownWrapper>
        <Select
          styles={customStyles}
          options={options}
          onChange={handleChange}
          placeholder='Select a stack'
          htmlFor='Select a stack'
        />
      </DropdownWrapper>
      {/* <StyledFontAwesomeIcon icon={faArrowDown} /> */}

      <ul>
        {filteredProjects.map((project, index) => (
          <ProjectWrapper key={index}>
            <ImageWrapper>
              <StyledFigure>
                <a
                  href={project.LiveDemoLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                  />
                </a>
                <ImageCaption>{project.imageCaption}</ImageCaption>
              </StyledFigure>
            </ImageWrapper>
            <InnerWrapper>
              <StyledLink
                href={project.LiveDemoLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ProjectTitle>{project.title}</ProjectTitle>
              </StyledLink>

              <Accordion
                index={index}
                openIndex={openProject}
                toggleAccordion={toggleAccordion}
                description={project.description}
              />
              <ul>
                {project.stack.map((lang, i) => (
                  <TechTag key={i}>{lang}</TechTag>
                ))}
              </ul>
              <ButtonWrapper>
                <PrimaryButton
                  variant='alternative'
                  onClick={() => window.open(project.githubLink)}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ marginRight: '10px' }}
                  />{' '}
                  View the code
                </PrimaryButton>
                <PrimaryButton
                  onClick={() => window.open(project.LiveDemoLink)}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: '10px' }}
                    icon={faGlobe}
                  />
                  Live demo
                </PrimaryButton>
              </ButtonWrapper>
            </InnerWrapper>
          </ProjectWrapper>
        ))}
      </ul>
    </main>
  );
};

export default ProjectContent;
