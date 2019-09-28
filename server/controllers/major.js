const Major = require('../models/major')

module.exports = {
    create: (req, res) => {
        new Major({
            id: req.body.id,
            name: req.body.name,
            faculty: req.body.faculty
        }).save()
    },
    update: (req, res) => {
        Major.updateOne({id: req.params.id}, {'$set': {'id': req.body.id, 'name': req.body.name, 'faculty': req.body.faculty}}, (err, item) => {
            console.log(item)
          })
    },

    delete: (req, res, next) => {
        Major.deleteMany({ id: req.params.id }, (err, result) => {
            if (err) return next(err)
            else console.log(result)
        })
    },

    getOne: (req, res) => {
        Major.find({id: req.params.id}, (err, element) => {
            res.json(element)
        })
    },
    
    getAll: (req, res) => {
        Major.find({}, (err, element) => {
            res.json(element)
        })
    }
};
