import { useState, useEffect } from "react";

// Custom hook
// Name of the file have to start with keyword use
const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // to stop a fetch request when it's not needed
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(response => {
          if (!response.ok) throw Error('Error response!');
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted');
          } else {
            setIsPending(false);
            setError(err.message);
          }
        })
    }, 500); //To show the loading spinner
    // clean-up function
    return () => abortCont.abort();
  }, [url]);  // dependency on url, whenever url changes - renders
  return { data, isPending, error }
}

export default useFetch;