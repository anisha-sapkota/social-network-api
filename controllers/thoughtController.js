const { Thought, User } = require("../model");

module.exports = {
  // Get all Thoughts
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Create a Thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Thought created, but no user with this ID" })
          : res.json({ message: "Thought created!" })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get Thought by _id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thought)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a Thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json({ message: "Thought deleted!" })
      )
      .catch((err) => res.status(500).json(err));
  },
  // Update a Thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      {
        _id: req.params.thoughtId,
      },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this id" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //create reaction
  createReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  //delete reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with this ID!" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
