const router = require("express").Router();
const {
  createThought,
  getSingleThought,
  deleteThought,
  updateThought,
  getThoughts,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thought
router.route("/").get(getThoughts).post(createThought);
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
