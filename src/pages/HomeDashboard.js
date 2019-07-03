import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/Theme';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '../components/TextField'
import PageTemplate from '../components/templates/PageTemplate';
import Logo from '../components/Logo'
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconContainer from '../components/IconContainer';
import IconContainerTemplate from '../components/templates/IconContainerTemplate';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Cards from '../components/Card'
import CardContainerTemplate from '../components/templates/CardContainerTemplate';
import NoDataCards from '../components/NoDataCards';


const styles = theme => ({
    root:{
        marginTop: '24px',
        marginLeft: '20px',
        marginRight: '20px'
    },
    heading: {
        color: '#000000',
        //font-family: Roboto;
        fontSize: '17px',
        fontWeight: '900',
        letterSpacing: '1.2px',
        lineHeight: '22px',
        marginBottom: '7px'
    },
    helper: {
        opacity: 0.56,
        color: '#000000',
        fontFamily: "Roboto Light",
        fontSize: '13px',
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
        marginBottom: '20px'
    },
    card: {
        marginBottom: '20px'
    },
    cardContainer: {
        marginTop: '24px'
    },
    iconContainer: {
        marginBottom: '25px'
    }
})



class HomeDashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            newUser: true
        }
    }

    render() {

        const { classes } = this.props;
        const { newUser } = this.state;

        return (
            <div>
                <Header/>
                <div className={classes.root} >
                    { newUser ? 
                        <React.Fragment>
                            <Typography className={classes.heading} > Hi Robert </Typography>
                            <Typography className={classes.helper} > Here are the services you can use </Typography>
                        </React.Fragment> :
                        <Typography className={classes.heading} > Recently used services </Typography>
                    }
                    <div>
                    <IconContainerTemplate /></div>
                    <hr className={classes.line} />
                    { newUser ? 
                        <Typography className={classes.subHeading} >Let’s get you started</Typography>:
                        <Typography className={classes.heading} > Your alerts </Typography>
                    }
                    <div className={classes.cardContainer} >
                        <div className={classes.card} ><NoDataCards text="Stay on top of your medical bills" src={require('../assets/images/bigBills.svg')} /></div>
                        <div className={classes.card} ><NoDataCards text="Refer and earn points" src={require('../assets/images/colleagues.svg')}   /></div>
                    </div>
                </div>
                <Footer activeState={1} />
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(HomeDashboard);
