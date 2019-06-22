import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';
import clsx from 'classnames';
const styles = theme => ({

    input: {
        color: theme.palette.common.main,
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
        fontSize: 11,
        color: '#000000',
        opacity: 0.22,
        letterSpacing: '0.48px',
        lineHeight: '13px'
    },
    textField: {
        width: 343
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
        className: textFieldClass,
        error,
        onChange,
        label,
        placeholder,
        required,
        type,
        defaultValue,
        maxLength,
        ...rest
    } = props;

    return (
        <MUITextField
            autoFocus={autoFocus}
            className={clsx(textFieldClass, classes.textField)}
            label={label}
            placeholder={placeholder}
            error={error}
            onChange={handleTextChange}
            placeholder={placeholder}
            required={required}
            type={type}
            defaultValue={defaultValue}
            fullWidth
            InputProps={{
                className: `${classes.input} `,
            }}
            InputLabelProps={{
                shrink: true,
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