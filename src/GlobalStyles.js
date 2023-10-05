import { createGlobalStyle } from 'styled-components';

import SatoshiRegular from './fonts/Satoshi-Regular.woff';
import SatoshiBold from './fonts/Satoshi-Bold.woff';
import SatoshiLight from './fonts/Satoshi-Light.woff';
import SatoshiMedium from './fonts/Satoshi-Medium.woff';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Satoshi';
        src: url(${SatoshiRegular}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Satoshi';
        src: url(${SatoshiBold}) format('woff');
        font-weight: bold;
        font-style: normal;
    }
    @font-face {
        font-family: 'Satoshi';
        src: url(${SatoshiLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Satoshi';
        src: url(${SatoshiMedium}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Bevellier';
        src: url(${BevellierMedium}) format('woff');
        font-weight: 500;
        font-style: normal;
    }
    

`;

export default GlobalStyles;