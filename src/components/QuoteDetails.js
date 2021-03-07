import { Alert, Spinner, Container } from "react-bootstrap";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import '../style/blockquote.css'

const QuoteDetails = () => {
  const { id } = useParams();
  const { data: quote, error, isPending } = useFetch('http://localhost:8000/quotes/' + id);

  return (
    <div className="quote-details">
      <h2>Quote details</h2>
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
      {quote && (
        <div className="quote-content">
          <blockquote>
            <span className="quote-icon">&ldquo; </span> 
              {quote.text}
            <span className="quote-icon"> &rdquo;</span> 
          </blockquote>
          <cite>{quote.author}</cite>
        </div>
      )}
    </div>
  );
}

export default QuoteDetails;