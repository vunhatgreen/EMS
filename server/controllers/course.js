const Course = require('../models/course')

module.exports = {
    create: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Course.create({ id: req.body.id, name: req.body.name, room: req.body.room, start: req.body.start, end: req.body.end, lecturer: req.body.lecturer, 
                prerequisite: req.body.prerequisite, parallel: req.body.parallel }, (err, result) => {
                if (err) {
                    res.send({ type: 'danger', message: 'Dữ liệu nhập có vấn đề!' })
                    console.log(err)
                }
                else {
                    res.send({ type: 'success', message: 'Đã thêm vào cơ sở dữ liệu!' })
                    console.log(result)
                }
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    },
    update: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Course.updateOne({ id: req.params.id }, { '$set': { 'id': req.body.id, 'name': req.body.name, 'room': req.body.room, 'start': req.body.start, 'end': req.body.end, 
                'lecturer': req.body.lecturer, 'prerequisite': req.body.prerequisite, 'parallel': req.body.parallel } }, (err, result) => {
                if (err) {
                    res.send({ type: 'danger', message: 'Dữ liệu nhập có vấn đề!' })
                    console.log(err)
                }
                else {
                    res.send({ type: 'success', message: 'Dữ liệu đã được cập nhật!' })
                    console.log(result)
                }
            })
            Course.updateMany({ prerequisite: req.params.id }, { '$set': { 'prerequisite': req.body.id } }, (err, result) => {
                console.log(result)
            })
            Course.updateMany({ parallel: req.params.id }, { '$set': { 'parallel': req.body.id } }, (err, result) => {
                console.log(result)
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    },

    delete: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Course.deleteMany({ id: req.params.id }, (err, result) => {
                if (err) {
                    res.send({ type: 'danger', message: 'Không thể xóa dữ liệu!' })
                    console.log(err)
                }
                else {
                    res.send({ type: 'success', message: 'Xóa dữ liệu thành công!' })
                    console.log(result)
                }
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    },

    getOne: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Course.find({ id: req.params.id }, (err, result) => {
                res.json(result)
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    },

    getAll: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Course.find({}, (err, result) => {
                res.json(result)
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    }
};
