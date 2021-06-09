import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProfileInfo from './Steps/ProfileInfoLayout';
import PurposeUse from './Steps/PurposeUseLayout';
import Image from 'next/image';
import CustomButton from '../../Custom/CustomButton';
import Head from 'next/head';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: 'white',
            margin: '100px 136px 100px 136px',
            height: '100%',
            borderRadius: '10px',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        stepTitle: {
            marginTop: '16px',
            marginBottom: '20px',
            fontFamily: 'YuGothic',
            fontSize: '20px',
        },
        stepAlert: {
            marginBottom: '40px',
            fontFamily: 'YuGothicMedium',
            fontSize: '12px',
        },
        stepContent: {
            textAlign: 'center',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            // border: '2px solid #000',
            borderRadius: 10,
            boxShadow: theme.shadows[5],
            padding: 60,
            width: 750,
            height: 580,
            textAlign: 'center',
        },
        skillsTitle: {
            fontFamily: 'YuGothic',
            fontSize: 20,
            marginBottom: 20
        },
        skillsSubTitle: {
            fontFamily: 'YuGothic',
            fontSize: 16,
            float: 'left',
            marginLeft: 15,
        },
        formControl: {
            margin: theme.spacing(1),
            width: '100%',
        },
    }),
);

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
];

function getSteps() {
    return ['SNS Registration', 'Profile Info', 'Purpose of Use'];
}

function getStepContent(stepIndex: number) {
    switch (stepIndex) {
        // case 0:
        //     return 'SNS Registration';
        case 1:
            return 'Profile Info';
        case 2:
            return 'Purpose of Use';
        default:
            return 'Unknown stepIndex';
    }
}

export default function ProfileStep() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === steps.length - 1) {
            setOpen(true);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(1);
    };
    
    const [open, setOpen] = React.useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
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
    
    return (
        <>
            <Head>
                {(activeStep == 1) ? (
                    <title> Sign up - Profile Info</title>
                ) : (
                    <title> Sign up - Purpose of Use</title>
                )}
                <meta name='description' content='This is the Sign In/Sign Up page' />
            </Head>
            <div className={classes.root}>
                <div className='logo'>
                    <Image src='/images/logo.png' alt='Logo' width={105} height={30} />
                </div>
                <Stepper activeStep={activeStep} alternativeLabel className='customStepper'>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className={classes.stepContent}>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.stepTitle}>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.stepTitle}>{getStepContent(activeStep)}</Typography>
                            <Typography className={classes.stepAlert}>Can be changed later</Typography>
                            {(activeStep == 1) ? (
                                <ProfileInfo></ProfileInfo>
                            ) : (
                                <PurposeUse></PurposeUse>
                            )}
                            <div>
                                {/* <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.backButton}
                                >
                                    Back
                                </Button> */}

                                <div className='buttonGroup'>
                                    <CustomButton color='github' round className='stepNextButton' onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Start' : 'Next'}
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <Typography className={classes.skillsTitle}>Skills⚡</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.skillsSubTitle}>1. Select categories</Typography>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        multiple
                                        native
                                        value={personName}
                                        className='skillsSelect'
                                        onChange={handleChangeMultiple}
                                        inputProps={{
                                            id: 'select-multiple-native',
                                        }}
                                    >
                                        {names.map((name) => (
                                            <option key={name} value={name}>
                                            {name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography className={classes.skillsSubTitle}>2. Select skills</Typography>
                                <FormControl className={classes.formControl}>
                                    <Select
                                        multiple
                                        native
                                        value={personName}
                                        className='skillsSelect'
                                        onChange={handleChangeMultiple}
                                        inputProps={{
                                            id: 'select-multiple-native',
                                        }}
                                    >
                                        {names.map((name) => (
                                            <option key={name} value={name}>
                                            {name}
                                            </option>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}