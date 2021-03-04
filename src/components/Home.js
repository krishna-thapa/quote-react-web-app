import { useState, useEffect } from "react";
import QuoteList from "./QuoteList";

const Home = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/quotes')
      .then(response => {
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
      })
  }, []);

  return ( 
    <div className="home">
      { quotes && <QuoteList quotes = { quotes } 
        title = "Welcome to Inspirational quotes app" /> }
    </div>
   );
}
 
export default Home;