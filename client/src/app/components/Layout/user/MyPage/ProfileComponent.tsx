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
import { faFacebook, faTwitter, faInstagram, faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CustomBadge from '../../../Custom/CustomBadge';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#F7F7F7',
        // border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
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

export default function ProfileComponent() {
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const [age, setAge] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    return (
        <div className='infoArea'>
            <div className='cardContent'>
                <div className='profileContent'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className='profileTitle'>
                                <CustomBadge color="rose" >required</CustomBadge>
                                <Typography className='badgeTitle'>Full Name</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} />} label="Anonymous mode" labelPlacement="start" className='profileMode' />
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className='profileInput'>
                                <BootstrapInput defaultValue="" style={{width: '150px'}} className='BMInput' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className='profileInput'>
                                <BootstrapInput defaultValue="" style={{width: '150px'}} className='BMInput' />
                            </FormControl>
                        </Grid>
                    </Grid>
                </div>
                <div className='profilePageContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="gray">any</CustomBadge>
                        <Typography className='badgeTitle'>Link SNS</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <Input id="input-with-icon-adornment" startAdornment={
                            <InputAdornment position="start" className='snsIcon' style={{
                                color: '#1877f2'}}>
                                <FontAwesomeIcon icon={faFacebook} className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                            </InputAdornment>
                        } className='snsLink' value='https://www.facebook.com/' />
                    </FormControl>
                    <FormControl className='profileInput'>
                        <Input id="input-with-icon-adornment" startAdornment={
                            <InputAdornment position="start" className='snsIcon' style={{
                                color: '#00aed1'}}>
                                <FontAwesomeIcon icon={faWikipediaW} className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                            </InputAdornment>
                        } className='snsLink' value='https://www.wantedly.com/id/' />
                    </FormControl>
                    <FormControl className='profileInput'>
                        <Input id="input-with-icon-adornment" startAdornment={
                            <InputAdornment position="start" className='snsIcon' style={{
                                color: '#1da1f2'}}>
                                <FontAwesomeIcon icon={faTwitter} className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                            </InputAdornment>
                        } className='snsLink' value='https://twitter.com/' />
                    </FormControl>
                    <FormControl className='profileInput'>
                        <Input id="input-with-icon-adornment" startAdornment={
                            <InputAdornment position="start" className='snsIcon' style={{
                                color: '#f1040f'}}>
                                <FontAwesomeIcon icon={faInstagram} className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                            </InputAdornment>
                        } className='snsLink' value='https://www.instagram.com/' />
                    </FormControl>
                </div>
                <div className='profilePageContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='badgeTitle'>Activity area</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
                        <Select labelId="demo-customized-select-label" id="demo-customized-select" value={age} onChange={handleChange} input={<BootstrapInput className='BMInput' />} style={{width: '100%'}} >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='buttonGroup'>
                    <CustomButton color='github' round className='profileSaveButton'>
                        <div className='profileSaveButtonTitle'>Save</div>
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}
