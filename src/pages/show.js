import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router/lib/history';

export default function ShowFavorite(props) {
    const [movie, setMovie] = useState({})
    useEffect(function () {
fetch('http://localhost:3000/favorites/' + props.id)
// added props.id above to display the correct movie ID
.then(response => response.json())
.then(movie => setMovie(movie))
    }, []) 

function handleDelete(e) {
    fetch('http://localhost:3000/favorites/' + movie.id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(res => {
        console.log(res)
    navigate('/favorites')
    })
}
}




  return <section className='section' />;
  <h1 className='title'>{movie.title}/h1>
  <div>
    <Link to={`/favorites/${movie.id}/edit`}>
<button className="button">Edit</button>
    </Link>
<button className='button'>Delete</button>
<Link to='/favorites'

  </div>
}
