import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

const IconContainerTemplate = (props) => {
    const { classes, children } = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

IconContainerTemplate.propTypes = {
    children: PropTypes.any.isRequired,
}

export default withStyles(styles, { withTheme: true })(IconContainerTemplate)