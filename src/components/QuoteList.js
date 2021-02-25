const QuoteList = ({quotes, title, handleDelete}) => {
  
  return (
    <div className="quote-list">
      <h2>{ title }</h2>
      { quotes.map((quote) => (
        <div className="quote-preview" key={ quote.id }>
          <h2>{ quote.text }</h2>
          <p>By: { quote.author }</p>
          <button onClick={() => handleDelete(quote.id)}>Delete quote</button>
        </div>
      ))}
    </div>
  );
}
 
export default QuoteList;