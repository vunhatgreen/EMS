const User = require('../models/User')

module.exports = {
    create: (req, res) => {
        new User({
            username: req.body.username,
            password: req.body.password
        }).save()
    },
    update: (req, res) => {
        
    },

    delete: (req, res, next) => {
        User.deleteMany({ id: req.params.id }, (err, result) => {
            if (err) return next(err)
            else console.log(result)
        })
    },

    getOne: (req, res) => {
        User.find({id: req.params.id}, (err, element) => {
            res.json(element)
        })
    },
    
    getAll: (req, res) => {
        User.find({}, (err, element) => {
            res.json(element)
        })
    }
};
