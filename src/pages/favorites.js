import React, { useEffect, useState } from 'react';
import { map } from 'ramda'

export default function Start(props) {
  const [movies, setMovies] = useState([])
  useEffect(funtion() {
fetch('http://localhost:3000/favorites')
.then(response => response.json())
.then(movies => setMovies(movies))
  }, []) // run when component is mounted 
    return (
    <section className='hero is-primary'>
      <div className='hero-body'>
        <h1 className='title'>Favorites</h1>
        <Link to="favorites/new"></Link>
        <button className='button'>Add Favorite Movie</button>
        <div className='box'
        <ul>
        {map(li, movies)}
        </ul>
        
      </div>
    </section>
  );
}

function li(movie) {
    return (
        <li key={movie.id}>
        <Link to={`/favorites/${movie.id  . . .  {movie.title}</li>
    )
}
