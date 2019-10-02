const Major = require('../models/major')

module.exports = {
    create: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Major.create({ id: req.body.id, name: req.body.name, faculty: req.body.faculty }, (err, result) => {
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
            Major.updateOne({ id: req.params.id }, { '$set': { 'id': req.body.id, 'name': req.body.name, 'faculty': req.body.faculty } }, (err, result) => {
                if (err) {
                    res.send({ type: 'danger', message: 'Dữ liệu nhập có vấn đề!' })
                    console.log(err)
                }
                else {
                    res.send({ type: 'success', message: 'Dữ liệu đã được cập nhật!' })
                    console.log(result)
                }
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    },

    delete: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Major.deleteMany({ id: req.params.id }, (err, result) => {
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
            Major.find({ id: req.params.id }, (err, result) => {
                res.json(result)
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    },

    getAll: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Major.find({}, (err, result) => {
                res.json(result)
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    }
};
