import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Bookstore from './components/Bookstore';
import Categories from './components/Categories';
import './App.scss';

const App = () => (
  <Router>
    <Header />
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
