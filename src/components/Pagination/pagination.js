import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BasicPagination({postsPerPage, totalPosts, paginate}) {

  console.log("pp",postsPerPage);
  console.log('total', totalPosts);
  const classes = useStyles();

  const pageNumbers = [];

  for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++){
    pageNumbers.push(1);
  }

  console.log('pageNumbers', pageNumbers);

  return (
    <div className={classes.root}>
      {/* {pageNumbers.map(number => (
        <Pagination count={10} color="primary" />
      ))} */}
     
      <Pagination count={pageNumbers.length} color="primary" onChange ={()=> paginate()} />
      
    </div>
  );
}