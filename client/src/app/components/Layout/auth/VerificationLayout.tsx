import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
import Image from 'next/image';
import CustomButton from '../../Custom/CustomButton';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import validator from 'validator';
import { useSendVerificationEmailMutation } from '../../../../../src/generated/graphql';

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
        width: 'auto',
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

export default function Verification() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [sendEmailVerification] = useSendVerificationEmailMutation();

    const sendVerificationEmail = async () => {
        // const response = await sendEmailVerification({
        //     variables: {
        //         input: email,
        //     },
        //     update: (cache, { data }) => {
        //         cache.writeQuery<MeQuery>({
        //             query: MeDocument,
        //             data: {
        //             __  typename: 'Query',
        //             me: { user: data?.login.user },
        //             },
        //         });
        //         cache.evict({ fieldName: 'products:{}' });
        //     },
        // });
        setEmailError('An email has send to hanna.nagata@gmail.com. Please complete the registration from the URL in the body of the email within 24 hours.');
    }

    useEffect(() => {
        console.log("effect: " + email);
    }, [email])

    const handleInput = (e) => {
        setEmail(e.target.value);

        if (validator.isEmail(e.target.value)) {
            setIsValidEmail(false);
            setEmailError('');
        } else {
            setIsValidEmail(true);
            setEmailError('Please input valid email address!');
        }
    }

    return (
        <div className='ss'>
            <Head>
                <title> Sign up - Verification mail</title>
                <meta name='description' content='This is the Sign In/Sign Up page' />
            </Head>

            <div className='container'>
                <Card variant='elevation' className='card'>
                    <Image src='/images/logo.png' alt='Logo' width={105} height={30} />
                    <CardContent className='cardContent'>
                        <Typography color='textPrimary' align='center' className='ssText1' >
                            Please enter your e-mail address
                        </Typography>
                        <FormControl className='emailForm'>
                            <BootstrapInput id="bootstrap-input" className='emailInput' type='email' value={email} onChange={(e) => handleInput(e)} />
                            <Typography color='error' align='center' className='emailValidationError' >
                                {emailError}
                            </Typography>
                        </FormControl>
                        <div className='buttonGroup'>
                            <CustomButton color='github' round className='sendVerificationEmailButton' onClick={ sendVerificationEmail } disabled={isValidEmail}>
                                <div className='sendVerificationEmailText'>Send Verification Email</div>
                            </CustomButton>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
