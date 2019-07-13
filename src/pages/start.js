import React from 'react';
import {Link} from '@reach/router'
import Navbar from '../components/NavBar'

export default function Start(props) {
  return (<section className='hero is-primary'>
    <Navbar />
      <div className='hero-body'>
        <h1 className='title'>Favorite Movies</h1>
        <Link to="/favorties">
        <button className='button'>Getting Started</button>
            </Link>    
      </div>
  </section>
  <h1>Start Page</h1>
  )
}
