import React from 'react';
import logo from '../../assets/images/logo.png';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

const Logo = (props) => {
    return (
        <img src={logo} />
    )
}


export default withStyles(styles, { withTheme: true })(Logo);