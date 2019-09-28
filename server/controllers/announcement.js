const Announcement = require('../models/announcement')

module.exports = {
    create: (req, res) => {
        Announcement.create({ id: req.body.id, title: req.body.title, date: new Date(), group: req.body.group, content: req.body.content }, (err, result) => {
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
        Announcement.updateOne({ id: req.params.id }, { '$set': { 'title': req.body.title, date: new Date(), 'group': req.body.group, 'content': req.body.content } }, (err, result) => {
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
        Announcement.deleteMany({ id: req.params.id }, (err, result) => {
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
        Announcement.find({ id: req.params.id }, (err, result) => {
            res.json(result)
        })
    },

    getAll: (req, res) => {
        Announcement.find({}, (err, result) => {
            res.json(result)
        })
    }
};
