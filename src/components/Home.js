import { useState } from "react";

const Home = () => {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      text: "Well begun is half done.",
      author: "Aristotle"
    },
    {
      id: 2,
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra"
    },
    {
      id: 3,
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster"
    },
    {
      id: 4,
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha"
    }
  ]);

  return ( 
    <div className="home">
      { quotes.map((quote) => (
        <div className="quote-preview" key={ quote.id }>
          <h2>{ quote.text }</h2>
          <p>By: { quote.author }</p>
        </div>
      ))}
    </div>
   );
}
 
export default Home;