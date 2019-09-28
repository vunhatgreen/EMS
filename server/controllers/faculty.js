const Faculty = require('../models/faculty')
const Major = require('../models/major')

module.exports = {
    create: (req, res) => {
        Faculty.create({ id: req.body.id, name: req.body.name }, (err, result) => {
            if (err) {
                res.send({ type: 'danger', message: 'Dữ liệu nhập có vấn đề!' })
                console.log(err)
            }
            else {
                res.send({ type: 'success', message: 'Đã thêm vào cơ sở dữ liệu!' })
                console.log(result)
            }
        })
    },
    update: (req, res) => {
        Faculty.updateOne({ id: req.params.id }, { '$set': { 'id': req.body.id, 'name': req.body.name } }, (err, result) => {
            if (err) {
                res.send({ type: 'danger', message: 'Dữ liệu nhập có vấn đề!' })
                console.log(err)
            }
            else {
                res.send({ type: 'success', message: 'Dữ liệu đã được cập nhật!' })
                console.log(req.params.id + " " + req.body.id)
                console.log(result)
            }
        })
        Major.updateMany({ faculty: req.params.id }, { '$set': { 'faculty': req.body.id } }, (err, result) => {
            console.log(result)
        })
    },

    delete: (req, res) => {
        Faculty.deleteMany({ id: req.params.id }, (err, result) => {
            if (err) {
                res.send({ type: 'danger', message: 'Không thể xóa dữ liệu!' })
                console.log(err)
            }
            else {
                res.send({ type: 'success', message: 'Xóa dữ liệu thành công!' })
                console.log(result)
            }
        })
    },

    getOne: (req, res) => {
        Faculty.find({ id: req.params.id }, (err, result) => {
            res.json(result)
        })
    },

    getAll: (req, res) => {
        Faculty.find({}, (err, result) => {
            res.json(result)
        })
    }
};
