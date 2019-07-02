import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import SearchBar from '../SearchBar';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({


});

const defaultProps = {
};

const propTypes = {

};



const Header = (props) => {
    const {
        classes,
        rootClass,
        className,
        activeState,
        ...rest
    } = props


    return (
        <div style={{
            height: 91, width: '100%', backgroundColor: '#004987'
        }}>
            <Avatar rootClass={{ float: 'left' }} />
            <SearchBar />
            <img src="../../assets/images/home.svg" style={{ float: 'right' }} />
        </div>


    )
}

Header.defaultProps = defaultProps;
Header.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(Header);