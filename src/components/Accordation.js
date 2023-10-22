import React from 'react';
import styled from 'styled-components';
import { OnLightText } from 'reusables/FontStyles';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const AccordionButton = styled.button`
  background-color: #48274800;
  border-radius: 5px;
 margin-bottom: 14px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding: 13px;
  transition: background-color 0.3s ease;
  box-shadow: 1px 1px 7px rgba(99, 99, 157, 0.3);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const ProjectTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align:left;
  margin-bottom: 20px;

`;

const TruncatedText = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 5; // Change this to the number of lines you want to display
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Accordion = ({ index, openIndex, toggleAccordion, description }) => {
    const isOpen = index === openIndex;

    return (
        <>
            <AccordionButton
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
            >
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                <span>Show More</span>
            </AccordionButton>

            {isOpen ? (
                <ProjectTextWrapper>
                    <OnLightText>
                        {description}
                    </OnLightText>
                </ProjectTextWrapper>
            ) : (
                <TruncatedText>
                    <OnLightText>
                        {description.split("\n").slice(0, 5).join("\n")}...
                    </OnLightText>
                </TruncatedText>
            )}
        </>
    );
};

export default Accordion;





