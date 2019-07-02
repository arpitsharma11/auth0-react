import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import Button from '../Button'

const styles = theme => ({
    card: {
        width: 333,
        border: '1px solid #dfd9d9',
        height: 110,
        backgroundColor: '#feffff',
        borderRadius: 5
    }
});

const defaultProps = {
};

const propTypes = {

};



const NoDataCards = (props) => {
    const {
        classes,
        rootClass,
        title,
        background,
        imageSource,
        text,
        ...rest
    } = props
    return (
        <Card className={classes.card} >
            <CardContent style={{ marginTop: 10 }}>
                <img style={{ float: 'left' }} src={require('../../assets/images/bigBills.svg')} />
                <span style={{ fontSize: 12, width: 117, float: 'left', marginLeft: 33 }}>{text}</span>
                <Button style={{ float: 'right' }} color="primary" variant="outlined" title="Upload" />
            </CardContent>
        </Card>
    );
};

NoDataCards.defaultProps = defaultProps;
NoDataCards.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(NoDataCards);
