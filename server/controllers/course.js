const Course = require('../models/course')

module.exports = {
    create: (req, res) => {
        Course.create({ id: req.body.id, name: req.body.name }, (err, result) => {
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
        Course.updateOne({ id: req.params.id }, { '$set': { 'id': req.body.id, 'name': req.body.name } }, (err, result) => {
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
        Course.deleteMany({ id: req.params.id }, (err, result) => {
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
        Course.find({ id: req.params.id }, (err, result) => {
            res.json(result)
        })
    },

    getAll: (req, res) => {
        Course.find({}, (err, result) => {
            res.json(result)
        })
    }
};
