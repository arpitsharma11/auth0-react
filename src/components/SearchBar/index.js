import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        height:33
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
});

const SearchBar = (props) => {
    const {
        classes,
        rootClass,
        className,
        ...rest
    } = props


    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'Search Google Maps' }}
            />
            <IconButton className={classes.iconButton} aria-label="Search">
                <SearchIcon />
            </IconButton>
        </Paper >
    )
}


export default withStyles(styles, { withTheme: true })(SearchBar);