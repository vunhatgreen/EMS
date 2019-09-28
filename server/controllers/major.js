const Major = require('../models/major')

module.exports = {
    create: (req, res) => {
        Major.create({ id: req.body.id, name: req.body.name, faculty: req.body.faculty }, (err, result) => {
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
        Major.updateOne({ id: req.params.id }, { '$set': { 'id': req.body.id, 'name': req.body.name, 'faculty': req.body.faculty } }, (err, result) => {
            if (err) {
                res.send({type: 'danger', message: 'Dữ liệu nhập có vấn đề!'})
                console.log(err)
            }
            else {
                res.send({type: 'success', message: 'Dữ liệu đã được cập nhật!'})
                console.log(result)
            }
        })
    },

    delete: (req, res) => {
        Major.deleteMany({ id: req.params.id }, (err, result) => {
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
        Major.find({ id: req.params.id }, (err, result) => {
            res.json(result)
        })
    },

    getAll: (req, res) => {
        Major.find({}, (err, result) => {
            res.json(result)
        })
    }
};
