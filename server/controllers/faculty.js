const Faculty = require('../models/faculty')

module.exports = {
    create: (req, res) => {
        new Faculty({
            id: req.body.id,
            name: req.body.name
        }).save()
    },
    update: (req, res) => {
        
    },

    delete: (req, res, next) => {
        Faculty.deleteMany({ id: req.params.id }, (err, result) => {
            if (err) return next(err)
            else console.log(result)
        })
    },

    getOne: (req, res) => {
        Faculty.find({id: req.params.id}, (err, element) => {
            res.json(element)
        })
    },
    
    getAll: (req, res) => {
        Faculty.find({}, (err, element) => {
            res.json(element)
        })
    }
};
