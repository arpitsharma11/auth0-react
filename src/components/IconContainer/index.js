import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button';
import clsx from 'clsx';

const styles = theme => ({


});

const defaultProps = {
};

const propTypes = {

};



const IconContainer = (props) => {
    const {
        classes,
        rootClass,
        className,
        src,
        alt,
        caption,
        ...rest
    } = props

    return (
        <div>
            <img className={classes.icon} src="../../assets/images/yellow.svg" alt="" />
            <Typography>{caption}</Typography>
        </div>
    )
};
IconContainer.defaultProps = defaultProps;
IconContainer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(IconContainer);
