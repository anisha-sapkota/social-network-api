const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: Schema.Types.String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Schema.Types.Date,
      default: Date.now,
    },
    username: {
      type: Schema.Types.String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
