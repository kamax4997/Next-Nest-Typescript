import { container, title } from '../NextjsMaterialKit';

import imagesStyle from '../nextjs-material-kit/ImagesStyle';

const ProfileCardStyle = {
    container,
    profile: {
        textAlign: "center",
        "& img": {
            maxWidth: "160px",
            width: "100%",
            margin: "0 auto",
            transform: "translate3d(0, -50%, 0)"
        }
    },
    description: {
        margin: "1.071rem auto 0",
        maxWidth: "600px",
        color: "#999",
        textAlign: "center !important"
    },
    name: {
        marginTop: "-80px"
    },
    ...imagesStyle,
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
        marginTop: '-6px'
    },
    mainRaised: {
        // margin: "-60px 30px 0px",
        borderRadius: "0px 0px 10px 10px",
        boxShadow:
          "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    title: {
        display: "inline-block",
        position: "relative",
        fontSize: '16px',
        color: 'black',
        marginTop: "20px",
        textDecoration: "none"
    },
    socials: {
        marginTop: "0",
        width: "100%",
        transform: "none",
        left: "0",
        top: "0",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px",
        color: "#999"
    },
    navWrapper: {
        margin: "20px auto 50px auto",
        textAlign: "center"
    },
    statusChip: {
        height: '16px',
        fontSize: '10px',
        marginTop: '-120px'
    },
    statusIcon: {
        background: '#0bc577',
        borderRadius: '50%',
        width: '12px !important',
        height: '12px !important'
    },
    activityArea: {
        fontSize: '12px',
        color: 'black'
    },
    workInfo: {
        fontSize: '12px',
        color: 'black'
    },
    talkButton: {
        width: '100%',
        fontSize: '16px',
        margin: '20px 0px 32px 0px'
    },
    skillPart: {
        margin: '20px 20px 0px 20px',
        fontSize: '12px'
    },
    skillItem: {
        fontSize: '12px',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '5px 8px 5px 8px',
        marginBottom: '5px'
    },
    skillType: {
        marginBottom: '8px',
        fontSize: '12px',
        width: 'fit-content'
    },
};

export default ProfileCardStyle;
