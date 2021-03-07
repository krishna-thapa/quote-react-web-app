import { useParams } from "react-router";

const QuoteDetails = () => {
  const { id } = useParams();

  return (
    <div className="quote-details">
      <h2>Quote details - { id }</h2>
    </div>
  );
}

export default QuoteDetails;