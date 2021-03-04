import { useState } from "react";
import QuoteList from "./QuoteList";

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

  const handleDelete = (id) => {
    const newQuotes = quotes.filter(quote => quote.id !== id);
    setQuotes(newQuotes);
  }

  return ( 
    <div className="home">
      <QuoteList quotes = { quotes } 
        title = "Welcome to Inspirational quotes app"
        handleDelete = { handleDelete } />
    </div>
   );
}
 
export default Home;