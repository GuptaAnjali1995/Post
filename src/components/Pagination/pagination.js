import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { Button } from '@material-ui/core';

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
    pageNumbers.push(i);
  }

  console.log('pageNumbers', pageNumbers);

  return (
    // 
    <nav>
      
        {pageNumbers.map(number =>(
          <Button key ={number} onClick={()=> paginate(number)}>
            <a>{number}</a>
          </Button>
        ))}
      
    </nav>
  );
}