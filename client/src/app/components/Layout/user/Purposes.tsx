import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { PurposeContent } from './PurposeContent';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
        <div role="tabpanel" hidden={value !== index} id={`scrollable-auto-tabpanel-${index}`} aria-labelledby={`scrollable-auto-tab-${index}`} {...other}>
            {value === index && (
            <Box p={3} style={{padding: '0px'}}>
                {children}
            </Box>
            )}
        </div>
    );
}
  
function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

interface StyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
    label: string;
}

const StyledTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            textTransform: 'none',
            color: '#fff',
            backgroundColor: '#000',
            borderRadius: '40px',
            minHeight: '36px',
            fontWeight: theme.typography.fontWeightRegular,
            // fontSize: theme.typography.pxToRem(15),
            fontSize: '14px',
            marginRight: theme.spacing(1),
            '&:focus': {
                opacity: 1,
            },
        },
    }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        // width: '100%',
        // backgroundColor: theme.palette.background.paper,
    },
    padding: {
        // padding: theme.spacing(3),
    },
    tab: {
        backgroundColor: theme.palette.background.paper,
        padding: '0px 136px',
    }
}));

export const Purposes = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
  
    return (
        <div className={classes.root}>
            <div className={classes.tab}>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                    <StyledTab label="All Purpose" {...a11yProps(0)} />
                    <StyledTab label="Expand Company's Business" {...a11yProps(1)} />
                    <StyledTab label="Start up my business" {...a11yProps(2)} />
                    <StyledTab label="Start up my business with someone" {...a11yProps(3)} />
                    <StyledTab label="Invest" {...a11yProps(4)} />
                    <StyledTab label="Help individuals" {...a11yProps(5)} />
                    <StyledTab label="Help company" {...a11yProps(6)} />
                </StyledTabs>
                <Typography className={classes.padding} />
            </div>
            <TabPanel value={value} index={0}>
                <PurposeContent />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PurposeContent />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <PurposeContent />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <PurposeContent />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <PurposeContent />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <PurposeContent />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <PurposeContent />
            </TabPanel>
        </div>
    );
};

///////////////////////////////////////////////////////
  
//   const useStyles = makeStyles((theme: Theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//   }));
  
//   export default function ScrollableTabsButtonAuto() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);
  
//     const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
//       setValue(newValue);
//     };
  
//     return (
//       <div className={classes.root}>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="scrollable"
//             scrollButtons="auto"
//             aria-label="scrollable auto tabs example"
//           >
//             <Tab label="Item One" {...a11yProps(0)} />
//             <Tab label="Item Two" {...a11yProps(1)} />
//             <Tab label="Item Three" {...a11yProps(2)} />
//             <Tab label="Item Four" {...a11yProps(3)} />
//             <Tab label="Item Five" {...a11yProps(4)} />
//             <Tab label="Item Six" {...a11yProps(5)} />
//             <Tab label="Item Seven" {...a11yProps(6)} />
//           </Tabs>
//         </AppBar>
        
//       </div>
//     );
//   }
