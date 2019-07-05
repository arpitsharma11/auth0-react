import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconContainer from '../../IconContainer';

import Grid from '@material-ui/core/Grid';
import serviceList from '../../../utils/serviceList.json'
import Cards from '../../Card'

const styles = theme => ({

    root: {
        flexGrow: 1
    }
});



const IconContainerTemplate = (props) => {
    const { classes, children } = props;
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container
                    justify="center">
                    {serviceList && serviceList.map(value => (
                        <Grid style={{paddingRight : '2.9%',paddingBottom: '1.9%'}} key={value} item>
                            <Cards title={value.title} src={value.icon} background={value.background} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>

    )
}

// IconContainerTemplate.propTypes = {
//     children: PropTypes.any.isRequired,
// }

export default withStyles(styles, { withTheme: true })(IconContainerTemplate)