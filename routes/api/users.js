const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');


/**
* @route POST api/users/register
* @desc Register the User
* @access Public
*/

router.post('/register', (req, res) => {
    let {
        name,
        username,
        email,
        password,
        confirm_password
    } = req.body;

    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "Password do not match."
        });
    }

    // Check for the unique User
    User.findOne({
        username: username
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Username is already taken."
            });
        }
    })

    // Check for the unique Email
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "Email is already registered. Did you forgot your password?"
            });
        }
    })

    // Validate data and register the user
    let newUser = new User({
        name,
        username,
        password,
        email
    });

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
            if (err) throw err;
            newUser.password = hash;

            try {
                await newUser.save();
                return res.status(201).json({
                    success: true,
                    msg: "Hurry! User is now registered."
                });
            } catch (error) {
                console.log(error)
                return res.status(500).json({
                    success: false,
                    msg: "Errrrr"
                });
            }
        })
    })
});

/**
 * @route POST api/users/login 
 * @desc Signing in the User
 * @access Public
 */

router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "Username is not found.",
                success: false
            });
        }
        // If there is user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        user: user,
                        token: `Bearer ${token}`,
                        msg: "You are now logged in!"
                    });
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                })
            }
        })
    })
});


/**
 * @route POST api/users/profile 
 * @desc Signing in the User
 * @access Public
 */

router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json(req.user);
});

module.exports = router;