import { CardColumns, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { IconContext } from "react-icons";

const QuoteList = ({ quotes, title }) => {

  return (
    <div className="quote-list">
      <h2>{title}</h2>
      <CardColumns>
        {quotes.map((quote) => (
          <Card key={quote.id} border="dark">
            <Card.Header>
              <Link to={`/quotes/${quote.id}`}>
                <IconContext.Provider value={{ className: 'react-icon-click' }}>
                  <div>
                    <MdEdit />
                  </div>
                </IconContext.Provider>
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