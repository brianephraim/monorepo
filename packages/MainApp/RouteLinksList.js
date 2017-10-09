import React from 'react';
import Link from 'redux-first-router-link'

export default function (){
  return (
    <div>
      <h1>WELCOME</h1>
      <p>
        <Link to='/boomer'>
          boomer
        </Link>
      </p>
      <p>
        <Link to='/'>
          bernie
        </Link>
      </p>
      <p>
        <Link to='/behemoth'>
          behemoth
        </Link>
        </p>
      <p>
        <Link to='/battleship'>
          battleship
        </Link>
      </p>
      <p>
        <Link to='/todos/all'>
          todos
        </Link>
      </p>
    </div>
  );
}
