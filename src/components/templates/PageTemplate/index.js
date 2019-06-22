import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';

import styled from 'styled-components'
import { size } from 'styled-theme'
import { classes } from 'istanbul-lib-coverage';

const styles = theme => ({

    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '80vh',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

const PageTemplate = (props) => {
    const { classes, children } = props;
    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

PageTemplate.propTypes = {
    header: PropTypes.node.isRequired,
    hero: PropTypes.node,
    sponsor: PropTypes.node,
    footer: PropTypes.node.isRequired,
    children: PropTypes.any.isRequired,
}

export default withStyles(styles, { withTheme: true })(PageTemplate)