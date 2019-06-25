import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';
import clsx from 'classnames';
const styles = theme => ({

    input: {
        color: theme.palette.common.main,
        fontSize: 13,
        lineHeight: 13,
        letterSpacing: 0.47
    },
    // inValid: {
    //     color: theme.palette.error.main,
    // },
    valid: {
        color: theme.palette.secondary.main,
    },
    label: {
        //add font and color styles
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#000000',
        opacity: 0.6,
        letterSpacing: '0.48px',
        lineHeight: '13px',
        transform: 'none'
    },
    largeTextField: {
        width: 353
    },
    smallTextField: {
        width: 253
    }


});

const defaultProps = {
};

const propTypes = {

};

const TextField = (props) => {
    const handleTextChange = event => {
        console.log(event.target.value);
        props.onFieldChange(props.name, event.target.value);
    }
    const {
        autoFocus,
        classes,
        // className: textFieldClass,
        error,
        onChange,
        label,
        placeholder,
        required,
        type,
        fullWidth,
        defaultValue,
        maxLength,
        textFieldClass,
        ...rest
    } = props;

    return (
        <MUITextField
            autoFocus={autoFocus}
            classes={{
                root: clsx(textFieldClass, classes.TextField),
                // fullWidth: fullWidth ? classes.largeTextField : classes.smallTextField
            }}
            label={label}
            placeholder={placeholder}
            error={error}
            onChange={handleTextChange}
            placeholder={placeholder}
            required={required}
            type={type}
            defaultValue={defaultValue}
            InputProps={{
                className: `${classes.input} `,
            }}
            InputLabelProps={{
                // shrink: true,
                classes: {
                    root: classes.label
                }
            }}
            {...rest}
        />
    );
};
TextField.defaultProps = defaultProps;
TextField.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TextField);