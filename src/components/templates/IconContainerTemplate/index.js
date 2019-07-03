import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconContainer from '../../IconContainer';

import Grid from '@material-ui/core/Grid';
import data from '../../../utils/constants.json'
console.log('data', data);

const styles = theme => ({

    root: {
        flexGrow: 1
    }


});



const IconContainerTemplate = (props) => {
    const { classes, children } = props;
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item sm={6} md={6} lg={6}>
                <Grid container
                    justify="center"
                    spacing={2}>
                    {data && data.map(value => (
                        <Grid key={value} item>
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