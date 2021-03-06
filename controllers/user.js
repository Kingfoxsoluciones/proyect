'use strict'

const User = require('../models/user');
const service = require('../services');
const bcrypt = require("bcrypt");

//method registers
function signUp (req, res){
    User.find({email: req.body.email})
    .exec()
    .then(user => {
        // Validate if the email already exists in the database
        // In case the registration process is successful, a token and a message are returned
        if (user.length >= 1){
            return res.status(409).json({
                message: "Mail exists"
            });
        } else {
            const user = new User({
                email: req.body.email,
                password: req.body.password,
                displayName: req.body.displayName
                
            });
            user
            .save()
            .then(result => {
                console.log(result);
                res.status(201).send({message: "Auth successful",
                     token: service.createToken(user)});
            })
            .catch(err => {
                console.log(err);
                res.status(500).send({ message: `Error creating the user: ${err}`});
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
    });
}

//method login 
function login (req, res){
    User.findOne({ email: req.body.email })
    .exec()
    .then(user => {
        //validates that the user is different from null, that is to say that the mail is valid
        if (!user) {
            return res.status(401).json({
              message: "email invalid"
            });
        } else {
            // Compare the password, to decrypt it
            // This method is internal to the bcrypt library
            // If all the data is correct, it returns a message and the token that is called from the services folder
            user.comparePassword(req.body.password, function(err, isMatch) { 
                if(err) return err
                if(isMatch){
                    return res.status(200).json({
                        message: "Auth successful",
                        token: service.createToken(user)
                    });
                }else{
                    return res.status(401).json({
                        message: "Password is incorrect"
                    });
                }      
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
    });
}



module.exports = {
    signUp,
    login
}