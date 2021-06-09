import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Image from 'next/image';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ProfileComponent from '../../Layout/user/MyPage/ProfileComponent';
import CurrentJobComponent from '../../Layout/user/MyPage/CurrentJobComponent';
import PurposeListComponent from '../../Layout/user/MyPage/PurposeListComponent';
import NotificationComponent from '../../Layout/user/MyPage/NotificationComponent';
import EmailAddressComponent from '../../Layout/user/MyPage/EmailAddressComponent';
import AccountRecessDeleteComponent from '../../Layout/user/MyPage/AccountRecessDeleteComponent';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        margin: '20px 136px 0px 136px',
    },
    tabs: {
        // borderRight: `1px solid ${theme.palette.divider}`,
    },
    profileWidget: {
        margin: '0px 136px 20px 136px',
        textAlign: 'center'
    },
    imgRounded: {
        borderRadius: '10px 10px 0px 0px'
    },
    imgRaised: {
        boxShadow: "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    imgFluid: {
        maxWidth: "100%",
        height: "auto"
    },
    imgRoundedCircle: {
        borderRadius: "50% !important"
    },
    avatarArea: {
        marginTop: '-70px'
    },
    input: {
        display: 'none'
    },
    uploadButton: {
        marginTop: '-40px',
        marginLeft: '80px'
    },
    tabLayout: {
        display: 'block',
        marginBottom: '100px'
    },
    tabContentLayout: {
        width: '100%'
    }
}));

export default function MyPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='profileMain'>
            <div className={classes.profileWidget}>
                <Image src='/images/profilebg.jpg' alt='Profile Background' width={880} height={380} className={classes.imgRounded} />
                <div className={classes.avatarArea}>
                    <Image src='/images/faces/christian.jpg' alt="..." width={120} height={120} className={classes.imgRoundedCircle + " " + classes.imgFluid} />
                </div>
                <div className={classes.uploadButton}>
                    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>
            </div>
            <div className={classes.root}>
                <div className={classes.tabLayout}>
                    <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs} >
                        <Tab label="Profile" className='tabDivider' disabled />
                        <Tab label="Profile" {...a11yProps(0)} className='tabLabel'/>
                        <Tab label="Current job" {...a11yProps(1)} className='tabLabel' />
                        <Tab label="Purpose list" {...a11yProps(2)} className='tabLabel' />
                        <Tab label="Setting" className='tabDivider' disabled />
                        <Tab label="Notification" {...a11yProps(3)} className='tabLabel' />
                        <Tab label="Email address" {...a11yProps(4)} className='tabLabel' />
                        <Tab label="Sign out" {...a11yProps(5)} className='tabLabel' onClick={handleClickOpen} />
                        <Tab label="Account Recess/Delete" {...a11yProps(6)} className='tabLabel' />
                    </Tabs>
                </div>
                <div className={classes.tabContentLayout}>
                    <TabPanel value={value} index={1} >
                        <ProfileComponent />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <CurrentJobComponent />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <PurposeListComponent />
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <NotificationComponent />
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        <EmailAddressComponent />
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                        Sign Out
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                        <AccountRecessDeleteComponent />
                    </TabPanel>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">
                    {"Do you really want to sign out?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        All of the information will be saved.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        No
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}