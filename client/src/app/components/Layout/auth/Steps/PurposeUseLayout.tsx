import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, fade, withStyles, Theme, useTheme } from '@material-ui/core/styles';
import CustomButton from '../../../Custom/CustomButton';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import CustomBadge from '../../../Custom/CustomBadge';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';

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

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        formControl: {
            marginTop: theme.spacing(1),
            width: 320,
            minHeight: 40,
            height: 'auto'
        },
        chips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        chip: {
            margin: 2,
            background: 'black',
            color: 'white',
            borderRadius: '4px',
            fontFamily: 'YuGothic',
            fontSize: 12,
        },
        noLabel: {
            marginTop: theme.spacing(3),
        },
    }),
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
]

export default function PurposeUse() {
    const classes = useStyles();
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPersonName(event.target.value as string[]);
    };
    
    const handleChangeMultiple = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { options } = event.target as HTMLSelectElement;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setPersonName(value);
    };

    const [age, setAge] = useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    const [purpose, setPurpose] = useState('');
    const handlePurpose = (event: React.ChangeEvent<{ value: unknown }>) => {
        setPurpose(event.target.value as string);
    };

    const [value, setValue] = React.useState('TextArea');
    const handleTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleAddSecond = () => {

    }

    return (
        <div className='infoArea'>
            <div className='cardContent'>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperContentTitle'>First Purpose</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <Select
                            id="demo-customized-select"
                            value={purpose}
                            onChange={handlePurpose}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value=''>
                                <em>Please choose purpose</em>
                            </MenuItem>
                            <MenuItem value={1}>Tokyo</MenuItem>
                            <MenuItem value={2}>Kobe</MenuItem>
                            <MenuItem value={3}>Hiroshima</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography className='stepperWarning'>Please choose your first purpose</Typography>
                </div>
                <div className='profileContent' style={{ marginTop: '40px'}}>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Industry</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <Select
                            id="demo-customized-select"
                            value={purpose}
                            onChange={handlePurpose}
                            input={<BootstrapInput />}
                        >
                            <MenuItem value=''>
                                <em>Please choose purpose</em>
                            </MenuItem>
                            <MenuItem value={1}>Tokyo</MenuItem>
                            <MenuItem value={2}>Kobe</MenuItem>
                            <MenuItem value={3}>Hiroshima</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography className='stepperWarning'>Please choose industry</Typography>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="gray">optional</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Vision</Typography>
                    </div>
                    <FormControl className='profileInput'>
                        <BootstrapInput className='bootstrapInput' />
                    </FormControl>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Business Plan</Typography>
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
                    <Typography className='stepperWarning'>Please enter business plan</Typography>
                </div>
                <div className='profileContent'>
                    <div className='profileTitle'>
                        <CustomBadge color="rose">required</CustomBadge>
                        <Typography className='stepperDetailContentTitle'>Required resources</Typography>
                    </div>
                    <div className='resourcesDiv'>
                        <div className='resourcesCheckboxDiv'>
                            <Checkbox
                                defaultChecked
                                color="secondary"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                className='resourcesCheckbox'
                            />
                            <Typography className='resourcesCheckboxTitle'>Skills</Typography>
                        </div>
                        <FormControl className={classes.formControl}>
                            <Select
                            multiple
                            value={personName}
                            onChange={handleNameChange}
                            input={<Input />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                {(selected as string[]).map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            className='resourcesSelect'
                            >
                            {names.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                    <br />
                    <div className='resourcesDiv'>
                        <div className='resourcesCheckboxDiv'>
                            <Checkbox
                                defaultChecked
                                color="primary"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                className='resourcesCheckbox'
                            />
                            <Typography className='resourcesCheckboxTitle'>Funding</Typography>
                        </div>
                        <FormControl className={classes.formControl}>
                            <Select
                            multiple
                            value={personName}
                            onChange={handleNameChange}
                            input={<Input />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                {(selected as string[]).map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            className='resourcesSelect'
                            >
                            {names.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <br />
                <div>
                    <div className='resourcesDiv'>
                        <div className='resourcesCheckboxDiv'>
                            <Checkbox
                                defaultChecked
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                                className='resourcesCheckbox'
                            />
                            <Typography className='resourcesCheckboxTitle'>Alliance</Typography>
                        </div>
                        <FormControl className={classes.formControl}>
                            <Select
                            multiple
                            value={personName}
                            onChange={handleNameChange}
                            input={<Input />}
                            renderValue={(selected) => (
                                <div className={classes.chips}>
                                {(selected as string[]).map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                                </div>
                            )}
                            MenuProps={MenuProps}
                            className='resourcesSelect'
                            >
                            {names.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>

                <div className='buttonGroup'>
                    <CustomButton round className='stepAddSecondButton' onClick={handleAddSecond}>
                        + Add second purpose
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}
