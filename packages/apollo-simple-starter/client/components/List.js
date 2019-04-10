import React from 'react';

export default function List({ onClick, data, loading }) {
  return (
    <div>
      {loading &&
        <div>
          LOADING...
        </div>
      }

      {!loading && data.length === 0 &&
        <div className="todaApollo__list-none"> AWE NO RESULTS </div>
      }

      {!loading && data.map(item => (
        <div key={item.id} >
          <button  onClick={() => onClick(item)}>x</button>
          {item.text}
        </div>
      ))}
    </div>
  );
}