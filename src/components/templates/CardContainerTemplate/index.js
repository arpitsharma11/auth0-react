import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import IconContainer from '../../IconContainer';

import Grid from '@material-ui/core/Grid';
import serviceList from '../../../utils/serviceList.json'
import Cards from '../../Card'

const styles = theme => ({

    root: {
        flexGrow: 1,
        justifyContent: 'center'
    }
});



const IconContainerTemplate = (props) => {
    const { classes, children } = props;
    return (
        <Grid container
            className={classes.root}
        >
            {serviceList && serviceList.map((value, index) => (
                <Grid style={{ width: '43.7%', marginRight: '2.9%', marginTop: '1.9%' }} key={index} item>
                    <Cards title={value.title} src={value.icon} background={value.background} />
                </Grid>
            ))}
        </Grid>



    )
}

// IconContainerTemplate.propTypes = {
//     children: PropTypes.any.isRequired,
// }

export default withStyles(styles, { withTheme: true })(IconContainerTemplate)