const bcrypt = require('bcrypt');
const PostBox = require('../models/postBox');
const Package = require('../models/package');
const delivaryGuySchema = require('../models/delivaryMan');


exports.addPostBox = (req,res,next)=>{
    const postBox = new PostBox({
        qrCode: req.body.qrCode,
        opened: false,
        heater: false,
        weightPackages: 0.0,
        requestForOpen: false,
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

exports.addPackage = (req,res,next)=>{

    /* Testni podatki
    req.body.qrCode = "41241242";
    req.body.weight = 32.4;
    req.body.userId = "5ec4368707b6d60f64cfde91";
    req.body.postBoxId = "5ec29495496ccb0868caf685";
    */

    const package = Package({
        qrCode: req.body.qrCode,
        weight: req.body.weight,
        deliverd: false,
        ownersId: req.body.userId,
        postBoxId: req.body.postBoxId
    })
    package.save().then(createdPackage =>{
        res.status(201).json({
            message: 'Package created!'
        });
    }).catch(error =>{
        res.status(500).json({
            message: 'Creating package failed!'
        })
    })
}

exports.createDeliveryGuy = (req,res,next)=>{

    /* Testni pdoatki
    req.body.name="Domen";
    req.body.surname="Osojnik";
    req.body.username="domen1";
    req.body.password="geslo123";
    */

    bcrypt.hash(req.body.password, 10).then(hash=>{
      const delivaryGuy = new delivaryGuySchema({
        name:req.body.name,
        surname: req.body.surname,
        username: req.body.username,
        password: hash
      });
      delivaryGuy.save().then(result=>{
          res.status(201).json({
              message: 'User created!',
              result: result
          });
      })
      .catch(err =>{
        res.status(500).json({
            message: 'Invalid authentication credentials!'
        });
      });
    });
}