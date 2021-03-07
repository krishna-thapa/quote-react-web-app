import QuoteNavbar from "./components/QuoteNavbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from "./pages/Create";
import Home from "./pages/Home";
import About from "./pages/About";
import QuoteDetails from "./components/QuoteDetails";

function App() {

  return (
    <Router>
      <div className="App">
        <QuoteNavbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/quotes/:id">
              <QuoteDetails />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
