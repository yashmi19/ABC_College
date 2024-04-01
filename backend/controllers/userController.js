const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const User = require("../models/User");
const dotenv = require('dotenv');
dotenv.config({ path: 'config/config.env' });




// CREATE MEMBER LOGIN
exports.createUser = catchAsyncErrors(async (req, res) => {
    try {
        const userID = req.body.userID;
        const password = await bcrypt.hash(req.body.password, 10);
        const role = req.body.role;

        const newUser = new User({
            userID,
            password,
            role,
        });

        newUser.save()
        res.status(200)
    } catch (error) {
        console.log(error);
    }
});



// GET ALL LOGINS
exports.allUsers = catchAsyncErrors((req, res) => {

    User.find({}, (err, result) => {
        if (err)
            res.json(err)
        else
            res.json(result)
    })
});

// LOGIN 
exports.login = catchAsyncErrors(async (req, res) => {

    const user = await User.findOne({ userID: req.body.userID });
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordValid) {
        let token;
        if (user.role == 'admin') {
            token = jwt.sign(
                {
                    userID: user.userID,
                    role: user.role,
                },
                process.env.JWT_SECRET
            );
            return res.json({
                status: "ok",
                user: token,
                userID: user.userID,
                role: user.role,
            });
        }
    }
    else {
        return res.json({ status: "PASSWORD INVALID", user: false });
    }
});