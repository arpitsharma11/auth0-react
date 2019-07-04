import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import a from '../../'

const styles = theme => ({
    card: {
        width: '90%',
        height: 66,
        borderRadius: 7,
        backgroundColor: '#00a0df'
    }
});

const defaultProps = {
};

const propTypes = {

};



const Cards = (props) => {
    const {
        classes,
        rootClass,
        title,
        background,
        src,
        ...rest
    } = props
    return (
        <Card className={classes.card} style={{ backgroundColor: background }}>
            <CardContent>
                <span>
                    <Typography color="textSecondary" style={{ float: 'left', width: 67, color: '#fff', fontSize: 13, paddingTop: 4 }}>
                        {title}
                    </Typography>
                    <img style={{ float: 'right' }} src={src} />
                </span>
            </CardContent>
        </Card>
    );
};

Cards.defaultProps = defaultProps;
Cards.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(Cards);
