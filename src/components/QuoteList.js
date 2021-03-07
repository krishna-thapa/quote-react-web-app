import { CardColumns, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuoteList = ({ quotes, title }) => {

  return (
    <div className="quote-list">
      <h2>{title}</h2>
      <CardColumns>
        {quotes.map((quote) => (
          <Card key={quote.id} border="dark">
            <Card.Header>
              <Link to={`/quotes/${quote.id}`}>
                Edit
              </Link>
            </Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '} {quote.text} {' '}
                </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">{quote.author}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </div>
  );
}

export default QuoteList;