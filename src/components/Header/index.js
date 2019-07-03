import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '../Avatar/index';
import SearchBar from '../SearchBar/index';
import Scan from '../../assets/images/scan.svg';

const styles = theme => ({
    root: {
        height: '91px',
        backgroundColor: '#004987',
        display: 'flex'
    },
    avatar: {
        width: '43px',
        //height: '50px',
        marginLeft: '8px',
        marginRight: '5px',
        marginTop: '44px'
       // float: 'left',
    },
    searchBar: {
        //float: 'left',
        flexGrow: 100,
        marginTop: '44px',
    },
    scanImage: {
        width: '24px',
        height: '23px',
        marginTop: '51px',
        marginRight: '6px',
        marginLeft: '8px'
        //float: 'right'
    }
});

const Header = (props) => {

    const { classes } = props;

    return (
        <div className={classes.root} >
            <div className={classes.avatar} ><Avatar /></div>
            <div className={classes.searchBar} ><SearchBar/> </div>
            <img className={classes.scanImage} src={Scan} />
        </div>
    )
}


export default withStyles(styles, { withTheme: true })(Header);