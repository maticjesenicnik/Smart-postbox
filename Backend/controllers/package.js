const PackageShcema = require('../models/package');

exports.deliverPackage = (req,res,next) =>{

    /*  Testni podatki
    req.body.qrCode = "412941232";
    */

    PackageShcema.findOne({qrCode: req.body.qrCode, deliverd: false}).then(package =>{
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
            message: 'User not found!'
        })
    })
}

exports.showMyPackages = (req,res,next)=>{
    
    const userId = req.params.userId;
    const packageQuery = PackageShcema.find({ownersId: userId, deliverd: false});

    packageQuery.then(documents =>{
        res.status(200).json({
            message:"Getting packages successfully!",
            packages: documents
        });
    }).catch(error =>{
        res.status(500).json({
            message: "Getting packages failed!"
        });
    })
}