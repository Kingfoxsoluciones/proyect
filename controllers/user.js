'use strict'

const User = require('../models/user');
const service = require('../services');
const bcrypt = require("bcrypt");

function signUp (req, res){
    User.find({email: req.body.email})
    .exec()
    .then(user => {
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
                res.status(201).send({ token: service.createToken(user)});
            })
            .catch(err => {
                console.log(err);
                res.status(500).send({ message: `Error al crear el usuario: ${err}`});
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

function login (req, res){
    User.findOne({ email: req.body.email }, function(err, user){
        if (err) throw err;
        
        //var uno = user.email;
        //var dos = req.body.email

        user.comparePassword(req.body.password, req.body.email, function(err, isMatch) {
            if(err) return err
            if(isMatch){
                return res.status(200).json({
                    message: "Auth successful",
                    token: service.createToken(user)
                });
            }else{
                return res.status(401).json({
                    message: "La contraseña es incorrecta"
                });
            }      
        });
        
    })
}



module.exports = {
    signUp,
    login
}