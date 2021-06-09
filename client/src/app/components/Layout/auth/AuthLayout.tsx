import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import CustomButton from '../../Custom/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { AuthState, useAuth } from '../../../../utils/hooks/useAuth';

export default function Login() {
    const auth: AuthState = useAuth();
    // const [checkByFacebook] = useCheckMutation();
    const [error, setError] = useState('');

    const handleOnChange = (e) => {
        const { name } = e.target;
        // const user = { ...this.state.user }; // eslint-diable-line
        // user[name] = e.target.value;
        // this.setState({ user, error: {} });
    };

    const handleFacebook = async (): Promise<void> => {
        await auth.signInWithFacebook();
    };

    const handleTwitter = async (): Promise<void> => {
        await auth.signInWithTwitter();
    };

    const handleLinkedin = async (): Promise<void> => {
        // await auth.signInWithLinkedin();
    }
    
    return (
        <div className='ss'>
            <Head>
                <title> Sign Up/Sign In</title>
                <meta name='description' content='This is the Sign In/Sign Up page' />
            </Head>

            <div className='container'>
                <Card variant='elevation' className='card'>
                    <Image src='/images/logo.png' alt='Logo' width={105} height={30} />
                    <CardContent className='cardContent'>
                        <Typography color='textPrimary' align='center' className='ssText1' >
                            Registering as a new user with social account Sign up/Sign in
                        </Typography>
                        <Typography color='textPrimary' align='center' className='ssText2' >
                            By clicking on Sign up, you agree to the terms and conditions of that license.
                        </Typography>
                        <div className='buttonGroup'>
                            <CustomButton color='facebook' round onClick={ handleFacebook }>
                                <FontAwesomeIcon icon={faFacebook} className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                                <div className='socialText'>Facebook</div>
                            </CustomButton>
                            <br />
                            <CustomButton color='twitter' round onClick={ handleTwitter }>
                                <FontAwesomeIcon icon={faTwitter} className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                                <div className='socialText'>Twitter</div>
                            </CustomButton>
                            <br />
                            <CustomButton color='google' round onClick={ handleLinkedin }>
                                <FontAwesomeIcon icon={faLinkedinIn} className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                                <div className='socialText'>LinkedIn</div>
                            </CustomButton>
                        </div>
                        <Typography color='textPrimary' align='center' className='ssText3' style={{ marginTop: '20px' }} >
                            We won't post to SNS without your permission.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

// export default withAuth(Login, {loginRequired: false, logoutRequired: true});
// export default Login;
