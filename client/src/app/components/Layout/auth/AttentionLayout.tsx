import React, { useState } from 'react';
import Head from 'next/head';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";
import Typography from '@material-ui/core/Typography';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CustomButton from '../../Custom/CustomButton';
import styles from '../../../../assets/jss/nextjs-material-kit/BasicsStyle'
import { useRouter } from 'next/router';

export default function Attention() {
    const router = useRouter();
    const classes = styles();
    const [checked1, toggleChecked1] = useState(true);
    const [checked2, toggleChecked2] = useState(true);
    const [checked3, toggleChecked3] = useState(true);

    const Signup = () => {
        router.push('/auth/verification');
    }

    const Redirect = () => {
        router.push('/');
    }

    return (
        <div className='ss'>
            <Head>
                <title> Sign up - Attention </title>
                <meta name='description' content='This is the Sign In/Sign Up page' />
            </Head>

            <div className='container'>
                <Card variant='elevation' className='card'>
                    <CardContent className='attentionContent'>
                        <Typography color='textPrimary' align='center' className='ssText1' >
                            We don't accept using any purpose of below
                        </Typography>
                        <div className={classes.checkboxArea}>
                            <div className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            tabIndex={-1}
                                            onClick={() => toggleChecked1(!checked1)}
                                            checked={checked1}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Using for dating purpose"
                                />
                            </div>
                            <div className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            tabIndex={-1}
                                            onClick={() => toggleChecked2(!checked2)}
                                            checked={checked2}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Using for one sided business purpose"
                                />
                            </div>
                            <div className={classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            tabIndex={-1}
                                            onClick={() => toggleChecked3(!checked3)}
                                            checked={checked3}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                        />
                                    }
                                    classes={{ label: classes.label, root: classes.labelRoot }}
                                    label="Using for network business /MLM/religion purpose etc"
                                />
                            </div>
                        </div>
                        <Typography color='textPrimary' align='center' className='ssText2' >
                            ※If you violate the regulations more than a certain number of times, your account will be stop.
                        </Typography>
                        <div className='buttonGroup'>
                            <CustomButton color="github" round className='signupButton' onClick={ Signup } disabled={!(checked1 && checked2 && checked3)}>Sign up</CustomButton>
                        </div>
                        <Typography color='textPrimary' align='center' className='ssText4' onClick={ Redirect } >
                            Cancel
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
