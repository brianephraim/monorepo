import React from 'react';
import { gql, graphql } from 'react-apollo';

const TodaApolloList = ({ removeTodaApollo, data: { loading, todaApollos } }) => {
  return (
    <ul className="todaApollo__list">
      {loading &&
        <div className="todaApollo__list-loader">
          LOADING...
        </div>
      }

      {!loading &&
        todaApollos.length === 0 &&
        <div className="todaApollo__list-none"> TodaApollo.length === 0 </div>
      }

      {!loading &&
        todaApollos.map(todaApollo => (
          <span key={todaApollo.id} >
            <button  onClick={() => removeTodaApollo(todaApollo)}>x</button>
            {todaApollo.text}
          </span>
        ))
      }
    </ul>
  );
};

export const todaApolloListQuery = gql`
  query todaApollos {
    todaApollos {
      id
      text
    }
  }
`;

export default graphql(todaApolloListQuery)(TodaApolloList);