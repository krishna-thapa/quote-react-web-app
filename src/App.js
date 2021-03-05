import QuoteNavbar from "./components/QuoteNavbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from "./pages/Create";

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
