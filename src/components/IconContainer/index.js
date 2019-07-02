import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button';

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
        bgImage,
        image,
        ...rest
    } = props

    return (
        <div>

            <img className={classes.icon} src={bgImage} alt="yo" />
            <img style={{ marginLeft: '-41px' }} src={image} alt="" />
            <Typography style={{
                width: 45, height: 34, color: '#000000', fontWeight: 500, textAlign: 'center', fontSize: 13
            }}>{caption}</Typography>
        </div>
    )
};
IconContainer.defaultProps = defaultProps;
IconContainer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(IconContainer);
