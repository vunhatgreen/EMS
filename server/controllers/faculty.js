const Faculty = require('../models/faculty')

module.exports = {
    create: (req, res) => {
        new Faculty({
            id: req.body.id,
            name: req.body.name
        }).save()
        res.send("Đã thêm khoa " + req.body.name + " vào cơ sở dữ liệu")
        console.log("Đã thêm khoa " + req.body.name + " vào cơ sở dữ liệu")
    },
    update: (req, res) => {
        Faculty.updateOne({ id: req.params.id }, { '$set': { 'id': req.body.id, 'name': req.body.name } }, (err, item) => {
            console.log(item)
            res.send("Finish")
        })
    },

    delete: (req, res, next) => {
        Faculty.deleteMany({ id: req.params.id }, (err, result) => {
            res.send("Finish")
            if (err) return next(err)
            else console.log(result)
        })
    },

    getOne: (req, res) => {
        Faculty.find({ id: req.params.id }, (err, element) => {
            res.json(element)
        })
    },

    getAll: (req, res) => {
        Faculty.find({}, (err, element) => {
            res.json(element)
        })
    }
};
