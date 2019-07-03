import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = theme => ({
    root: {
        width: '100%',
        bottom: 0,
        position: 'absolute'
        //color: '#004987'
    },
    textActive: {
        color: '#004987',
        fontWeight: 550
    },
    textInactive: {
        color: '#cbcbca',
        fontWeight: 550
    }

});

const defaultProps = {
};

const propTypes = {

};



const Footer = (props) => {
    const {
        classes,
        rootClass,
        className,
        activeState,
        ...rest
    } = props


    return (
        <BottomNavigation
            // value={value}
            // onChange={(event, newValue) => {
            //     setValue(newValue);
            // }}
            showLabels
            className={classes.root}
            classes={{ root: classes }}
        >
            {activeState === 0 ?
                <BottomNavigationAction label="Home" classes={{ label: classes.textActive }} icon={<img src={require("../../assets/images/home.svg")} />} /> :
                <BottomNavigationAction label="Home" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/home_light.svg")} />} />}
            {activeState === 1 ?
                <BottomNavigationAction label="Services" className={classes.textActive} icon={<img src={require("../../assets/images/home.svg")} />} /> :
                <BottomNavigationAction label="Services" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/home_light.svg")} />} />}
            {activeState === 2 ?
                <BottomNavigationAction label="Circles" className={classes.textActive} icon={<img src={require("../../assets/images/home.svg")} />} /> :
                <BottomNavigationAction label="Circles" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/circles_light.svg")} />} />}
            {activeState === 3 ?
                <BottomNavigationAction label="Utilities" className={classes.textActive} icon={<img src={require("../../assets/images/home.svg")} />} /> :
                <BottomNavigationAction label="Utilities" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/utilities_light.svg")} />} />}

        </BottomNavigation>
    )
}

Footer.defaultProps = defaultProps;
Footer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(Footer);