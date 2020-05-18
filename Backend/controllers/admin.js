const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const PostBox = require('../models/postBox');


exports.addPostBox = (req,res,next)=>{
    const postBox = new PostBox({
        qrCode: req.body.qrCode,
        opened: false,
        activationCode: req.body.activationCode,
        owner: null
    })
    postBox.save().then(createdPostBox =>{
        res.status(201).json({
            message: 'Post box added successfuly',
            postBox: createdPostBox
        })
    }).catch(error =>{
        res.status(500).json({
            message: 'Creating post box failed!'
        });
    });
}