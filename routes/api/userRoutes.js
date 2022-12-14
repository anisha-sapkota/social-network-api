const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route("/:userId/friends").post(addFriend);

// /api/users/:userId/friends
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
