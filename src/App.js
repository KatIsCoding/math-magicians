import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calc from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <Router>
          <header>
            <h1>Math Magicians</h1>
            <ul className="navigator">
              <li>|||</li>
              <Link to="/">
                <li>Home</li>
              </Link>
              <li>|||</li>
              <Link to="/calc">
                <li>Calculator</li>
              </Link>
              <li>|||</li>
              <Link to="/quote">
                <li>Quote</li>
              </Link>
              <li>|||</li>
            </ul>
          </header>
          <Route exact path="/calc" component={Calc} />
          <Route exact path="/" component={Home} />
          <Route exact path="/quote" component={Quote} />
        </Router>
      </main>
    );
  }
}

export default App;
