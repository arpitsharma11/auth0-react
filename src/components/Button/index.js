import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button'
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { ClassNames } from '@emotion/core';
import { P } from '@storybook/addon-info/dist/components/markdown';
const styles = theme => ({
    button:
    {
        borderRadius: 6,
        height: 31,
        // color: tjh,
        fontFamily: "Roboto Medium",
        letterSpacing: 1.06
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
        ...rest
    } = props
    // const btnSize = props.btnSize === 'large' ? classes.largeBtn : classes.smallBtn
    return (
        <MuiButton
            classes={
                {
                    root: clsx(rootClass, classes.button, color === 'primary' ? classes.primaryHover : classes.secondaryHover),
                    disabled: color === 'primary' ? classes.primaryDisabled : classes.secondaryDisabled
                }
            }
            color={color}
            {...rest}
        >
            Sign Up
</MuiButton>
    );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(Button);


