import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <main>
      <Switch>
        <Route path="/" exact>
          <Bookstore />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
