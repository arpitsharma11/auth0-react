import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconContainer from '../../IconContainer';

import Grid from '@material-ui/core/Grid';
import data from '../../../utils/constants.json'
console.log('data', data);

const styles = theme => ({

    root: {
        flexGrow: 1,
        maxWidth: '100%'
    },
    icon: {
        marginRight: '38px'
    }

});



const IconContainerTemplate = (props) => {
    const { classes, children } = props;
    return (
        <Grid container className={classes.root}>
            <Grid item xs={8}>
                <Grid container
                    justify="center">
                    {data && data.map(value => (
                        <Grid key={value} className={classes.icon} item>
                            <IconContainer caption={value.caption} bgImage={value.bgImage} image={value.image} />
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