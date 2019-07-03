import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MUITextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import SearchIcon from '../../assets/images/search.svg';

const styles = theme => ({
    root:{
        width: '100%',
    },
    textField: {
        backgroundColor: '#015ba8',
        borderRadius: '5px',
        height: '33px',
    },
    textStyle: {
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontSize: '13px',
        fontWeight: 400,
        letterSpacing: '0.62px',
        lineHeight: '18px',
        paddingBottom: '28px'
    }
});

const SearchBar = (props) => {

    const { classes } = props;

    return (
        <MUITextField
            variant="filled"
            className={classes.root}
            InputProps={{
                className: classes.textField,
                disableUnderline:true,
                endAdornment: (
                    <InputAdornment position="end">
                      <img src={SearchIcon} />
                    </InputAdornment>
                )
            }}
            inputProps={{
                className: classes.textStyle
            }}
            placeholder={"Tell me what you want to do"}
        />
    );
};

export default withStyles(styles, { withTheme: true })(SearchBar);