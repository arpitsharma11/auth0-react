import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    card: {
        width: '100%',
        height: 66,
        borderRadius: 7,
        backgroundColor: '#00a0df'
    },
    title:{
         float: 'left',
          width: 67, 
          color: '#fff',
        fontSize: 13,
        paddingTop: 4,
        fontWeight:600
    },
    img:{
        float:'right'
    }
});

const defaultProps = {
};

const propTypes = {

};



const MuiCard = (props) => {
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
                    <Typography color="textSecondary" className={classes.title} >
                        {title}
                    </Typography>
                    <img className={classes.img} src={src} />
                </span>
            </CardContent>
        </Card>
    );
};

MuiCard.defaultProps = defaultProps;
MuiCard.propTypes = propTypes;

export default withStyles(styles, { withTheme: true })(MuiCard);
