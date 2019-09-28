const User = require('../models/user')

module.exports = {
    create: (req, res) => {
        User.create({ username: req.body.username, password: req.body.password }, (err, result) => {
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
        User.updateOne({ username: req.params.password }, { '$set': { 'username': req.body.username, 'password': req.body.password } }, (err, result) => {
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
        User.deleteMany({ id: req.params.id }, (err, result) => {
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
        User.find({ id: req.params.id }, (err, result) => {
            res.json(result)
        })
    },

    getAll: (req, res) => {
        User.find({}, (err, result) => {
            res.json(result)
        })
    }
};
