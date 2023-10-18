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
import { Helmet } from 'react-helmet';

export const App = () => {
  const sections = ['home', 'tech-stack', 'projects', 'my-words', 'skills', 'time-to-talk'];
  return (
    <div>
      <Helmet>
        <title>Your Portfolio Title</title>
        <meta property="og:title" content="Annika Lindberg Frontend Developer | React.js Portfolio" />
        <meta property="og:description" content="Showcasing my frontend development skills, projects, and technologies. Specialized in Web Applications using Javascript, React.js, Node.js, Express.js, MongoDB, responsive design, UX/UI, Webb Accessability" />
        <meta property="og:title" content="Annika Lindberg Frontend Developer" />
        <meta property="og:description" content="Portfolio showcasing my skills and projects as a frontend developer" />
        <meta property="og:image" content="URL_to_default_og_image.jpg" />
      </Helmet>
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
