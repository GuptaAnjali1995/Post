import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";

import Divider from '@material-ui/core/Divider';
//importing hooks





const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  console.log('props',props);

  
   


  return (
    <Card className={classes.root}>
      <CardActionArea>
     
        <CardContent>

          
          <Typography gutterBottom variant="h5" component="h2">
            {props.hit.title}
          </Typography>
         

          <Divider variant="middle" />
          <Typography variant="body1" color="textSecondary" component="p">
           CreatedAt: {props.hit.created_at}
          </Typography> 

          <Typography variant="body1" color="textSecondary" component="p">
           Author: {props.hit.author}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" textAlign ="right">
         <a href={props.hit.url}>Learn More</a> 
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
    title: PropTypes.string,
    img:PropTypes.string,
    cildren:PropTypes.node
  };
  
