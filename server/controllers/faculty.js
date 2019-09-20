const Faculty = require('../models/faculty')

export default {
    create: (req, res) => {
        new Faculty({
            id: req.body.id,
            name: req.body.name
        })
    },
    update: (req, res) => {
        
    },

    delete: (req, res) => {
        Faculty.deleteMany({ id: req.params.id }, (err, result) => {

        })
    },

    getOne: (req, res) => {
        Faculty.find({id: req.params.id}, (err, element) => {

        })
    },
    
    getAll: (req, res) => {
        Faculty.find({}, (err, element) => {

        })
    }
};
