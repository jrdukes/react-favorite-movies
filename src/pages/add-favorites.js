import React, { useReducer } from 'react';
import { Link, navigate } from '@reach/router';
import { merge } from 'ramda';

function reducer(state, { type, payload }) {
  if (type === 'SET_MOVIE') {
    return payload;
  }
  if (type === 'SET_TITLE') {
    return merge(state, { title: payload });
  }
  return state;
}

export default function AddFavorite(props) {
  const [state, dispatch] = useReducer(reducer, { id: 0, title: null });
  useEffect(function() {});
  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:3000/favorites/' + props.id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        }


  return (
    <section className='section'>
      <h1 className='title'>Add New Favorite</h1>
      <form className='form'>
        <div className='field'>
          <label className='label'>Title</label>
          <div className='control'>
            <input
              type='text'
              className='input'
              value={state.title}
              onChange={e =>
                dispatch({ type: 'SET_TITLE', payload: e.target.value })
              }
            />
          </div>
        </div>
        <div className='field is-grouped'>
          <button className='button'>Update</button>
          <Link to='/favorites'>
            <a className='button' href='/favorites'>
              Cancel
            </a>
          </Link>
        </div>
      </form>
    </section>
  );
}
