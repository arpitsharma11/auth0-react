import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../utils/Theme';
import Button from '../components/Button';
import TextField from '../components/TextField'
import PageTemplate from '../components/templates/PageTemplate';
import Logo from '../components/Logo'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconContainerTemplate from '../components/templates/IconContainerTemplate';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NoDataCards from '../components/NoDataCards';
import alert1 from '../assets/images/bill_pay.svg';
import alert2 from '../assets/images/ribbon.svg';
import alert3 from '../assets/images/calendar.svg';
import * as actions from '../actions';


const styles = theme => ({
    root: {
        marginTop: '115px',
        marginBottom: '74px',
        marginLeft: '20px',
        marginRight: '20px'
    },
    heading: {
        color: '#000000',
        fontSize: '17px',
        fontWeight: '900',
        letterSpacing: '1.2px',
        lineHeight: '22px',
        marginBottom: '7px'
    },
    helper: {
        opacity: 0.56,
        color: '#000000',
        fontSize: '12px',
        fontWeight: 300,
        letterSpacing: '0.62px',
        lineHeight: '18px',
        marginBottom: '16px'
    },
    subHeading: {
        color: '#000000',
        fontSize: '15px',
        fontWeight: 400,
        letterSpacing: '1.06px',
        lineHeight: '20px'
    },
    line: {
        borderRadius: '5px 0 0',
        backgroundColor: '#fbfbfb',
        marginBottom: '20px',
        borderWidth: '0.4px'
    },
    card: {
        marginBottom: '20px'
    },
    cardContainer: {
        marginTop: '24px'
    },
    iconContainer: {
        marginLeft: '16px',
        marginBottom: '25px'
    },
    alertContainer: {
        marginLeft: '9px',
        marginBottom: '25px',
        marginTop: '29px'
    },
    alertText: {
        color: '#737373',
        fontFamily: 'Roboto Medium',
        fontSize: 15,
        fontWeight: 500,
        maxWidth: 267,
        maxHeight: 32,
        letterSpacing: 1.06,
    }
})


class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newUser: false
        }
    }

    render() {

        const { classes, auth } = this.props;
        const { newUser } = this.state;

        return (
            <div>
                <Header />
                <div className={classes.root} >
                    {newUser ?
                        <React.Fragment>
                            <Typography className={classes.heading} > Hi  </Typography>
                            <Typography className={classes.helper} > Here are the services you can use</Typography>
                        </React.Fragment> :
                        <Typography className={classes.heading} style={newUser ? null : { marginBottom: '41px' }} > Recently used services </Typography>
                    }
                    <div className={classes.iconContainer} >
                        <IconContainerTemplate /></div>
                    <hr className={classes.line} />
                    {newUser ?
                        <React.Fragment>
                            <Typography className={classes.subHeading} >Let’s get you started</Typography>
                            <div className={classes.cardContainer} >
                                <div className={classes.card} ><NoDataCards text="Stay on top of your medical bills" src={require('../assets/images/bigBills.svg')} /></div>
                                <div className={classes.card} ><NoDataCards text="Refer and earn points" src={require('../assets/images/colleagues.svg')} /></div>
                            </div>
                        </React.Fragment> :
                        <React.Fragment>
                            <Typography className={classes.heading} > Your alerts </Typography>
                            <div className={classes.alertContainer} >
                                <img style={{ float: 'left', marginRight: '10px' }} src={alert1} />
                                <Typography className={classes.alertText}>Bill is <b>due</b> by <b>9 May, 2019</b></Typography>
                            </div>
                            <div className={classes.alertContainer} >
                                <img style={{ float: 'left', marginRight: '10px' }} src={alert2} />
                                <Typography className={classes.alertText}>Congrats!You earned <b>445 MPowered Award Points</b></Typography>
                            </div>
                            <div className={classes.alertContainer} >
                                <img style={{ float: 'left', marginRight: '10px' }} src={alert3} />
                                <Typography className={classes.alertText}>You have an appointment with <b>Dr.Bill James</b> on <b>15 May,2019</b></Typography>
                            </div>
                        </React.Fragment>
                    }
                </div>
                <Footer activeState={0} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default compose(withStyles(styles, { withTheme: true }), connect(mapStateToProps, actions))(Test);
