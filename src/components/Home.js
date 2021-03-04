import { useState, useEffect } from "react";
import QuoteList from "./QuoteList";

const Home = () => {
  const [quotes, setQuotes] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/quotes')
      .then(response => {
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
        setIsPending(false);
      })
  }, []);

  return ( 
    <div className="home">
      {isPending && <div>Loading..</div>}
      {quotes && <QuoteList quotes = { quotes } 
        title = "Welcome to Inspirational quotes app" />}
    </div>
   );
}
 
export default Home;