import React from 'react'
import HeroSection from './components/Hero'
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ProjectContent from './components/ProjectsSection';
import TechStack from './components/TechStack';
import NewFooter from './components/Footer';
import Skills from './components/Skills';
import MyWords from 'components/MyWords';
import { GlobalStyles } from './GlobalStyles';
import StickyNavbar from './components/StickyNavbar';

export const App = () => {
  const sections = ['home', 'tech-stack', 'projects', 'my-words', 'skills', 'time-to-talk'];
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StickyNavbar sections={sections} />
        <HeroSection id="home" />
        <TechStack id="tech-stack" />
        <ProjectContent id="projects" />
        <MyWords id="my-words" />
        <Skills id="skills" />
        <NewFooter id="time-to-talk" />
      </ThemeProvider>

    </div>
  )
}
