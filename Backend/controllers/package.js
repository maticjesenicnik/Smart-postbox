const PackageShcema = require('../models/package');

exports.deliverPackage = (req,res,next) =>{

    req.body.qrCode = "412941232";
    
    PackageShcema.findOne({qrCode: req.body.qrCode}).then(package =>{
        package.deliverd = true;
        package.save().then(modifiedPackage =>{
            res.status(201).json({
                message: 'Package deliverd!',
                modifiedPostBax: modifiedPackage
            })
        }).catch(error =>{
            res.status(500).json({
                message: 'Something went wrong!'
            })
        })
    }).catch(error =>{
        res.status(500).json({
            message: 'Username not found!'
        })
    })
}