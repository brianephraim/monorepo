import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import {makeExecutableSchema} from 'graphql-tools';

export default function ({app, nameSpace = 'bernieserver'})  {
	
	const Schema = mongoose.Schema;

	const TodaApolloSchema = Schema({
		text: String
	});

	const TodaApollo = mongoose.model('TodaApollo', TodaApolloSchema);
	const resolvers = {
		Query: {
			todaApollos() {
				return TodaApollo.find();
			}
		},
		Mutation: {
			addTodaApollo(root, args) {
				const todaApollo = new TodaApollo(args);
				todaApollo.save();
				return todaApollo;
			},
			removeTodaApollo(root, { id }) {
				TodaApollo.findByIdAndRemove(id).exec().then(() => {
					console.log('TodaApollo Deleted:', id);
				});
			}
		}
	};

	const typeDefs = `
		type TodaApollo {
			id: ID
			text: String
		}

		type Query {
			todaApollos: [TodaApollo]
		}

		type Mutation {
			addTodaApollo(text: String!): TodaApollo
			removeTodaApollo(id: ID!): TodaApollo
		}

		schema {
			query: Query
			mutation: Mutation
		}
	`;

	const schema = makeExecutableSchema({ typeDefs, resolvers });

	app.use(bodyParser.json());

	app.use(
		'/graphql',
		graphqlExpress({
			schema
		})
	);

	app.use(
		'/graphiql',
		graphiqlExpress({
			endpointURL: '/graphql'
		})
	);
}
