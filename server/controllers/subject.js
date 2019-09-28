const Subject = require('../models/subject')

module.exports = {
    create: (req, res) => {
        new Subject({
            id: req.body.id,
            name: req.body.name,
            credit: req.body.credit,
            prerequisite: req.body.prerequisite,
            parallel: req.body.parallel
        }).save()
    },
    update: (req, res) => {
        Subject.updateOne({id: req.params.id}, {'$set': {'id': req.body.id, 'name': req.body.name, 'credit': req.body.credit, 'prerequisite': req.body.prerequisite, 'parallel': req.body.parallel}}, (err, item) => {
            console.log(item)
          })
    },

    delete: (req, res, next) => {
        Subject.deleteMany({ id: req.params.id }, (err, result) => {
            if (err) return next(err)
            else console.log(result)
        })
    },

    getOne: (req, res) => {
        Subject.find({id: req.params.id}, (err, element) => {
            res.json(element)
        })
    },
    
    getAll: (req, res) => {
        Subject.find({}, (err, element) => {
            res.json(element)
        })
    }
};
