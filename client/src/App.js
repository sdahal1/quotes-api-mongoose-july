import logo from './logo.svg';
import './App.css';
import AllQuotes from './components/AllQuotes';
import {Link, Router} from '@reach/router';
import Create from './components/Create';
import QuoteDetail from './components/QuoteDetail';

function App() {
  return (
    <div className="App">
      <h1>Hello Quotes Project!</h1>
      
      <Link to="/quotes/new" >Create a new quote</Link>

      <Router>
        <Create path= "/quotes/new"></Create>
        <AllQuotes path= "/"></AllQuotes>
        <QuoteDetail path= "/quotes/info/:id"></QuoteDetail>
      </Router>
    </div>
  );
}

export default App;
