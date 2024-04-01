const router = require("express").Router();


const {
  createUser,
  allUsers,
  login
} = require('../controllers/userController');


router.route("/add").post(createUser);
router.route("/login").get(allUsers);
router.post("/login", login);



module.exports = router;
