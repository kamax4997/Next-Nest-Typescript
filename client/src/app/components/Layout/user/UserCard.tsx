import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagramSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
// core components
import Button from '../../Custom/CustomButton';
import GridContainer from '../../Custom/GridContainer';
import GridItem from '../../Custom/GridItem';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Image from 'next/image';
import CustomButton from '../../Custom/CustomButton';

// import NavPills from "components/NavPills/NavPills.js";
// import Parallax from "components/Parallax/Parallax.js";

// import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
// import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from '../../../../assets/jss/nextjs-material-kit/ProfileCardStyle';
import { Typography } from "@material-ui/core";

// const useStyles = makeStyles(styles);
const useStyles = makeStyles<Theme>(() => styles as any);

export default function ProfilePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
        <div>
            <Image src='/images/profilebg.jpg' alt='Profile Background' width={280} height={120} className={classes.imgRounded} />
            {/* <Header color="transparent" brand="NextJS Material Kit" rightLinks={<HeaderLinks />} fixed changeColorOnScroll={{ height: 200, color: "white" }} {...rest} /> */}
            {/* <Parallax small filter image={require('../../../../../public/images/profilebg.jpg')} /> */}
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div>
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                                <div className={classes.profile}>
                                    <div>
                                        <img src='/images/faces/christian.jpg' alt="..." className={imageClasses} />
                                        <br />
                                        <Chip variant="default" size="small" className={classes.statusChip} avatar={<div className={classes.statusIcon}></div>} label="Online" onClick={handleClick} />
                                    </div>
                                    <div className={classes.name}>
                                        <div className={classes.title}>Christian Louboutin</div>
                                        <br />
                                        <Button justIcon link className={classes.margin5}>
                                            <FontAwesomeIcon icon={faFacebook} color='#1877F2' className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <FontAwesomeIcon icon={faTwitter} color='#1DA1F2' className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                                        </Button>
                                        <Button justIcon link className={classes.margin5}>
                                            <FontAwesomeIcon icon={faInstagram} id="instagram" className='flex align-middle text-center font-extrabold text-1xl pb-1' size='lg' />
                                        </Button>
                                    </div>
                                </div>
                            </GridItem>
                            <GridItem>
                                <div className={classes.activityArea}>
                                    Tokyo
                                </div>
                                <div className={classes.workInfo}>
                                    CEO / def Inc
                                </div>
                            </GridItem>
                            <div className={classes.skillPart}>
                                <Typography className={classes.skillType}>
                                    Skills: Engineering
                                </Typography>
                                <div className={classes.skillsList}>
                                    <Typography className={classes.skillItem}>Product Manager (PM)</Typography>
                                    <Typography className={classes.skillItem}>Developer (iOS)</Typography>
                                </div>
                            </div>
                            <GridItem>
                                <CustomButton round color="github" className={classes.talkButton}>Talk Now</CustomButton>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
}
