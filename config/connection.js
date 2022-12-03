const mongoose = require("mongoose");

// Wrap Mongoose around local connection to mongoDB
mongoose.connect("mongodb://localhost:27017/socialnetworkDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = connection;
