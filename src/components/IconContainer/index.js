import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
    badgeColor: {
        backgroundColor: '#DB0032'
    }

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
        notifications,
        ...rest
    } = props

    return (
        <div>
            <Badge classes={{ colorPrimary: classes.badgeColor }} badgeContent={notifications} color="primary">
                <img className={classes.icon} src={bgImage} alt="yo" />
                <img style={{ marginLeft: '-41px' }} src={image} alt="" />
            </Badge>
            <Typography style={{
                width: 45, height: 34, color: '#000000', fontWeight: 500, textAlign: 'center', fontSize: 13
            }}>{caption}</Typography>
        </div>
    )
};
IconContainer.defaultProps = defaultProps;
IconContainer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(IconContainer);
