import mongoose from 'mongoose';

  


export default function ({app})  {

  const Schema = mongoose.Schema;
  const TodaApolloSchema = Schema({
    text: String
  });
  const TodaApollo = mongoose.model('TodaApollo', TodaApolloSchema);
  const resolvers = {
    Query: {
      todaApollos(obj, args, context, info) {
        return new Promise((resolve) => {
          console.log('context',context);
          setTimeout(() => {
            resolve(TodaApollo.find())
            // resolve([{"id":"59ee19ae862df53be978dfb8","text":"asdf11111","__typename":"TodaApollo"},{"id":"59ee19e5862df53be978dfba","text":"zxcvzxcv","__typename":"TodaApollo"},{"id":"59f0d201c30b2b2579132003","text":"xxx","__typename":"TodaApollo"}])
          },500);
        });
        // return TodaApollo.find();
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

  const typeDefs = [
    `
      type TodaApollo {
        id: ID
        text: String
      }
    `,
    `
      extend type Query {
        todaApollos: [TodaApollo]
      }
    `,

    `
      extend type Mutation {
        removeTodaApollo(id: ID!): TodaApollo
      }
    `,
    `
      extend type Mutation {
        addTodaApollo(text: String!): TodaApollo
      }
    `,
  ];
  
	app.apolloAppConfigs = app.apolloAppConfigs || [];
	app.apolloAppConfigs.push({resolvers, typeDefs});
}
