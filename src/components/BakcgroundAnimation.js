import { ReactComponent as SVG1 } from '../svg/blob1.svg'
import { ReactComponent as SVG2 } from '../svg/blob2.svg';
import { ReactComponent as SVG3 } from '../svg/blob3.svg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';


// Styled versions of SVG1 and SVG2
const StyledSVG1 = styled(SVG1)`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  preserveAspectRatio: "none";
`;

const StyledSVG2 = styled(SVG2)`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  
  preserveAspectRatio: "none";
`;

const SVGWrapper = styled.div`
   width: 900px;
   height: 1000px;
   margin-top: 30%;

    
    
  
`;

const SVGAnimation = () => {
    const [currentSVG, setCurrentSVG] = useState("SVG1");

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSVG(prevSVG => (prevSVG === "SVG1" ? "SVG2" : "SVG1"));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <SVGWrapper>
            {currentSVG === "SVG1" ? <StyledSVG1 /> : <StyledSVG2 />}

        </SVGWrapper>
    );
}
export default SVGAnimation;