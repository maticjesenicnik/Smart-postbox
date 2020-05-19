const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const delivaryGuySchema = require('../models/delivaryMan');
const postBoxSchema = require('../models/postBox');

exports.loginDeliveryGuy = (req,res,next) =>{
    let fetchedDelivey;
    delivaryGuySchema.findOne({email: req.body.email})
    .then(deliveryGuy =>{
        if(!deliveryGuy){
          return res.status(401).json({
            message:"Auth failed! No such user"
          });
        }
        fetchedDelivey = deliveryGuy;
        return bcrypt.compare(req.body.password, deliveryGuy.password);
    })
    .then(result =>{
      if(!result){
        return res.status(401).json({
          message:"Auth failed"
        });
      }
      const token = jwt.sign({email: fetchedDelivey.email, delivaryGuyId: fetchedDelivey._id}, 'secret_this_should_be_longer', {expiresIn: "2h"});
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        delivaryGuyId:fetchedDelivey._id
      });
    }).catch(err =>{
      return res.status(401).json({
        message:"Invalid authentication credentials!"
      });
    });
}

exports.sendRequestForOpen = (req,res,next) =>{

  /*
  req.body.qrCode = "24124142";
  */
 
  postBoxSchema.findOne({qrCode: req.body.qrCode}).then(requestedBox =>{
    requestedBox.requestForOpen = true;
    requestedBox.save().then(modidiedPostBox =>{
      res.status(201).json({
        message: 'Request was send successfuly!'
      })
    }).catch(error =>{
      res.status(500).json({
        message: 'Request error'
      })
    })
  }).catch(error =>{
    res.status(500).json({
      message: 'Request error'
    })
  })
}