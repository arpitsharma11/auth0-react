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
        opacity: 0.6,
        color: '#000000',
        fontFamily: "Roboto Medium",
        fontSize: 11,
        letterSpacing: '0.52px',
        lineHeight: '13px',
        fontWeight: 600,
        transform: 'none'
    }
});

const defaultProps = {
};

const propTypes = {

};

const TextField = (props) => {
    const handleTextChange = event => {
        props.onFieldChange(props.name, event.target.value);
    }
    const {
        autoFocus,
        classes,
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
                root: clsx(textFieldClass, classes.TextField)
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