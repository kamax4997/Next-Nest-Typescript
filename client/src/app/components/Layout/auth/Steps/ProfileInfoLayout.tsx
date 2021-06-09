import React from 'react';
import Typography from '@material-ui/core/Typography';
import { fade, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import ImageUpload from '../../../Custom/CustomImageUpload';
import CustomBadge from '../../../Custom/CustomBadge';
import styles from '../../../../../assets/jss/nextjs-material-kit/components/ImageStyle';
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
        border: 'none',
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

export default function ProfileInfo() {
    const classes = styles();
    const [age, setAge] = React.useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    const [value, setValue] = React.useState('TextArea');

    const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <div className='infoArea'>
            <img src='/images/faces/hana.png' alt="..." className={classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid} />
            <div className='cardContent'>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose" >required</CustomBadge>
                        <Typography className='stepperContentTitle'>Full Name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput className='bootstrapInput' />
                    </FormControl>
                    <Typography className='stepperWarning'>Please enter your name</Typography>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperContentTitle'>Activity Area</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <Select
                            id="demo-customized-select"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value=''>
                                <em>Choose your activity area</em>
                            </MenuItem>
                            <MenuItem value={1}>Tokyo</MenuItem>
                            <MenuItem value={2}>Kobe</MenuItem>
                            <MenuItem value={3}>Hiroshima</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography className='stepperWarning'>Please choose your activity area</Typography>
                </div>
                <div className='profileContent' style={{ marginTop: '40px' }}>
                    <Typography className='stepperContentTitle'>Current Work</Typography>
                    <br />
                    <div className='profileTitle'>
                        <CustomBadge color="gray">optional</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Company’s name</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput className='bootstrapInput' />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="gray">optional</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Company’s URL</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput className='bootstrapInput' />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Occupation</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput className='bootstrapInput' />
                    </FormControl>
                    <Typography className='stepperWarning'>Please enter occupation</Typography>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Brief job history</Typography>
                    </div>
                    <FormControl className='profileInput customTextField'>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            rowsMax={6}
                            rows={6}
                            value={value}
                            onChange={handleTextField}
                            />
                    </FormControl>
                    <Typography className='stepperWarning'>Please enter brief job history</Typography>
                </div>
                <div className='profileContent' style={{ marginTop: '40px'}}>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperContentTitle'>Skills</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <Select
                            id="demo-customized-select"
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value=''>
                                <em>Choose your activity area</em>
                            </MenuItem>
                            <MenuItem value={1}>Tokyo</MenuItem>
                            <MenuItem value={2}>Kobe</MenuItem>
                            <MenuItem value={3}>Hiroshima</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography className='stepperWarning'>Please select all your skills</Typography>
                </div>
            </div>
        </div>
    );
}
