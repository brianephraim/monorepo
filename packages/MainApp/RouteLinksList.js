import React from 'react';
import Link from 'redux-first-router-link'

export default function (){
  return (
    <div>
      <h1>WELCOME</h1>
      <Link to='/boomer'>
        boomer
      </Link>
      <Link to='/behemoth'>
        behemoth
      </Link>
      <Link to='/battleship'>
        battleship
      </Link>
    </div>
  );
}
