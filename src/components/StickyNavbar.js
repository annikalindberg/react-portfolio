import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import { FaHome, FaCode, FaProjectDiagram, FaComment, FaHeadset, FaLaptopCode } from 'react-icons/fa';

// Your pastel colors
const colors = {
    pastelPink: "#FFB6C1",
    pastelGreen: "#98FB98",
    pastelPurple: "#988798a6"
};

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0; // <- Stick to the top of the screen 
  margin: 0px 0 20px 0px;
  width: 100%;
  z-index: 1000;


  @media (min-width: 768px) {
  }
`;

const NavItems = styled.ul`
  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};  // Display based on isMenuOpen for mobile
background-color: #bef1efed;
width: ${props => (props.isMenuOpen ? '50%' : '')}; // Display based on isMenuOpen for mobile  

align-items: flex-start;  // Aligns items to the left on the vertical axis
  overflow: hidden;
  padding: 20px 0 20px 0;
  flex-direction: column;
  justify-content: space-around;
 
  list-style: none;

  @media screen and (min-width: 969px) {
    display: flex;  // Always display for larger screens
    flex-direction: row;
        width: 100%;  // Takes full width of the screen
    align-items: flex-end;  // Aligns items to the right for mobile
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  font-size: 1.2rem; 
  text-transform: capitalize;  // <- To make the text uppercase. To only capitalize the first letter, use capitalize instead 
  display: flex;
  align-items: center;
  gap: 8px;  // <- Adds space between the icon and the text
  margin-bottom: 1rem;  // <- Adds space between the items
  
 

  &:hover { 
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid ${colors.pastelPurple}; // <- Adds a purple outline on focus when using tab key. Only works on Chrome and Firefox though 
  }
  /*  @media screen and (max-width: 887px) {
    flex-direction: column;
    gap: 1rem;  // increase gap
    } */
`;


const HamburgerIcon = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin: 1rem;
cursor: pointer;
align-items: flex-start;
  z-index: 1001;  // To make sure it appears above the menu

div {
    width: 34px; 
    height: 6px;
    background-color: black;
    border-radius: 5px;
   
}
@media screen and (min-width: 682px ) {
    gap: 7px;

    div {
    width: 40px;
    height: 7px;
    }
    
}

@media screen and (min-width: 969px) {
display: none;
}
`;

const KeyboardAwareNavItem = ({ section, onClick, isActive, isMenuOpen }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick(section);
        }
    };

    return (
        <NavItem
            onClick={() => onClick(section)}
            onKeyPress={handleKeyPress}
            tabIndex="0"
            aria-expanded={isActive ? 'true' : 'false'}
            style={{ color: isActive ? colors.pastelPurple : '' }}
        >
            {section === 'home' && <FaHome style={{ marginLeft: isMenuOpen ? '10px' : '0' }} />}
            {section === 'tech-stack' && <FaCode style={{ marginLeft: isMenuOpen ? '10px' : '0' }} />}
            {section === 'projects' && <FaProjectDiagram style={{ marginLeft: isMenuOpen ? '10px' : '0' }} />}
            {section === 'my-words' && <FaComment style={{ marginLeft: isMenuOpen ? '10px' : '0' }} />}
            {section === 'skills' && <FaLaptopCode style={{ marginLeft: isMenuOpen ? '10px' : '0' }} />}
            {section === 'time-to-talk' && <FaHeadset style={{ marginLeft: isMenuOpen ? '10px' : '0' }} />}
            {section}
        </NavItem>
    );
};

const StickyNavbar = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    const handleScroll = () => {
        let found = false;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (!element) continue;
            const rect = element.getBoundingClientRect();

            if (rect.top <= 0 && rect.bottom >= 0) {
                setActiveSection(section);
                found = true;
                break;
            }
        }

        if (!found) {
            setActiveSection('');
        }
    };

    const handleClickOutside = (event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    const handleClick = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <NavbarContainer ref={navRef}>
            <HamburgerIcon onClick={() => setMenuOpen(!isMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </HamburgerIcon>

            <NavItems isMenuOpen={isMenuOpen}>
                {sections.map((section) => (
                    <KeyboardAwareNavItem
                        key={section}
                        section={section}
                        onClick={handleClick}
                        isActive={activeSection === section}
                        isMenuOpen={isMenuOpen}
                    />
                ))}
            </NavItems>
        </NavbarContainer>
    );
};


export default StickyNavbar;
