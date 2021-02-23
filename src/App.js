import './App.css';

function App() {
  const title = 'Welcome to the Inspirational quote app'
  const likes = 50;
  const quote = {quote: 'Be here', author: 'Luffy'}

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{ quote.quote }</p>
        <p>{ "Hello" }</p>
        <p>{ [1,2,3] }</p>
        <p>{ Math.random() * 100}</p>
      </div>
    </div>
  );
}

export default App;
