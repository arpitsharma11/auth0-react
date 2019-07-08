import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
    badgeColor: {
        backgroundColor: '#DB0032'
    },
    caption: {
        width: 45,
        height: 34,
        paddingTop: '9px',
        color: '#000000',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: 13,
        letterSpacing: 0.62,
        fontFamily: 'Roboto'
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
            <Badge
                classes={{ colorPrimary: classes.badgeColor }}
                badgeContent={notifications}
                color="primary">
                <img className={classes.icon} src={bgImage} alt="yo" />
                <img style={{
                    marginLeft: '-40px',
                    marginTop: '7px'
                }} src={image} alt="" />
            </Badge>
            <Typography className={classes.caption}>{caption}</Typography>
        </div>
    )
};
IconContainer.defaultProps = defaultProps;
IconContainer.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(IconContainer);
