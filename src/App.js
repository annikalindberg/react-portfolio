import React from 'react'
import HeroSection from './components/Hero'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ProjectContent from './components/ProjectsSection';
import TechStack from './components/TechStack';
import NewFooter from './components/Footer';
import Skills from './components/Skills';
import MyWords from 'components/MyWords';
import { GlobalStyles } from './GlobalStyles';

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HeroSection />
        <TechStack />
        <ProjectContent />
        <MyWords />
        <Skills />
        <NewFooter />
      </ThemeProvider>

    </div>
  )
}
