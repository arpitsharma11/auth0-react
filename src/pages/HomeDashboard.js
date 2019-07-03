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
        marginLeft: '20px'
    },
    heading: {
        color: '#000000',
        //font-family: Roboto;
        fontSize: '17px',
        fontWeight: '900',
        letterSpacing: '1.2px',
        lineHeight: '22px'
    }
})



class HomeDashboard extends Component {

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Header/>
                <div className={classes.root} >
                    <Typography className={classes.heading} > Recently used services </Typography>
                    <IconContainerTemplate />
                    {/* <CardContainerTemplate /> */}
                    <Typography className={classes.heading} > Your alerts </Typography>
                    
                </div>
                <Footer activeState={1} />
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(HomeDashboard);
