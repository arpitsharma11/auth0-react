import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardContainerTemplate from '../components/templates/CardContainerTemplate';

const styles = theme => ({
    root: {
        marginTop: '115px',
        marginBottom: '74px',
        marginLeft: '5.1%'
    }
})

class ServicesDashboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.root} >
                    <CardContainerTemplate />
                </div>
                <Footer activeState={1} />
            </div>
        )
    }
}
export default withStyles(styles, { withTheme: true })(ServicesDashboard);
