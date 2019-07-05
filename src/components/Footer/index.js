import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Route, withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        bottom: 0,
        position: 'fixed'
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
        history,
        ...rest
    } = props

    const handleClick = (event, newValue) => {
        switch (newValue) {
            case 0:
                history.push('/home')
                break;
            case 1:
                history.push('/services')
                break;
            case 2:
                console.log("is")
                break;
            case 3:
                console.log("it")
                break;
        }
    }

    return (
        <BottomNavigation
            onChange={handleClick}
            showLabels
            className={classes.root}
        >
            {activeState === 0 ?
                <BottomNavigationAction label="Home" classes={{ label: classes.textActive }} icon={<img src={require("../../assets/images/home.svg")} />} /> :
                <BottomNavigationAction label="Home" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/home_light.svg")} />} />}
            {activeState === 1 ?
                <BottomNavigationAction label="Services" className={classes.textActive} icon={<img src={require("../../assets/images/services.svg")} />} /> :
                <BottomNavigationAction label="Services" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/services_light.svg")} />} />}
            {activeState === 2 ?
                <BottomNavigationAction label="Circles" className={classes.textActive} icon={<img src={require("../../assets/images/home.svg")} />} /> :
                <BottomNavigationAction label="Circles" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/circles_light.svg")} />} />}
            {activeState === 3 ?
                <BottomNavigationAction label="Utilities" className={classes.textActive} icon={<img src={require("../../assets/images/utilities.svg")} />} /> :
                <BottomNavigationAction label="Utilities" classes={{ label: classes.textInactive }} icon={<img src={require("../../assets/images/utilities_light.svg")} />} />}
        </BottomNavigation>
    )
}

Footer.defaultProps = defaultProps;
Footer.propTypes = propTypes;

export default withRouter(withStyles(styles, { withTheme: true })(Footer));