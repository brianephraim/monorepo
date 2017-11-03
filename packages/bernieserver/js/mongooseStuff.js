var jD = require("jquery-deferred");
var mongoose = require("mongoose");
var uriUtil = require("mongodb-uri");
var i = 0;
var MongooseStuff = function({app}) {
  console.log("MONGOOSE!!!!!!");
  var self = this;
  var mongodbUri = process.env.MONGOLAB_URI;
  if (process.env.ENVNAME === "foremanLocal") {
    mongodbUri = "mongodb://localhost:27017/" + process.env.DATABASE_NAME;
  }

  this.mongooseUri = uriUtil.formatMongoose(mongodbUri);

  console.log('mongodbUri',mongodbUri);
  console.log('this.mongooseUri',this.mongooseUri);
  this.db = mongoose.connection;
  this.models = {};
  console.log('HOW MANY SO FAR???',i++);
  self.models.SimpleImage = mongoose.model(
    "simpleimage",
    mongoose.Schema({
      url: String,
      idX: String
      // "date": {
      //     type: Date,
      //     default: Date.now
      // },
      // "width": Number,
      // "height": Number,
    })
  );

  self.models.ComplexImage = mongoose.model(
    "ComplexImage",
    mongoose.Schema({
      url: String,
      idX: String,
      date: Date,
      width: Number,
      height: Number,
      cropWidth: Number,
      cropHeight: Number,
      x: Number,
      y: Number,
      mode: String,
      customTemplate: String,
      customUrl: String,
      pathname: String,
      good: Number
      // "date": {
      //     type: Date,
      //     default: Date.now
      // },
      // "width": Number,
      // "height": Number,
    })
  );

  self.models.UserTemplate = mongoose.model(
    "UserTemplate",
    mongoose.Schema({
      created: Date,
      customTemplate: String,
      templateHeight: Number,
      templateWidth: Number
    })
  );

  // =====
  // =====
  // =====
  // =====
  const resolvers = {
    Query: {
      userTemplates(obj, args, context, info) {
        return self.models.UserTemplate.find()
      },
    },
    Mutation: {
      removeUserTemplate(root, { customTemplate }) {
        self.models.UserTemplate.findOneAndRemove({ customTemplate }).exec().then(() => {});
      },
      // addToduApollo(root, args) {
      //   const toduApollo = new ToduApollo(args);
      //   toduApollo.save();
      //   return toduApollo;
      // },
    },
  };
  const typeDefs = [
    `
      type UserTemplate {
        created: Date
        customTemplate: String
      }
    `,
    `
      extend type Query {
        userTemplates: [UserTemplate]
      }
    `,
    `
      extend type Mutation {
        removeUserTemplate(customTemplate: String!): UserTemplate
      }
    `,

    // `
    //   extend type Mutation {
    //     removeToduApollo(id: ID!): UserTemplate
    //   }
    // `,
    // `
    //   extend type Mutation {
    //     addToduApollo(text: String!): UserTemplate
    //   }
    // `,
  ];
  app.apolloAppConfigs = app.apolloAppConfigs || [];
  app.apolloAppConfigs.push({resolvers, typeDefs});
  // =====
  // =====
  // =====
  // =====



};
MongooseStuff.prototype.connect = function() {
  var self = this;
  var dfd = jD.Deferred();
  console.log('CONNECT')
  if (mongoose.connection.readyState === 0) {
    console.log('CONNECT 1')
    var options = {
      useMongoClient: true,
      server: {
        socketOptions: {
          keepAlive: 1,
          connectTimeoutMS: 30000
        }
      },
      replset: {
        socketOptions: {
          keepAlive: 1,
          connectTimeoutMS: 30000
        }
      }
    };
    mongoose.connect(self.mongooseUri, options);
    self.db.once("open", (...args) => {console.log('OPPPENNED',args);dfd.resolve(...args);});
    self.db.on("error", console.error.bind(console, "connection error:"));
  } else {
    console.log('CONNECT 2')
    dfd.resolve();
  }

  return dfd.promise();
};

MongooseStuff.prototype.checkUrl = function(idX) {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    self.models.SimpleImage.findOne(
      {
        idX: idX
      },
      "url idX",
      function(err, simpleimage) {
        if (simpleimage !== null) {
          dfd.resolve(true);
        } else {
          dfd.resolve(false);
        }

        // if (err) return handleError(err);
        // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
      }
    );
  });
  return dfd.promise();
};

MongooseStuff.prototype.GetComplexImage = function(idX) {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    self.models.ComplexImage.findOne(
      {
        idX: idX
      },
      function(err, data) {
        if (data !== null) {
          dfd.resolve(data);
        } else {
          dfd.resolve(data);
        }

        // if (err) return handleError(err);
        // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
      }
    );
  });
  return dfd.promise();
};

MongooseStuff.prototype.GetUserTemplatesAll = function() {
  console.log('GetUserTemplatesAll')
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    console.log('self.connect().then')
    self.models.UserTemplate.find({}, function(err, data) {
      console.log('self.models.UserTemplate.find',err,data && data.length)
      if (data !== null) {
        dfd.resolve(data);
      } else {
        dfd.resolve(data);
      }

      // if (err) return handleError(err);
      // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    });
  });
  return dfd.promise();
};

MongooseStuff.prototype.GetComplexImageAll = function() {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    self.models.ComplexImage.find({}, function(err, data) {
      if (data !== null) {
        dfd.resolve(data);
      } else {
        dfd.resolve(data);
      }

      // if (err) return handleError(err);
      // console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
    });
  });
  return dfd.promise();
};

MongooseStuff.prototype.MakeUserTemplate = function(data) {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    self.models.UserTemplate.findOneAndUpdate(
      { customTemplate: data.customTemplate },
      data,
      { upsert: true },
      function() {
        dfd.resolve.apply(null, arguments);
      }
    );
  });
  return dfd.promise();
};

MongooseStuff.prototype.UpdateComplexImage = function(data) {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    self.models.ComplexImage.findOneAndUpdate(
      { idX: data.idX },
      data,
      { upsert: true },
      function() {
        dfd.resolve.apply(null, arguments);
      }
    );
  });
  return dfd.promise();
};

MongooseStuff.prototype.ComplexImage = function(data) {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    var newRecord = new self.models.ComplexImage(data);

    newRecord.save(function() {
      dfd.resolve.apply(null, arguments);
    });
  });
  return dfd.promise();
};

MongooseStuff.prototype.simpleimage = function(url, idX) {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    var newRecord = new self.models.SimpleImage({
      url: url,
      idX: idX
    });

    newRecord.save(function() {
      dfd.resolve.apply(null, arguments);
    });
  });
  return dfd.promise();
};

MongooseStuff.prototype.getImages = function(url, idX) {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    self.models.SimpleImage.find({}, "url idX", function(err, simpleimage) {
      dfd.resolve(simpleimage);
    });
  });
  return dfd.promise();
};

MongooseStuff.prototype.nuke = function() {
  var self = this;
  var dfd = jD.Deferred();
  self.connect().then(function() {
    mongoose.connection.db.collection("usertemplates").drop(function(err) {
      //compleximages
      if (err) throw err;

      // Only close the connection when your app is terminating
      mongoose.connection.db.close(function(err) {
        dfd.resolve();
        if (err) throw err;
      });
    });
    return dfd.promise();
  });
};

export default ({app}) => { return new MongooseStuff({app});};
