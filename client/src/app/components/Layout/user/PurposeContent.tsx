import React from 'react';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import UserCard from './UserCard';
import Image from 'next/image';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            // padding: theme.spacing(2),
            textAlign: 'center',
            borderRadius: '10px',
            color: theme.palette.text.secondary,
        },
        seeMore: {
            margin: '40px 0px 40px 0px',
        }
    }),
);

export const PurposeContent = () => {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div>
            <div className='dashboardContent'>
                <div className='realtime'>
                    <div className='dashboardTitle'>Realtime Talk</div>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} />} label="Show yourself in Realtime Talk" labelPlacement="start" />
                    </FormGroup>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Button className={classes.seeMore}>See More</Button>
                </div>
            </div>
            <div className='recommend'>
                <div className='dashboardContent'>
                    <div className='dashboardTitle'>Recommend</div>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <br />
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <UserCard />
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};
