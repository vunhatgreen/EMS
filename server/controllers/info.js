const Info = require('../models/info')

module.exports = {
    create: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Info.create({ username: req.body.username, name: req.body.name }, (err, result) => {
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
            Info.updateOne({ username: req.params.password }, { '$set': { 'username': req.body.username, 'name': req.body.name } }, (err, result) => {
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
            Info.deleteMany({ username: req.params.username }, (err, result) => {
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
            Info.find({ username: req.params.username }, (err, result) => {
                res.json(result)
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    },

    getAll: (req, res) => {
        if (req.signedCookies.name === 'admin') {
            Info.find({}, (err, result) => {
                res.json(result)
            })
        } else res.send("Bạn không có thẩm quyền truy cập")
    }
};
