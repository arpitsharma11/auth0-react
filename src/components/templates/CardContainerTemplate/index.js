import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconContainer from '../../IconContainer';

import Grid from '@material-ui/core/Grid';
import serviceList from '../../../utils/serviceList.json'
import MuiCard from '../../Card'

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingLeft: 29,
        paddingRight: 14
    }
});

const CardContainerTemplate = (props) => {
    const { classes, children } = props;
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} >
                <Grid container
                    justify="center"
                    spacing={1}>
                    {serviceList && serviceList.map(value => (
                        <Grid key={value} xs={6} sm={6} item>
                            <MuiCard title={value.title} src={value.icon} background={value.background} />
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

export default withStyles(styles, { withTheme: true })(CardContainerTemplate)