import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import clsx from 'clsx';

const styles = theme => ({
    button:
    {
        borderRadius: 6,

    },
    mediumBtn: {
        height: 31,
        width: 225
    },
    smallBtn: {
        height: 36,
        width: 154
    },
    primaryHover: {
        "&:hover": {
            opacity: 1,
            backgroundColor: theme.palette.primary.hover
        },
    },
    secondaryHover: {
        "&:hover": {
            opacity: 1,
            backgroundColor: '#004987'
        },
    },
    primaryDisabled: {
        backgroundColor: '#FFCE7E'

    },
    secondaryDisabled: {
        backgroundColor: '#E4E4E4'
    },
    btnLabel: {
        textTransform: 'none',
        fontFamily: "Roboto Medium",
        letterSpacing: 1.06,
        fontSize: 15,
        lineHeight: 0.6
    }

});

const defaultProps = {
};

const propTypes = {

};



const Button = (props) => {
    const {
        classes,
        rootClass,
        color,
        title,
        ...rest
    } = props

    return (
        <MuiButton
            classes={
                {
                    root: clsx(rootClass, classes.button, color === 'primary' ? classes.primaryHover : classes.secondaryHover),
                    disabled: color === 'primary' ? classes.primaryDisabled : classes.secondaryDisabled,
                    sizeLarge: classes.mediumBtn,
                    sizeSmall: classes.smallBtn,
                    label: classes.btnLabel
                }
            }
            color={color}
            {...rest}
        >
            {title}
        </MuiButton>
    );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(Button);
