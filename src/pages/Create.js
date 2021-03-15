import { useState } from "react";
import '../style/createQuote.css'

const Create = () => {
  const [author, setAuthor] = useState('');
  const [quoteBody, setQuoteBody] = useState('');
  const [genre, setGenre] = useState('love');

  const handleSubmit = (e) => {
    e.preventDefault();
    const quote = { author, quoteBody, genre };
    console.log(quote);
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
          value={quoteBody}
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
        <button>Add Quote</button>
      </form>
    </div>
  );
}

export default Create;