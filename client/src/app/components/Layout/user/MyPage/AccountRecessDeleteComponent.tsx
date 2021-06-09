import React from 'react';
import Head from 'next/head';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fade, ThemeProvider, withStyles, makeStyles, createMuiTheme, } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import CustomButton from '../../../Custom/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import CustomBadge from '../../../Custom/CustomBadge';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '294px',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

export default function AccountRecessDeleteComponent() {
    return (
        <div className='infoArea'>
            <div className='cardContent'>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose" >required</CustomBadge>
                        <Typography>Full Name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput defaultValue="" id="bootstrap-input" />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography>Activity Area</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput defaultValue="" id="bootstrap-input" />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography>Full Name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput defaultValue="" id="bootstrap-input" />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography>Full Name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput defaultValue="" id="bootstrap-input" />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography>Full Name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput defaultValue="" id="bootstrap-input" />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography>Full Name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput defaultValue="" id="bootstrap-input" />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography>Full Name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput defaultValue="" id="bootstrap-input" />
                    </FormControl>
                </div>
                <div className='buttonGroup'>
                    <CustomButton color='google' round>
                        <div>Send Verification Email</div>
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}
