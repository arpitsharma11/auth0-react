import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'classnames';

import WarningIcon from '../../assets/images/exclamation-sign-in-a-circle.png';
import ShowPasswordIcon from '../../assets/images/password_show.svg';


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
    errorHelper: {
        color: '#E02020',
        fontFamily: 'Roboto Medium',
        fontSize: '11px',
        letterSpacing: '0.52px',
        lineHeight: '13px'
    },
    noHelper: { display: 'none' }
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
        errorMsg,
        onChange,
        label,
        placeholder,
        required,
        type,
        fullWidth,
        defaultValue,
        maxLength,
        textFieldClass,
        showPassword,
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
                endAdornment: (
                    props.showPassword ? 
                        error ?
                            <React.Fragment>
                                <InputAdornment position="end">
                                    <img src={WarningIcon} />
                                </InputAdornment>
                            </React.Fragment> :
                            <InputAdornment position="end">
                                <img onClick={ () => props.onShowPassword() } src={ShowPasswordIcon} />
                            </InputAdornment>
                        :
                        error ?
                        <InputAdornment position="end">
                            <img src={WarningIcon} />
                        </InputAdornment>: null
                )
            }}
             InputLabelProps={{
                classes: {
                    root: classes.label
                }
            }}
            FormHelperTextProps={{
                classes: {
                    root:  error ? classes.errorHelper : classes.noHelper
                }
            }}
            helperText={ errorMsg ? errorMsg : '' }
            {...rest}
        />
    );
};
TextField.defaultProps = defaultProps;
TextField.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(TextField);