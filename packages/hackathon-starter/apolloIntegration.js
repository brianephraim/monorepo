import mongoose from 'mongoose';

export default function ({app})  {
  /*

  { user:
  { _id: 59ef6f4135a3bc7852d07d31,
   updatedAt: 2017-10-24T16:50:09.386Z,
   createdAt: 2017-10-24T16:50:09.386Z,
   email: 'asdf@asdf.com',
   password: '$2a$10$a4LrOhG4RlyNTNWOh9AwTe565VPD0GnyRg2NNQmrkWDlBp9OMYcAu',
   __v: 0,
   tokens: [] } }

  */

  const Schema = mongoose.Schema;
  const ToduApolloSchema = Schema({
    text: String
  });
  const ToduApollo = mongoose.model('ToduApollo', ToduApolloSchema);
  const resolvers = {
    Query: {
      toduApollos(obj, args, context, info) {
        return new Promise((resolve) => {        
          setTimeout(() => {
            resolve(ToduApollo.find());
            // resolve([{"id":"59ee19ae862df53be978dfb8","text":"asdf11111","__typename":"ToduApollo"},{"id":"59ee19e5862df53be978dfba","text":"zxcvzxcv","__typename":"ToduApollo"},{"id":"59f0d201c30b2b2579132003","text":"xxx","__typename":"ToduApollo"}])
          },500);
        });
        // return ToduApollo.find();
      },
      user(obj, args, context, info) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const user = context.user && context.user.toObject();
            const email = user && user.email;
            const isAdmin = process.env.ADMIN_EMAIL && process.env.ADMIN_EMAIL === email;
            const toResolve = {
              isAdmin,
              ...user,
            };
            // console.log('process.env.ADMIN_EMAIL', process.env.ADMIN_EMAIL, process.env.ADMIN_EMAIL === toResolve.email);
            // console.log(context.user.toObject());
            // console.log('toResolve',toResolve);
            resolve(toResolve);
            // resolve([{"id":"59ee19ae862df53be978dfb8","text":"asdf11111","__typename":"ToduApollo"},{"id":"59ee19e5862df53be978dfba","text":"zxcvzxcv","__typename":"ToduApollo"},{"id":"59f0d201c30b2b2579132003","text":"xxx","__typename":"ToduApollo"}])
          },500);
        });
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
  /* scalar types */
  /*String, Int, Float, Boolean, and ID*/
  const typeDefs = [
    `
      type User {
        email: String
        isAdmin: Boolean
      }
    `,
    `
      extend type Query {
        user: User
      }
    `,
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



  app.apolloAppConfigs = app.apolloAppConfigs || [];
  app.apolloAppConfigs.push({resolvers, typeDefs});

  app.apolloContextParsers = app.apolloContextParsers || [];
  app.apolloContextParsers.push((req) => {
    return { user: req.user }
  });
}
