import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory }  from "react-router-dom";

import '../style/createQuote.css'

const Create = () => {
  const [author, setAuthor] = useState('');
  const [quote, setQuoteBody] = useState('');
  const [genre, setGenre] = useState('love');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const quoteContent = { author, quote, genre };

    setIsPending(true);

    setTimeout(() => {
      fetch('http://localhost:8000/quotes', {
        method: 'POST',
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(quoteContent)
      }).then(() => {
        console.log('New quote is added');
        setIsPending(false);
        history.push(`/`);
      })
    }, 500); //To show the loading spinner
  }

  return (
    <div className="create">
      <h2>Add a New Quote</h2>
      <form onSubmit={handleSubmit}>
        <label>Author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Quote body:</label>
        <textarea
          required
          value={quote}
          onChange={(e) => setQuoteBody(e.target.value)}
        ></textarea>
        <label>Genre:</label>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="love">Love</option>
          <option value="sad">Sad</option>
          <option value="peace">Peace</option>
          <option value="war">War</option>
          <option value="family">family</option>
          <option value="other">Other</option>
        </select>
        {!isPending &&
          <button>Add Quote</button>
        }
        {isPending &&
          <button>
            <Spinner animation="grow" role="status" variant="info">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </button>
        }
      </form>
    </div>
  );
}

export default Create;