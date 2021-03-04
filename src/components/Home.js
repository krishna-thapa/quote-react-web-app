import { useState, useEffect } from "react";
import { Alert, Spinner, Container } from "react-bootstrap";
import QuoteList from "./QuoteList";

const Home = () => {
  const [quotes, setQuotes] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/quotesd')
      .then(response => {
        if(!response.ok) throw Error('Error response!');
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
    }, 500); //To show the loading spinner
  }, []);

  return ( 
    <div className="home">
      {error && 
      <Alert variant='danger'>
        Response from API: {error}
      </Alert>
      }
      {isPending && 
        <Container className="d-flex align-items-center justify-content-center" 
          style={{ minHeight: "10vh"}}>
          <Spinner animation="grow" role="status" variant="info">
              <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
        }
      {quotes && <QuoteList quotes = { quotes } 
        title = "Welcome to Inspirational quotes app" />}
    </div>
   );
}
 
export default Home;