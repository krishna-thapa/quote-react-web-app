const QuoteList = ({quotes, title }) => {
  
  return (
    <div className="quote-list">
      <h2>{ title }</h2>
      { quotes.map((quote) => (
        <div className="quote-preview" key={ quote.id }>
          <h2>{ quote.text }</h2>
          <p>By: { quote.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default QuoteList;