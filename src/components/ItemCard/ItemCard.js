import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'
import React from 'react';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '15px',
    textAlign: 'center'
  },
});

const ItemCard = (props) => {
  const classes = useStyles();
  const {name, price, imageURL, shortDescription} = props.item;
  return (
    <Grid item md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="350"
            image={imageURL}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortDescription}
            </Typography>
            <Typography gutterBottom variant="h6" component="h3">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ItemCard;