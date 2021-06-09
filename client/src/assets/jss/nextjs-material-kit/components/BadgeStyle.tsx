import {
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor
} from "../../NextjsMaterialKit.js";
  
const BadgeStyle = {
    badge: {
        marginRight: "3px",
        borderRadius: "2px",
        padding: "5px 2px",
        width: "40px",
        // textTransform: "uppercase",
        fontSize: "10px",
        fontWeight: "500",
        lineHeight: "1",
        height: "fit-content",
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        display: "inline-block"
    },
    primary: {
        backgroundColor: primaryColor
    },
    warning: {
        backgroundColor: warningColor
    },
    danger: {
        backgroundColor: dangerColor
    },
    success: {
        backgroundColor: successColor
    },
    info: {
        backgroundColor: infoColor
    },
    rose: {
        backgroundColor: roseColor
    },
    gray: {
        backgroundColor: "#6c757d"
    }
};
  
export default BadgeStyle;
  