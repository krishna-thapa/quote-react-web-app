import { Alert, Spinner, Container } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import QuoteList from "../components/QuoteList";

const Home = () => {
  const { data: quotes, isPending, error } = useFetch('http://localhost:8000/quotes');
  return (
    <div className="home">
      {error &&
        <Alert variant='danger'>
          Response from API: {error}
        </Alert>
      }
      {isPending &&
        <Container className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "10vh" }}>
          <Spinner animation="grow" role="status" variant="info">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      }
      {quotes && <QuoteList quotes={quotes}
        title="Welcome to Inspirational quotes app" />}
    </div>
  );
}

export default Home;