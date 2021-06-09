import { container, title } from '../NextjsMaterialKit.js';
import CheckboxRadioSwitchStyle from './components/CheckboxRadioSwitchStyle';
import { createUseStyles } from 'react-jss';

const getStyle = {
    sections: {
        padding: '70px 0'
    },
    container,
    title: {
        ...title,
        marginTop: '30px',
        minHeight: '32px',
        color: 'blue',
        textDecoration: 'none'
    },
    space50: {
        height: '50px',
        display: 'block'
    },
    space70: {
        height: '70px',
        display: 'block'
    },
    icons: {
        width: '17px',
        height: '17px',
        color: '#FFFFFF'
    },
    checkboxArea: {
        marginLeft: '170px',
        marginRight: '170px',
        marginTop: '30px',
        textAlign: 'start'
    },
    ...CheckboxRadioSwitchStyle
};

const BasicsStyle = createUseStyles(getStyle);

export default BasicsStyle;
