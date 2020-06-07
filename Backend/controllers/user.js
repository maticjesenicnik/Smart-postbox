const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const PostBox = require('../models/postBox');

exports.createUser = function(req, res, next){

    bcrypt.hash(req.body.password, 10).then(hash=>{

  // Testni podatki
  // req.body.username="vidko1234";
  // req.body.password="geslo123";
  // req.body.name="vid";
  // req.body.surname="sovic";
  console.log(req.body.username, req.body.password);
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        username: req.body.username,
        password: hash,
        name: req.body.name,
        surname: req.body.surname,
        admin: false
      })
      user.save().then(result=>{

      });
      user.save().then(result => {
          res.status(201).json({
              message: 'User created!',
              result: result
          });
      })
      .catch(err => {
        res.status(500).json({
            message: user.username + ", " + user.password + ", " + user.name + ", " + user.surname + ", " + user.admin
        });
      });
    });
})
}

exports.loginUser = (req,res,next) =>{

  /* Testni podatki
  req.body.username="vidko123";
  req.body.password="geslo123";
  */

    let fetchedUser;
    User.findOne({username: req.body.username})
    .then(user =>{
        if(!user){
          return res.status(401).json({
            message:"Auth failed! No such user"
          });
        }
        fetchedUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then(result =>{
      if(!result){
        return res.status(401).json({
          message:"Auth failed"
        });
      }
      const token = jwt.sign({username: fetchedUser.username, userId:fetchedUser._id}, 'secret_this_should_be_longer', {expiresIn: "1h"});
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId:fetchedUser._id
      });
    }).catch(err =>{
      return res.status(401).json({
        message:"Invalid authentication credentials!"
      });
    });
}

exports.getRequest = (req,res,next) =>{

  /*
  req.params.userId="5ec15b1cfc73bf4f3856ed45";
  */

  const userId = req.params.userId;
  const postBoxQuery = PostBox.find({owner: userId, requestForOpen:true});

  postBoxQuery.then(documents =>{
    res.status(200).json({
      message:"Getting requests was succesfull!",
      postBoxesWithRequest: documents
    })
  }).catch(error =>{
    res.status(500).json({
      message:"Getting requests failed!"
    })
  })
}

exports.openPostBox = (req,res,next)=>{

  /*  Testni podatki
   req.params.idPostBox = "5ec29495496ccb0868caf685";
  */

  const idPostBox = req.params.idPostBox;
  const postBoxQuery = PostBox.findOne({_id:idPostBox, opened: false});

  postBoxQuery.then(document =>{
    document.opened = true;
    document.requestForOpen = false;
    document.save().then(modifiedPostBox =>{
      res.status(201).json({
        message: 'Post box opened!',
        modifiedPostBox: modifiedPostBox
      })
    }).catch(error =>{
      res.status(500).json({
        message: 'Something went wrong'
      })
    })
  }).catch(error =>{
    res.status(500).json({
      message: 'Opening post box failed!'
    })
  })
}
