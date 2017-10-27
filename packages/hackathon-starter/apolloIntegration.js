import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ToduApolloSchema = Schema({
  text: String
});
const ToduApollo = mongoose.model('ToduApollo', ToduApolloSchema);
const resolvers = {
  Query: {
    toduApollos(obj, args, context, info) {
      return new Promise((resolve) => {
        console.log('context',context);
        setTimeout(() => {
          resolve(ToduApollo.find())
          // resolve([{"id":"59ee19ae862df53be978dfb8","text":"asdf11111","__typename":"ToduApollo"},{"id":"59ee19e5862df53be978dfba","text":"zxcvzxcv","__typename":"ToduApollo"},{"id":"59f0d201c30b2b2579132003","text":"xxx","__typename":"ToduApollo"}])
        },500);
      });
      // return ToduApollo.find();
    }
  },
  Mutation: {
    addToduApollo(root, args) {
      const toduApollo = new ToduApollo(args);
      toduApollo.save();
      return toduApollo;
    },
    removeToduApollo(root, { id }) {
      ToduApollo.findByIdAndRemove(id).exec().then(() => {
        console.log('ToduApollo Deleted:', id);
      });
    }
  }
};

const typeDefs = [
  `
    type ToduApollo {
      id: ID
      text: String
    }
  `,
  `
    extend type Query {
      toduApollos: [ToduApollo]
    }
  `,

  `
    extend type Mutation {
      removeToduApollo(id: ID!): ToduApollo
    }
  `,
  `
    extend type Mutation {
      addToduApollo(text: String!): ToduApollo
    }
  `,
];


export default function ({app})  {
  app.apolloAppConfigs = app.apolloAppConfigs || [];
  app.apolloAppConfigs.push({resolvers, typeDefs});
}
