const { connection, connect } = require("mongoose");

const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/socialNetworkDB";

// Wrap Mongoose around local connection to mongoDB
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = connection;
