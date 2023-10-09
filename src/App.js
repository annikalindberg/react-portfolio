import React from 'react'
import HeroSection from './components/Hero'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import ProjectContent from './components/ProjectsSection';
import TechStack from './components/TechStack';
import NewFooter from './components/Footer';

export const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <HeroSection />
        <TechStack />
        <ProjectContent />
        <NewFooter />
      </ThemeProvider>

    </div>
  )
}
