import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import {makeExecutableSchema} from 'graphql-tools';

export default function ({app})  {
  app.apolloAppConfigs = app.apolloAppConfigs || [];
  app.apolloContextParsers = app.apolloContextParsers || [];

  const resolvers = {
    Query: {},
    Mutation: {}
  };

  app.apolloAppConfigs.forEach((config) => {
    if (config.resolvers.Query) {
      resolvers.Query = {...resolvers.Query, ...config.resolvers.Query}
    }
    if (config.resolvers.Mutation) {
      resolvers.Mutation = {...resolvers.Mutation, ...config.resolvers.Mutation}
    }
  });

  const typeDefs = [
    `
      type Blank {
        id: ID
      }
    `,
    `
      type Mutation {
        mutateBlank(id: ID!): Blank
      }
    `,
    `
      type Query {
        blanks: [Blank]
      }
    `,
    `
      schema {
        query: Query
        mutation: Mutation
      }
    `,
  ];

  app.apolloAppConfigs.forEach((config) => {
    if (config.resolvers) {
      if (config.resolvers.Query) {
        resolvers.Query = {...resolvers.Query, ...config.resolvers.Query}
      }
      if (config.resolvers.Mutation) {
        resolvers.Mutation = {...resolvers.Mutation, ...config.resolvers.Mutation}
      }
    }
    if (config.typeDefs) {
      typeDefs.push(...config.typeDefs);
    }
  });

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  app.use(bodyParser.json());

  app.use(
    '/graphql',
    graphqlExpress((req) => {
      return {
        schema,
        context: app.apolloContextParsers.reduce((accum, parser) => {
          return {
            ...accum,
            ...parser(req),
          };
        },{})
      }
    })
    
  );

  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql'
    })
  );
}
