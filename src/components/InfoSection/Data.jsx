export const homeObjOne = {
    id: 'react1',
    lightBg: false,
    lightText: true,
    darkText: false,
    lightTextDesc: true,
    topLine: '',
    headLine: 'REACT-1',
    description: 'Each month, over 150,000 randomly selected people across England are sent a nose/throat swab test to take at home. This helps us understand how many people are currently infected with SARS-CoV-2, including those who are not showing symptoms.',
    buttonLabel: 'Next',
    linkTo: 'react2',
    imgStart: false,
    img: require('../../images/react2.svg').default,
    alt: 'react1',
    dark: true,
    primary: true
};

export const homeObjTwo = {
    id: 'react2',
    lightBg: true,
    lightText: false,
    darkText: true,
    lightTextDesc: true,
    topLine: '',
    headLine: ' REACT-2',
    description: 'Our REACT-2 study looked at how many people already had COVID-19 and developed antibodies against the virus. This enhances our understanding of the spread of COVID-19 across England.',
    buttonLabel: 'Next',
    linkTo: 'reactge',
    imgStart: true,
    img: require('../../images/react1.svg').default,
    alt: 'react2',
    dark: true,
    primary: true
};

export const homeObjThree = {
    id: 'reactge',
    lightBg: false,
    lightText: true,
    darkText: false,
    lightTextDesc: true,
    topLine: '',
    headLine: 'REACT-GE',
    description: 'The REACT-GE study aims to look for biological signatures, such as molecules in the blood or variations in people\' genes that could help explain why some individuals experience serious illness whilst others don\'t.',
    buttonLabel: 'Next',
    linkTo: 'reactlc',
    imgStart: false,
    img: require('../../images/reactLC.svg').default,
    alt: 'reactge',
    dark: true,
    primary: true
};

export const homeObjFour = {
    id: 'reactlc',
    lightBg: true,
    lightText: false,
    darkText: true,
    lightTextDesc: true,
    topLine: '',
    headLine: 'REACT-LC',
    description: 'The REACT Long COVID study involves more than 120,000 people to better understand why some people who are infected with SARS-CoV-2 continue to have symptoms for several weeks or even months.',
    buttonLabel: 'Next',
    imgStart: true,
    img: require('../../images/reactGE.svg').default,
    alt: 'reactlc',
    dark: true,
    primary: true
};