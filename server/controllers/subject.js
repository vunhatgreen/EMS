const Subject = require('../models/subject')

module.exports = {
    create: (req, res) => {
        Subject.create({ id: req.body.id, name: req.body.name, credit: req.body.credit, prerequisite: req.body.prerequisite, parallel: req.body.parallel }, (err, result) => {
            if (err) {
                res.send({type: 'danger', message: 'Dữ liệu nhập có vấn đề!'})
                console.log(err)
            }
            else {
                res.send({type: 'success', message: 'Đã thêm vào cơ sở dữ liệu!'})
                console.log(result)
            }
        })
    },
    update: (req, res) => {
        Subject.updateOne({ id: req.params.id }, { '$set': {'id': req.body.id, 'name': req.body.name, 'credit': req.body.credit, 'prerequisite': req.body.prerequisite, 'parallel': req.body.parallel} }, (err, result) => {
            if (err) {
                res.send({type: 'danger', message: 'Dữ liệu nhập có vấn đề!'})
                console.log(err)
            }
            else {
                res.send({type: 'success', message: 'Dữ liệu đã được cập nhật!'})
                console.log(result)
            }
        })
        Subject.updateMany({ prerequisite: req.params.id }, { '$set': { 'prerequisite': req.body.id } }, (err, result) => {
            console.log(result)
        })
        Subject.updateMany({ parallel: req.params.id }, { '$set': { 'parallel': req.body.id } }, (err, result) => {
            console.log(result)
        })
    },

    delete: (req, res) => {
        Subject.deleteMany({ id: req.params.id }, (err, result) => {
            if (err) {
                res.send({type: 'danger', message: 'Không thể xóa dữ liệu!'})
                console.log(err)
            }
            else {
                res.send({type: 'success', message: 'Xóa dữ liệu thành công!'})
                console.log(result)
            }
        })
    },

    getOne: (req, res) => {
        Subject.find({ id: req.params.id }, (err, result) => {
            res.json(result)
        })
    },

    getAll: (req, res) => {
        Subject.find({}, (err, result) => {
            res.json(result)
        })
    }
};
