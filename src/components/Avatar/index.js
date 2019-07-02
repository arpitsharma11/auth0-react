import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import clsx from 'clsx';


const styles = theme => ({
    avatar: {
        margin: 10,
        float: 'left'
    }

});

const defaultProps = {
};

const propTypes = {

};



const Avatar = (props) => {
    const {
        classes,
        rootClass,
        className,
        ...rest
    } = props

    return (
        <Avatar alt="Remy Sharp" src="../../assets/images/avatar.png"
            classes={{ root: clsx(rootClass, classes.avatar) }} />
    )
};
Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(Avatar);
