import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Calc from './components/Calculator';
import Home from './components/Home';
import About from './components/About';

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
              <Link to="/about">
                <li>About</li>
              </Link>
              <li>|||</li>
            </ul>
          </header>
          <Route exact path="/calc" component={Calc} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Router>
      </main>
    );
  }
}

export default App;
