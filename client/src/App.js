import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/Movie.js'
import Movie from './Movies/Movie.js'

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/"render={ props => <MovieList {...props} /> } />
      <Route path="/movies/:id" render={ props => <Movie {...props} addToSavedList={addToSavedList} /> } />
    </div>
  );
};

export default App;

