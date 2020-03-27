
import  React from 'react';

export  const useFetch = (url) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    
 


    React.useEffect(() => {
      const fetchPost = async () => {
        try {
          const res = await fetch(url);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchPost();
    },[url] );
    return { response, error };
  };

 