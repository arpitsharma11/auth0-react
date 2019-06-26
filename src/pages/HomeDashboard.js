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

const styles = theme => ({})



class HomeDashboard extends Component {

    render() {


        return (
            
             <IconContainerTemplate>
                 <IconContainer caption="Award Points" />
                 <IconContainer caption="hello" />
                 <IconContainer caption="holaa" />
                 <IconContainer caption="yess" />
             </IconContainerTemplate>


        )
    }
}
export default withStyles(styles, { withTheme: true })(HomeDashboard);
