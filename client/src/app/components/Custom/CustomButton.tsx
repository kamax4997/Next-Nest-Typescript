import React, { MouseEvent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
import Button from "@material-ui/core/Button";

// core components
import ButtonStyle from "../../../assets/jss/nextjs-material-kit/components/ButtonStyle";

type Props = {
    color?: string,
    round?: boolean,
    fullWidth?: boolean,
    disabled?: boolean,
    simple?: boolean,
    size?: string,
    block?: boolean,
    link?: string,
    justIcon?: boolean,
    className?: string,
    children?: React.ReactNode,
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement>) => void)
        | undefined;
}

const useStyles = makeStyles<Theme>(() => ButtonStyle as any);

const RegularButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
    const {
        color,
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        onClick,
        ...rest
    } = props;

//   const classes: PropsClasses = useStyles({} as StyleProps);
    const classes = useStyles();
    const btnClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className,
    });

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        onClick(e);
    };

    return (
        <Button {...rest} ref={ref} classes={{ root: btnClasses }} onClick={handleOnClick}>
            {children}
        </Button>
    );
});

RegularButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "transparent"
    ]),
    size: PropTypes.oneOf(["sm", "lg"]),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.string,
    justIcon: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
};

export default RegularButton;
