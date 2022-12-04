const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      trimmed: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      unique: true,
      match: [
        /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/,
        "Please enter a valid email",
      ],
    },
    thoughts: [thoughtSchema._id],
    friends: [this._id],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("user", userSchema);

module.exports = User;
