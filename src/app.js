import React from 'react';
import { Router } from '@reach/router';
import NavBar from './components/NavBar';

// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
// NEW - import the PrivateRoute component
import PrivateRoute from './components/PrivateRoute';

// pages
import Start from './pages/start';
import About from './pages/about';
import Favorites from './pages/favorites';
import AddFavorite from '.pages/add-favorite';
import ShowFavorite from '.pages/show';
import EditFavorite from '.pg';

function App(props) {
  return (
    <Router>
      <Start path='/' />
      <About path='/about' />
      <EditFavorite path='/favorites/id:/edit' />
      <AddFavorite path='/favorites/new' />
      <ShowFavorite path='favorites/:id' />
      <PrivateRoute component={Favorites} path='/favorites' />
      <Favorites path='/favorites' />
    </Router>
  );
}

function App() {
  return (
    // {/* NEW - Modify the /profile route to use PrivateRoute instead of Route */}
    <PrivateRoute path='/profile' component={Profile} />
  );
}

export default App;
