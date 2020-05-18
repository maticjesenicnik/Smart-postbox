const PostBox = require('../models/postBox');


/**
 * Funkcija dobi kot parameter userId in ga primerja z ownerjem v modelu PostBox
 */
exports.showMyPostBoxes = (req,res,next)=>{
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
        postBox.owner = req.params.userId;
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
            message: 'Activation code is wrong!'
        })
    })
}