import React from "react";
import ContainerDiv from './Container/Container';
import Header from './Navbar/Navbar';


class Feed extends React.Component {
    render() {
     
      return (
        <div> 
        <Header/>
        <ContainerDiv/>
        </div>
      );
    }
  }


export default Feed;