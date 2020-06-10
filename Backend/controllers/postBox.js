const PostBox = require('../models/postBox');
const Package = require('../models/package');
const chechAuth = require('../middleware/check-auth');

/**
 * Funkcija dobi kot parameter userId in ga primerja z ownerjem v modelu PostBox
 */
exports.showMyPostBoxes = (req,res,next) => {
    const userId = req.params.userId;
    const postBoxQuery = PostBox.find({owner: userId});

    postBoxQuery.then(documents =>{
        res.status(200).json({
            message:"Getting post boxes successfully!",
            postBoxes: documents
        });
    }).catch(error =>{
        res.status(500).json({
            message: "Getting post boxes failed!"
        });
    });
}

/**
 * Funkcija dobi kot parameter userId in v post bodyju aktivacijsko kodo ki jo vpiše na spletni strani
 */
exports.addToMyPostBoxes = (req,res,next) =>{
  PostBox.findOne({activationCode: req.body.activationCode}).then(postBox =>{
    postBox.owner = req.body.owner;
      postBox.save().then(modifiedPostBox =>{
        res.status(201).json({
          message: 'Post box is now yours!',
          modifiedPostBox: modifiedPostBox
        })
        }).catch(error =>{
          res.status(500).json({
            message: 'Something went wrong!'
          })
        })
  }).catch(error =>{
    res.status(500).json({
      message: "Wrong Activation Code"
    })
  })
}

exports.turnHeaterOn = (req,res,next)=>{

    const idPostBox = req.body.id;
    const postBoxQuery = PostBox.findOne({_id:idPostBox, heater: false});

    postBoxQuery.then(document =>{
        document.heater = true;
        document.save().then(modifiedPostBox =>{
            res.status(201).json({
                message: 'Heater is ON!',
                modifiedPostBox: modifiedPostBox
            })
        }).catch(error =>{
            res.status(500).json({
                message: 'Something went wrong!'
            })
        })
    }).catch(error =>{
        res.status(500).json({
            message: 'Turning heater ON wasnt successfull'
        })
    })
  }

  exports.turnHeaterOff = (req,res,next)=>{

    const idPostBox = req.body.id;
    const postBoxQuery = PostBox.findOne({_id:idPostBox, heater: true});

    postBoxQuery.then(document =>{
        document.heater = false;
        document.save().then(modifiedPostBox =>{
            res.status(201).json({
                message: 'Heater is OFF!',
                modifiedPostBox: modifiedPostBox
            })
        }).catch(error =>{
            res.status(500).json({
                message: 'Something went wrong!'
            })
        })
    }).catch(error =>{
        res.status(500).json({
            message: 'Turning heater OFF wasnt successfull'
        })
    })
  }

  exports.checkIfPackagesArrived = (req,res,next)=>{


    //req.body.weightFromPostBox = 30.4;
    //req.params.userId="5ec4368707b6d60f64cfde91";
    //req.params.postBoxId="5ec29495496ccb0868caf685";


    const postBoxId = req.params.postBoxId;
    const ownersId = req.params.userId;
    const weightFromPostBox = req.body.weightFromPostBox;


    const packageQuery = Package.find({ownersId: ownersId,postBoxId: postBoxId, deliverd: true});
    var totalWeight = 0.0;

    packageQuery.then(documents =>{
        documents.forEach(document=>{
            totalWeight+=document.weight;
        })
        if(totalWeight >= weightFromPostBox - 5.0 && totalWeight <= weightFromPostBox + 5.0){
            res.status(201).json({
                message: 'Packages deliverd!',
                totalWeight: totalWeight
            })
        }else{
            res.status(500).json({
                message: 'Post box is empty or doesnt fit deliverd packages!'
            })
        }
    }).catch(error =>{
        res.status(500).json({
            message: 'Checking post box failed!'
        })
    })
  }

  exports.pickUpPackages = (req,res,next)=>{

    const postBoxId = req.params.postBoxId;

    Package.deleteMany({postBoxId:postBoxId, deliverd: true}).then(deletedPackages =>{
        res.status(201).json({
            message: 'Packages picked up!',
            deletedPackages: deletedPackages
        })
    }).catch(error =>{
        res.status(500).json({
            message: 'Something went wrong!'
        })
    })

  }
