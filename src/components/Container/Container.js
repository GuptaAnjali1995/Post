import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card';
import Pagination from '../Pagination/pagination';
//importing Custom Hooks
import {useFetch} from '../hooks/Fetch';
import {useState}  from 'react';



export default function Container1() {



     
  const res = useFetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0", {});

  console.log('res', res);
  console.log('res', res.response);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  
  if (!res.response) {
    return <div>Loading...</div>
  }


  const data = res.response;

  console.log(res);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;  
  const currentPosts = data.hits.slice(indexOfFirstPost,indexOfLastPost);

  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  

  console.log('currentPost', currentPosts);
  console.log ('lstindex', indexOfLastPost);
  console.log ('firstIndex', indexOfFirstPost);
  


  

  return (

    
   
    <Container maxWidth="lg"   style={{marginTop:20}}>

     <Grid container spacing={1}>
      {currentPosts.map((hit, index) => (      
        <Grid item xs={12} md={4} lg={4}>
          <div >
          <Card key={index} hit = {hit}/>
          </div>
        </Grid>
      ))}
      
     </Grid>

     <Pagination postsPerPage={postsPerPage} totalPosts={data.hits.length} paginate= {paginate}/>
</Container>    
  );
}