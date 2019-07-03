import React from 'react';
import avatar from '../../assets/images/avatar.png';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({

});

const Logo = (props) => {
    return (
        <img src={avatar} />
    )
}


export default withStyles(styles, { withTheme: true })(Logo);