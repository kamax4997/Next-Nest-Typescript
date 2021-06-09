import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Theme } from "@material-ui/core/styles";

import BadgeStyle from "../../../assets/jss/nextjs-material-kit/components/BadgeStyle";

const useStyles = makeStyles<Theme>(() => BadgeStyle as any);

export default function Badge(props) {
    const classes = useStyles();
    const { color, children } = props;
    return (
        <span className={classes.badge + " " + classes[color]}>{children}</span>
    );
}

Badge.defaultProps = {
    color: "gray"
};

Badge.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    children: PropTypes.node
};
